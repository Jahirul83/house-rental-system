import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, {  useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../firebase/firebase.config';

const auth = getAuth(app);

const PrivateRoutes = ({childen}) => {
    const [user, setUser] = useState(null)

    const location = useLocation()

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user in state', currentUser)
            setUser(currentUser)
        })

        return () => unSubscribe();

    }, [])
    if(user && user.uid){
        return childen
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;