import '../scss/PortfolioBlock.scss'
import Slider from "react-slick";
import { useState, useEffect } from 'react';
import { NextArrow, PrevArrow } from './CustomArrow';

export default function PortfolioBlock() {
    const [portfolioFetch, setPortfolioFetch] = useState([])
    useEffect(() => {
        fetch('data/PortfolioItems.json')
            .then(res => res.json())
            .then(data => setPortfolioFetch(data));
    }, []);
    const [settings, setSettings] = useState(
        {
            dots: true,
            infinite: true,
            speed: 500,
            centerMode: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1624,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1200,

                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2,
                        dots: true
                    }
                }

            ],
        }
    )

    useEffect(() => {
        let slides = settings.slidesToShow
        settings.responsive.forEach((brkp) => {
            if (window.innerWidth <= brkp.breakpoint) {
                slides = brkp.settings.slidesToShow
            }
        })
        setSettings({ ...settings, slidesToShow: slides, slidesToScroll: slides })
    }, [])



    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <Slider {...settings}>
                {portfolioFetch.map((portfolioItem, index) => (
                    <div key={index} className="p-slider-item">
                        <div className='portfolio-item' >
                            <div className="portfolio-item-img">
                                <img src={portfolioItem.img} alt={portfolioItem.alt} loading="lazy" />
                            </div>
                            <div className="portfolio-item-title">{portfolioItem.title}</div>
                            <a href={portfolioItem.href} target='_blank' className="portfolio-item-link">{(portfolioItem.href.length > 30) ? "Link" : portfolioItem.href}</a>
                            <div className="portfolio-item-descr">{portfolioItem.descr}</div>
                            <div className="portfolio-item-stack">Технології:</div>
                            <div className='portfolio-item-stack-list'>{portfolioItem.stackList}
                            </div>
                        </div>
                    </div>
                ))}

            </Slider>
        </section>
    )
}