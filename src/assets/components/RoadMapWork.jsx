import '../scss/RoadMapWork.scss'
import { useState, useEffect } from 'react';

export default function RoadMapWork() {
    const [roadMap, setRoadMap] = useState([])
    useEffect(() => {
        fetch('data/RoadMap.json')
            .then(res => res.json())
            .then(data => setRoadMap(data));
    }, []);
    return (
        <section id="roadMap">
            <h2>Project Workflow (Етапи роботи над проектом)</h2>
            <div className="roadmap">
                {roadMap.map((roadMapItem, index) => (
                    <div key={index} className="point">
                        <div className="point-index">{index + 1}</div>
                        <div className="point-label">{roadMapItem.title}</div>
                        <div className="point-text">{roadMapItem.text}</div>
                        {roadMapItem.cost ? <div className="point-cost">{roadMapItem.cost}</div> : ""}
                    </div>
                ))}
            </div>

        </section>
    )
}