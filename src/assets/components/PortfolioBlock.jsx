import '../scss/PortfolioBlock.scss'
import Slider from "react-slick";

export default function PortfolioBlock() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <Slider {...settings}>
                <div className="p-slider-item">
                    <div className='portfolio-item' >
                        <h3>1</h3>
                    </div>
                </div>
                <div className="p-slider-item">
                    <div className='portfolio-item' >
                        <h3>2</h3>
                    </div>
                </div>
                <div className="p-slider-item">
                    <div className='portfolio-item' >
                        <h3>3</h3>
                    </div>
                </div>
                <div className="p-slider-item">
                    <div className='portfolio-item' >
                        <h3>4</h3>
                    </div>
                </div>
                <div className="p-slider-item">
                    <div className='portfolio-item' >
                        <h3>5</h3>
                    </div>
                </div>
                <div className="p-slider-item">
                    <div className='portfolio-item' >
                        <h3>6</h3>
                    </div>
                </div>

            </Slider>
        </section>
    )
}