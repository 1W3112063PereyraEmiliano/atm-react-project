import { Outlet, Navigate } from 'react-router-dom'
const PrivateRoutes = () => {
    let auth = { 'token': false }
    return (
        auth.token ? <Outlet /> : <Navigate to="/public_dashboard" />
    )
}
export default PrivateRoutes;