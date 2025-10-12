import '../scss/Price.scss';
import { useEffect, useState } from 'react';
export default function Price() {
    const [priceFetch, setPriceFetch] = useState([])
    useEffect(() => {
        fetch('data/Price.json')
            .then(res => res.json())
            .then(data => setPriceFetch(data));
    }, []);

    return (
        <section id="price">
            <div className="container">
                <h2>Типи і вартість</h2>
                <p className='price-subtitle'>Перш ніж почати створювати сайт, просто запитайте себе: “Для чого він мені потрібен?” А далі подумайте, як саме ви хочете досягти цієї мети. Давайте разом розглянемо різні цілі та підберемо тип сайту, який найкраще підійде саме вам!</p>
                <div className="price-items">
                    {priceFetch.map((priceItem, index) => (
                        <div key={index} className="price-item">
                            <h3 className='price-item-title'>{priceItem.title}</h3>
                            <div className="price-img">
                                <img src={priceItem.image} alt="price logo" loading="lazy" />
                            </div>
                            <p className='price-item-descr'>{priceItem.description}</p>
                            <div className="price-scope-items">
                                <div className='price-item-scope' >З мінімальними витратами ви отримуєте:
                                    <ul>
                                        {priceItem.included.map((includedItem, includedIndex) => (
                                            <li className='price-scope-item' key={includedIndex}>
                                                ► {includedItem}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='price-item-scope' >Додатково можна дозамовити:
                                    <ul>
                                        {priceItem.extra.map((extraItem, extraIndex) => (
                                            <li className='price-scope-item' key={extraIndex}>
                                                ► {extraItem}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <p className='price-total'>Вартість: <span>{priceItem.price}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}