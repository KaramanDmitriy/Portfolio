import { PiTelegramLogoDuotone } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import '../scss/SocialBlock.scss'
export default function SocialBlock() {
    return (
        <>
            <div className="social-block">
                <ul className="social-block-list">
                    <li className="social-block-item"><a target="_blank" href="https://t.me/Karaman_D">
                        <div className="social-block-img">
                            <PiTelegramLogoDuotone />
                        </div>
                        <div className="social-block-content">
                            <div className="social-content-title">Напиши в телеграм</div>
                            <div className="social-content-subtitle">https://t.me/Karaman_D</div>
                        </div>

                    </a></li>
                    <li className="social-block-item"><a target="_blank" href="tel:380987064867">
                        <div className="social-block-img">
                            <IoCallOutline />
                        </div>
                        <div className="social-block-content">
                            <div className="social-content-title">Зателефонуй</div>
                            <div className="social-content-subtitle">+38(098) 706 48 67</div>
                        </div>
                    </a></li>
                    <li className="social-block-item"><a target="_blank" href="mailto:KaramanDmitriy@gmail.com?subject=Web-dev-site">
                        <div className="social-block-img">
                            <TfiEmail />
                        </div>
                        <div className="social-block-content">
                            <div className="social-content-title">Напиши на пошту</div>
                            <div className="social-content-subtitle">KaramanDmitriy@gmail.com</div>
                        </div>
                    </a></li>
                </ul>
            </div>
            <div className="container">
                <div className="enticement">
                    <h3>Замовити сайт у <a href="#contacts">мене</a></h3>
                    <div className="enticement-arrow">
                        <img src="images/Component1.svg" alt="Arrow" />
                    </div>
                    <p>Це не просто отримати вебсторінку, а створити інструмент, який працює на вас: привертає увагу, викликає довіру і приносить результат. Я поєдную технічну точність з креативним підходом, щоб кожен сайт був адаптивним, швидким, безпечним та унікальним. Якщо ви шукаєте розробника, який перетворить ваші ідеї в реальність — ви його знайшли.</p>
                </div>
            </div>
        </>
    )
}