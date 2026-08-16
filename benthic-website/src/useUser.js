import { useState, useEffect } from 'react'
import { mockAuth } from './mockAuth';

const useUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = mockAuth.onAuthStateChange(function(user) {
            setUser(user);
        });

        return unsubscribe;
    }, []);

    return { user }
}

export default useUser;