import { NavLink } from "react-router"
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import '../scss/HeaderSite.scss'
import { useEffect, useState } from "react";

export default function HeaderSite({ burgerOpen, setBurgerOpen }) {
    const [socialBlock, setSocialBlock] = useState([])
    const toggleMenu = () => setBurgerOpen(prev => !prev);
    useEffect(() => {
        fetch('data/SocialBlock.json')
            .then(res => res.json())
            .then(data => setSocialBlock(data));
    }, []);
    const iconMap = {
        telegram: <PiTelegramLogoDuotone />,
        call: <IoCallOutline />,
        email: <TfiEmail />
    };
    // const [burgerOpen, setBurgerOpen] = useState(false);

    // const toggleMenu = () => {
    //     setBurgerOpen(prev => !prev);
    // };
    return (
        <header >
            <a href="#" className="logo"><img src="images/logo.png" alt="logo" /></a>
            <nav>
                <ul className="header-navbar">
                    <li>
                        <NavLink className="me-3" to="/">Загальна</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className="me-3">Портфоліо</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Блог</NavLink>
                    </li>
                    <li>
                        <NavLink to="/price">Прайс</NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                <ul className="header-social">
                    {socialBlock.map((socialBlockItem, index) => (
                        <li key={index}>
                            <a target="_blank" href={socialBlockItem.href}>{iconMap[socialBlockItem.img]}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="burger">
                <button
                    type="button"
                    onClick={toggleMenu}
                    className={`burger-btn${burgerOpen ? ' close' : ''}`}
                >
                    <span></span>
                </button>
            </div>
        </header>
    )
}