import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const Filter = () => {
    const dispatch = useDispatch()
    return (
        <div className="filter">
            filter <input
            type="text"
            name="filter"
            onChange={(e) => dispatch( filterChange(e.target.value) )}
            />
        </div>
    )
}

export default Filter