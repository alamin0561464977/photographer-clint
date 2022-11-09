import React, { useContext } from 'react';
import { AuthContext } from '../ContextAPI/UserContext';
import Login from '../Pages/Login/Login';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <h2>loading</h2>
    }
    if (user) {
        return children;
    }
    else {
        return <Login></Login>
    }
};

export default PrivateRouter;