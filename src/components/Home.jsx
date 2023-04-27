import React, { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';

const Home = () => {
    const {user} = useContext(authContext)
    console.log(user)
 
    return (
        <div>
            <h2>This is Home page {user && <span className='text-orange-400'>{user.displyName}</span>} </h2>
        </div>
    );
};

export default Home;