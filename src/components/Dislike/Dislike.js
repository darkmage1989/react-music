import { useDispatch, useSelector } from 'react-redux'
import {
  useDislikeSongMutation,
  useRefreshTokenMutation
} from '../../services/apis'
import { addLoginData } from '../../services/slices/loginSlice '

function Dislike() {
  const [refresh] = useRefreshTokenMutation()
  const [dislikeSong] = useDislikeSongMutation()
  const dispatch = useDispatch()
  const token = useSelector((state) => state.LoginData)
  const access = token.access
  const dislike = (event) => {
    const target = event.target
    const id = target.parentElement.parentElement.id
    console.log(id)
    const formData = new FormData()
    formData.append('refresh', token.refresh)
    refresh(formData).then((data) => {
      const { access } = data.data
      dispatch(addLoginData({ access }))
    })
    dislikeSong({ id, access })
  }
  return (
    <svg
      onClick={dislike}
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L15 13.5" stroke="#696969" />
      <path
        d="M8.34372 3.25572H8.36529C9.29718 2.44175 11.7563 1.16576 13.9565 2.76734C17.3111 5.20921 14.2458 10.5 8.36529 14H8.34372M8.34378 3.25572H8.32221C7.39032 2.44175 4.93121 1.16576 2.73102 2.76734C-0.623552 5.20921 2.44172 10.5 8.32221 14H8.34378"
        stroke="#696969"
      />
    </svg>
  )
}

export default Dislike
