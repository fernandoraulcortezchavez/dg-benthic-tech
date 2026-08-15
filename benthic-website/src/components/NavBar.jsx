import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="bg-darkest">
            <ul className="nav-list list-reset">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/staff">Staff</Link></li>
                {/* HEY, INTERN, YOU'RE SUPPOSED TO REMOVE THIS MENU ITEM, NOT JUST HIDE IT!!!*/}
                <li style={{ visibility: "hidden" }}><a href="/other_assets">Other Assets</a></li>
                <li><Link to="/roster">Roster</Link></li>
            </ul>
        </nav>
    );
}