import '../scss/FormMain.scss'
import { useState } from 'react';

export default function FormMain() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [idea, setIdea] = useState("");
    const [phone, setPhone] = useState("");

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

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Ім’я, яке ви ввели, було: ${name}, ${email}, ${idea}, ${phone}`);
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
                        <div class="btn-holder">
                            <button class="btn btn-4 hover-border-7">
                                <span>Відправити</span>
                            </button>
                        </div>

                    </fieldset>




                </form>
            </div>
        </section>
    );
}