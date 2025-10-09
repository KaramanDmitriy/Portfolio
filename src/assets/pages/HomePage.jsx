import '../scss/HomePage.scss'
import SocialBlock from '../components/SocialBlock'
import { useEffect, useState } from 'react';
import Skills from '../components/Skills';
import PortfolioBlock from '../components/PortfolioBlock';
import RoadMapWork from '../components/RoadMapWork';
import LinkCost from '../components/LinkCost';
import FormMain from '../components/FormMain';

export default function HomePage() {
    const [hero, setHero] = useState([])
    useEffect(() => {
        fetch('data/Hero.json')
            .then(res => res.json())
            .then(data => setHero(data));
    }, []);
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
                        <img src={hero[0]?.imgSrc} alt="Developer" />
                    </div>
                </div>
                <div className='hero-footer'></div>
            </section>
            <SocialBlock />
            <Skills />
            <PortfolioBlock />
            <RoadMapWork />
            <LinkCost />
            <FormMain />
        </>
    )
}