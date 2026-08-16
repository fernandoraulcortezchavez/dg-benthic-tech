import { Link } from 'react-router-dom'
import useUser from '../useUser'
import { mockAuth } from '../mockAuth'
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const { user } = useUser();
    const navigate = useNavigate();

    return (
        <nav className="bg-darkest">
            <ul className="nav-list list-reset">
                <li><Link to="/">Home</Link></li>
                {user &&
                <>
                <li><Link to="/staff">Staff</Link></li>
                {/* HEY, INTERN, YOU'RE SUPPOSED TO REMOVE THIS MENU ITEM, NOT JUST HIDE IT!!!*/}
                <li style={{ visibility: "hidden" }}>
                    <a href="/other_assets">Other Assets</a>
                </li>
                <li>
                    <Link to="/roster">Roster</Link>
                </li>
                </>
                }
                <li>
                    {user 
                        ? <button onClick={function() {
                            mockAuth.logout();
                            navigate("/");
                        }}>Sign Out</button>
                        : <button onClick={() => navigate("/login")}>Sign In</button>}
                </li>
            </ul>
        </nav>
    );
}