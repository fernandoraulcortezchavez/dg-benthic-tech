import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { mockAuth } from '../mockAuth'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function logIn() {
        try {
            await mockAuth.loginWithEmailAndPassword(email, password);
            navigate("/staff");
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
        <div>
            <h3>Login</h3>
            {error && <p>error</p>}
            <div>
                <p>Email:</p>
                <input value={email} placeholder="email@benthic.com" onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <p>Password:</p>
                <input value={password} placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
            </div>
            <button onClick={logIn}>Log In</button>
        </div>
        </>
    );
}