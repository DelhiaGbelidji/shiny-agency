import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/survey/42">Survey</Link>
        </nav>
    )
}

export default Header