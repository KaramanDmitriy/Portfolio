import '../scss/HomePage.scss'
import SocialBlock from '../components/SocialBlock'

export default function HomePage() {
    return (
        <>
            <section id='hero'>
                <div className='hero-main'>
                    <div className="hero-content">
                        <h1><b>Ваша ідея оживає тут.</b> <br />Займаюсь розробкою сайтів які відкривають можливості</h1>
                        <p>Мене звати <strong>Караман Дмитро</strong>, я РМ та Веб-розробник з досвідом у створенні сайтів, які не просто працюють, а реалізують ідеї замовника, виділяються серед конкурентів і привертають увагу. </p>
                        <p><b>Моя робота</b> — це не шаблонне програмування, а комплексний підхід до створення веб-продукту. Я глибоко аналізую побажання клієнта, досліджую конкурентів та створюю сайт у сучасному стилі, який відповідає  потребам бізнесу.</p>
                    </div>
                    <div className="hero-img">
                        <img src="images/Hero.png" alt="Developer" />
                    </div>
                </div>
                <div className='hero-footer'></div>
            </section>
            <SocialBlock />
        </>
    )
}