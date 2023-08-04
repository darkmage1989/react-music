import { useDispatch } from 'react-redux'
import style from '../Dropdown/Dropdown.module.css'
import { addFilterData } from '../../services/slices/filterSlice '
function Year() {
  const dispatch = useDispatch()
  const setDateFilter = (event) => {
    const target = event.target
    const filterDate = target.parentElement.id
    dispatch(addFilterData({ filterDate }))
  }
  return (
    <div
      className={`${style.dropdown} ${style.dropdown__year}`}
      style={{
        position: 'absolute',
        top: '50px',
        left: '130px'
      }}
    >
      <div id="older" onClick={setDateFilter} className={style.item}>
        <input
          className="filter__dropdown__input"
          type="radio"
          name="filter"
          id="older"
        />
        <label>Более новые</label>
      </div>
      <div id="younger" onClick={setDateFilter} className={style.item}>
        <input
          className="filter__dropdown__input"
          type="radio"
          name="filter"
          id="younger"
        />
        <label>Более старые</label>
      </div>
    </div>
  )
}
export default Year
