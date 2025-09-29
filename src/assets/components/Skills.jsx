import { useState, useEffect } from "react"
import '../scss/Skills.scss'

export default function Skills() {
    const [nowDate, setNowDate] = useState(new Date().toLocaleDateString('uk-UA', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }))
    const [experienceFetch, setExperienceFetch] = useState([])
    useEffect(() => {
        fetch('data/Experience.json')
            .then(res => res.json())
            .then(data => setExperienceFetch(data));
    }, []);
    const [educationFetch, setEducationFetch] = useState([])
    useEffect(() => {
        fetch('data/Education.json')
            .then(res => res.json())
            .then(data => setEducationFetch(data));
    }, []);
    return (
        <section id="skills">
            <h2>Skills (Навички)</h2>
            <div className="skills-block">
                <div className="skills-img">
                    <img src="images/skills-img.jpg" alt="my-photo" />
                </div>
                <div className="skills-content">
                    <div className="experience">
                        <h4 className="skills-main-title">Experience (Досвід)</h4>
                        <ul className="experience-list">
                            {experienceFetch.map((experienceItem, index) => (
                                <li key={index}>
                                    <div className="experience-img">
                                        <img src={experienceItem.img} alt="logo" />
                                    </div>
                                    <div className="experience-content">
                                        <div className="experience-title">{experienceItem.title}</div>
                                        <div className="experience-company">{experienceItem.company}</div>
                                        <div className="experience-date">
                                            {experienceItem.from} - {experienceItem.to === 'nowDate' ? nowDate : experienceItem.to}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="education">
                        <h4 className="skills-main-title">Education (Освіта)</h4>
                        <ul className="education-list">
                            {educationFetch.map((educationItem, index) => (
                                <li key={index}>
                                    <div className="education-img"><img src={educationItem.img} alt={educationItem.alt} /></div>
                                    <div className="education-content">
                                        <div className="education-title">{educationItem.title}</div>
                                        <div className="education-company">{educationItem.company}</div>
                                        <div className="education-date">{educationItem.date}</div>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="tools">
                        <ul className="tools-list">
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}