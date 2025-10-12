import { NavLink } from 'react-router';
import { useState, useEffect } from 'react';
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import '../scss/BurgerMenu.scss'
export default function BurgerMenu({ burgerOpen, setBurgerOpen }) {
    const [socialBlock, setSocialBlock] = useState([])
    useEffect(() => {
        fetch('data/SocialBlock.json')
            .then(res => res.json())
            .then(data => setSocialBlock(data));
    }, []);
    const [socialNewBlock, setSocialNewBlock] = useState([])
    useEffect(() => {
        fetch('data/FooterSocial.json')
            .then(res => res.json())
            .then(data => setSocialNewBlock(data));
    }, []);
    const iconMap = {
        telegram: <PiTelegramLogoDuotone />,
        call: <IoCallOutline />,
        email: <TfiEmail />,
        github: <FaGithub />,
        cv: <IoDocumentTextOutline />,
        instagram: <FaInstagram />
    };
    return (
        <div className={`burger-menu${burgerOpen ? ' open' : ''}`}>
            <div className="container">
                <nav>
                    <ul className="header-navbar">
                        <li>
                            <NavLink className="me-3" to="/" onClick={() => setBurgerOpen(false)}>Загальна</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio" className="me-3" onClick={() => setBurgerOpen(false)}>Портфоліо</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" onClick={() => setBurgerOpen(false)}>Блог</NavLink>
                        </li>
                        <li>
                            <NavLink to="/price" onClick={() => setBurgerOpen(false)}>Прайс</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='footer-item'>
                    Мої контакти:
                    <ul className="footer-social">
                        {socialBlock.map((socialBlockItem, index) => (
                            <li key={index}>
                                <a target="_blank" href={socialBlockItem.href}>{iconMap[socialBlockItem.img]}</a>
                            </li>
                        ))}
                        {socialNewBlock.map((socialNewBlockItem, index) => (
                            <li key={index}>
                                <a target="_blank" href={socialNewBlockItem.href}>{iconMap[socialNewBlockItem.img]}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <button onClick={() => setBurgerOpen(false)}>Закрити</button> */}
            </div>

        </div>
    )
}