import { PiTelegramLogoDuotone } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import '../scss/SocialBlock.scss'
import { useState, useEffect } from "react";
export default function SocialBlock() {
    const [socialBlock, setSocialBlock] = useState([])
    const [enticement, setEnticement] = useState([])
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
    useEffect(() => {
        fetch('data/Enticement.json')
            .then(res => res.json())
            .then(data => setEnticement(data));
    }, []);
    return (
        <>
            <div className="social-block">
                <ul className="social-block-list">
                    {socialBlock.map((socialBlockItem, index) => (
                        <li key={index} className="social-block-item"><a target="_blank" href={socialBlockItem.href}>
                            <div className="social-block-img">
                                {iconMap[socialBlockItem.img]}
                            </div>
                            <div className="social-block-content">
                                <div className="social-content-title">{socialBlockItem.title}</div>
                                <div className="social-content-subtitle">{socialBlockItem.subtitle}</div>
                            </div>

                        </a></li>
                    ))}
                </ul>
            </div>
            <div className="container">
                <div className="enticement">
                    <h3 dangerouslySetInnerHTML={{ __html: enticement[0]?.title }}></h3>
                    <div className="enticement-arrow">
                        <img src="images/Component1.svg" alt="Arrow" />
                    </div>
                    <p>{enticement[0]?.text}</p>
                </div>
            </div >
        </>
    )
}