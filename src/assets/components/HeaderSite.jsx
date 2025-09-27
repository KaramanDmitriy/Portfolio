import { NavLink } from "react-router"
import { PiTelegramLogoDuotone } from "react-icons/pi";
import '../scss/HeaderSite.scss'

export default function HeaderSite() {
    return (
        <header>
            <a href="#" className="logo"><img src="images/logo1.png" alt="logo" />Web Developer</a>
            <nav>
                <ul className="npm run buo">
                    <li>
                        <NavLink className="me-3" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className="me-3">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts">Contacts</NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                <ul className="header-social">
                    <li>
                        <a target="_blank" href="https://t.me/Karaman_D"><PiTelegramLogoDuotone /></a>
                    </li>
                </ul>
            </div>

        </header>
    )
}