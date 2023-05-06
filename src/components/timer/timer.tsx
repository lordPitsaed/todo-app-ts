import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { formatTimer } from '../../todo-helpers'

export default function Timer({
    timerCreated,
    done,
}: {
    timerCreated: number
    done: boolean
}) {
    const [timer, setTimer] = useState(timerCreated)
    const startTime: MutableRefObject<number> = useRef(Date.now())
    const timerId: MutableRefObject<
        number | undefined | ReturnType<typeof setTimeout>
    > = useRef(undefined)

    const tick = () => {
        const timeDiff = Date.now() - startTime.current
        let remaining = Math.round(timer - timeDiff / 1000)
        if (remaining < 0) {
            remaining = 0
            pauseTimer()
        }
        setTimer(remaining)
    }

    const startTimer = () => {
        if (!timerId.current) {
            startTime.current = Date.now()
            timerId.current = window.setInterval(() => {
                tick()
            }, 1000)
        }
    }

    const pauseTimer = () => {
        clearInterval(timerId.current)
        timerId.current = undefined
    }

    useEffect(() => {
        startTimer()
    }, [timer])

    useEffect(() => {
        return () => {
            pauseTimer()
        }
    }, [])

    useEffect(() => {
        done && pauseTimer()
    }, [done])

    return (
        <span className="description">
            <button
                className="icon icon-play"
                onClick={() => startTimer()}
            ></button>
            <button
                className="icon icon-pause"
                onClick={() => pauseTimer()}
            ></button>
            <span className="timer">{formatTimer(timer)}</span>
        </span>
    )
}
