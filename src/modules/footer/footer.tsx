import ClearCompleted from '../../components/clear-completed/clear-completed'
import Filters from '../../components/filters/filters'
import ItemsLeft from '../../components/items-left/items-left'
import { Filter } from '../../custom_types'

export default function Footer({
    items,
    onFilterChange,
}: {
    items: number
    onFilterChange: (filter: Filter) => void
}) {
    return (
        <footer className="footer">
            <ItemsLeft items={items}></ItemsLeft>
            <Filters
                onFilterChange={(filter: Filter) => {
                    onFilterChange(filter)
                }}
            ></Filters>
            <ClearCompleted></ClearCompleted>
        </footer>
    )
}
