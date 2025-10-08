import '../scss/FooterSite.scss'
import { NavLink } from 'react-router';
import { useState, useEffect } from 'react';
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
export default function FooterSite() {
    const [socialBlock, setSocialBlock] = useState([])
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
    return (
        <footer>
            <div className="container">
                <p className='footer-q'>"Сайт — це інвестиція у майбутнє вашого бізнесу"</p>
                <div className="footer-items">
                    <div className="footer-item">
                        <div className="logo"><a href="#" className="logo"><img src="images/logo.png" alt="logo" /></a></div>
                    </div>
                    <nav>
                        <ul className="footer-navbar">
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
                                <NavLink to="/price">Price</NavLink>
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
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    );
}
