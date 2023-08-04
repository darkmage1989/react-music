/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
export const ProtectedRoute = ({ redirectPath = '/Login' }) => {
  const token = useSelector((state) => state.LoginData)
  if (token.access === '') {
    return <Navigate to={redirectPath} replace={true} />
  }
  return <Outlet />
}
