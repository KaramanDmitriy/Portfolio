import { NavLink } from "react-router"
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import '../scss/HeaderSite.scss'
import { useEffect } from "react";

export default function HeaderSite() {
    useEffect(() => {
        function handleScroll() {
            const header = document.querySelector('header');
            const scrollY = window.scrollY || window.pageYOffset;

            if (header) {
                if (scrollY > window.innerHeight) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header >
            <a href="#" className="logo"><img src="images/logo1.png" alt="logo" />Web Developer</a>
            <nav>
                <ul className="header-navbar">
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
                    <li>
                        <a target="_blank" href="https://t.me/Karaman_D"><IoCallOutline /></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://t.me/Karaman_D"><TfiEmail /></a>
                    </li>
                </ul>
            </div>

        </header>
    )
}