import React, { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children }) => {
    const {user, loading} = useContext(authContext);

    if(loading){
        return <progress className='progress w-56'></progress>
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' replace={true}></Navigate>

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;