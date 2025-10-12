import '../scss/FormMain.scss'
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function FormMain() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [idea, setIdea] = useState("");
    const [phone, setPhone] = useState("");
    const [activePosts, setActivePosts] = useState(false);

    useEffect(() => {
        // Початкова активація
        setActivePosts(true);
        const initialTimeout = setTimeout(() => {
            setActivePosts(false);
        }, 1500);

        // Циклічна активація
        const interval = setInterval(() => {
            setActivePosts(true);
            setTimeout(() => {
                setActivePosts(false);
            }, 1500);
        }, 2000);

        // Очистка таймерів при розмонтуванні
        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);


    const [activeField, setActiveField] = useState({
        name: false,
        email: false,
        idea: false,
        phone: false
    });

    const handleFocus = (field) => {
        setActiveField((prev) => ({ ...prev, [field]: true }));
    };

    const handleBlur = (field, value) => {
        if (!value) {
            setActiveField((prev) => ({ ...prev, [field]: false }));
        }
    };

    const [formInProgress, setFormInProgress] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (formInProgress) return;

        setFormInProgress(true);

        const token = '8407817457:AAHqGaeQLBrPJNM6VGC72CV16vfaZBF26yY';
        const chat = '-1003054409449';
        const message = `<b>Name: </b>%0a<i>${name}</i>%0a<b>Email: </b>%0a<i>${email}</i>%0a<b>Phone: </b>%0a<i>${phone}</i>%0a<b>Idea: </b>%0a<i>${idea}</i>`;

        try {
            const resp = await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat}&parse_mode=html&text=${message}`);
            const answer = await resp.json();
            if (answer.ok) {
                toast.success('Ви успішно відправили повідомлення!');
                setName('');
                setEmail('');
                setPhone('');
                setIdea('');
            } else {
                toast.error('Сталася помилка при відправці!');
            }
        } catch (error) {
            toast.error('Сталася помилка при відправці!');
        }
        setFormInProgress(false);
    };


    return (
        <section id="form">
            <div className="container">
                <h2>Форма зворотнього зв'язку</h2>
                <form id="formMain" className='contact-form-items' onSubmit={handleSubmit}>
                    <fieldset>
                        <div className="wrap">
                            <div className='formMain-item'>
                                <label htmlFor="fullname" className={activeField.name ? "active" : ""}>Ім'я*</label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onFocus={() => handleFocus("name")}
                                    onBlur={() => handleBlur("name", name)}
                                    id="fullname"
                                    type="text"
                                    className="cool"
                                    required
                                />
                            </div>

                            <div className='formMain-item'>
                                <label htmlFor="phone" className={activeField.phone ? "active" : ""}>Номер телефону*</label>
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    onFocus={() => handleFocus("phone")}
                                    onBlur={() => handleBlur("phone", phone)}
                                    id="phone"
                                    type="text"
                                    className="cool"
                                    required
                                />
                            </div>

                            <div className='formMain-item'>
                                <label htmlFor="email" className={activeField.email ? "active" : ""}>Email</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onFocus={() => handleFocus("email")}
                                    onBlur={() => handleBlur("email", email)}
                                    id="email"
                                    type="email"
                                    className="cool"
                                />
                            </div>

                            <div className='formMain-item'>
                                <label htmlFor="idea" className={activeField.idea ? "active" : ""}>Опишіть коротко ідею</label>
                                <textarea
                                    value={idea}
                                    onChange={(e) => setIdea(e.target.value)}
                                    onFocus={() => handleFocus("idea")}
                                    onBlur={() => handleBlur("idea", idea)}
                                    id="idea"
                                    className="cool"
                                />
                            </div>
                        </div>
                        {/* <div className="form-btn">
                            <button type="submit">Відправити</button>
                        </div> */}
                        <div className="btn-holder">
                            <button className="btn btn-4 hover-border-7">
                                <span>Відправити</span>
                            </button>
                        </div>

                    </fieldset>

                </form>
                <div className="phone">
                    <div className="phone-shade"></div>

                    <div className="phone-speaker"></div>

                    <div className="phone-screen">

                        <div className="phone-header">
                            <div className="phone-menu"></div>
                        </div>

                        <div className={`phone-post ${activePosts ? 'active' : ''}`}>
                            <div className="post-thumb"></div>
                            <div className="line post-title-1"></div>
                            <div className="line post-title-2"></div>
                            <div className="line post-line-1"></div>
                            <div className="line post-line-2"></div>
                        </div>

                        <div className={`phone-post ${activePosts ? 'active' : ''}`}>
                            <div className="post-thumb"></div>
                            <div className="post-title-1"></div>
                            <div className="post-title-2"></div>
                            <div className="post-line-1"></div>
                            <div className="post-line-2"></div>
                        </div>

                        <div className={`phone-post ${activePosts ? 'active' : ''}`}>
                            <div className="post-thumb"></div>
                            <div className="post-title-1"></div>
                            <div className="post-title-2"></div>
                            <div className="post-line-1"></div>
                            <div className="post-line-2"></div>
                        </div>

                        <div className={`phone-post ${activePosts ? 'active' : ''}`}>
                            <div className="post-thumb"></div>
                            <div className="post-title-1"></div>
                            <div className="post-title-2"></div>
                            <div className="post-line-1"></div>
                            <div className="post-line-2"></div>
                        </div>

                        <div className={`phone-post ${activePosts ? 'active' : ''}`}>
                            <div className="post-thumb"></div>
                            <div className="post-title-1"></div>
                            <div className="post-title-2"></div>
                            <div className="post-line-1"></div>
                            <div className="post-line-2"></div>
                        </div>

                        <div className={`phone-post ${activePosts ? 'active' : ''}`}>
                            <div className="post-thumb"></div>
                            <div className="post-title-1"></div>
                            <div className="post-title-2"></div>
                            <div className="post-line-1"></div>
                            <div className="post-line-2"></div>
                        </div>

                    </div>

                    <div className="phone-button"></div>
                </div>
            </div>
        </section>
    );
}