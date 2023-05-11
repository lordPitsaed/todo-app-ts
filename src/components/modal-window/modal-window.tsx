import React from 'react'
import './modal-window.css'
const ModalWindow: React.FC<{
    openModal: boolean
    toggleModal: () => void
}> = ({ openModal, toggleModal }) => {
    return (
        <div
            className="wrapper"
            style={openModal ? { display: 'block' } : { display: 'none' }}
        >
            <div className="modal">
                <div className="modal-header">DANGER ZONE</div>
                <div className="modal-body">
                    Do you really want to clear all data in LocalStorage. This
                    will erase <span style={{ color: 'tomato' }}>ALL</span> todo
                    data!
                </div>
                <div className="modal-buttons-wrapper">
                    <button
                        className="modal-yes"
                        onClick={() => {
                            localStorage.clear()
                            toggleModal()
                        }}
                    >
                        Yes
                    </button>
                    <button
                        className="modal-no"
                        onClick={() => {
                            toggleModal()
                        }}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow
