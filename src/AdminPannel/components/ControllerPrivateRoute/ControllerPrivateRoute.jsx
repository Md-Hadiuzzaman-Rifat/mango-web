import { useAuth } from '../../../context/AuthContext';
import { useGetUsersQuery } from '../../../features/users/userApi';
import { Navigate, Outlet } from 'react-router-dom';

const ControllerPrivateRoute = () => {
    const {currentUser}= useAuth() || {}
    // console.log(currentUser);
    
    const {data, isLoading}= useGetUsersQuery()
    let person= data?.find(e=>e.email===currentUser?.email)
    if (!isLoading){
        return person?.role === "admin" || person?.role === "moderator" && currentUser ? <Outlet></Outlet> : <Navigate to="/adminLogin"/>
    }
};

export default ControllerPrivateRoute;

