import '../scss/HomePage.scss'
import { useEffect, useState } from 'react';
import { Suspense, lazy } from 'react';

export default function HomePage() {
    const [hero, setHero] = useState([])
    useEffect(() => {
        fetch('data/Hero.json')
            .then(res => res.json())
            .then(data => setHero(data));
    }, []);
    const SocialBlock = lazy(() => import('../components/SocialBlock'));
    const Skills = lazy(() => import('../components/Skills'));
    const PortfolioBlock = lazy(() => import('../components/PortfolioBlock'));
    const RoadMapWork = lazy(() => import('../components/RoadMapWork'));
    const LinkCost = lazy(() => import('../components/LinkCost'));
    const FormMain = lazy(() => import('../components/FormMain'));
    return (
        <>
            <section id='hero'>
                <div className='hero-main'>
                    <div className="hero-content">
                        <h1 dangerouslySetInnerHTML={{ __html: hero[0]?.title }}></h1>
                        <p dangerouslySetInnerHTML={{ __html: hero[0]?.text1 }}></p>
                        <p dangerouslySetInnerHTML={{ __html: hero[0]?.text2 }}></p>
                        <p dangerouslySetInnerHTML={{ __html: hero[0]?.text3 }}></p>
                    </div>
                    <div className="hero-img">
                        <img src='images/Hero.png' alt="Developer" fetchpriority="high" />
                    </div>
                </div>
                <div className='hero-footer'></div>
            </section>
            <Suspense fallback={<div>Завантаження...</div>}>
                <SocialBlock />
            </Suspense>
            <Suspense fallback={<div>Завантаження...</div>}>
                <Skills />
            </Suspense>
            <Suspense fallback={<div>Завантаження...</div>}>
                <PortfolioBlock />
            </Suspense>
            <Suspense fallback={<div>Завантаження...</div>}>
                <RoadMapWork />
            </Suspense>
            <Suspense fallback={<div>Завантаження...</div>}>
                <LinkCost />
            </Suspense>
            <Suspense fallback={<div>Завантаження...</div>}>
                <FormMain />
            </Suspense>
        </>
    )
}