import { Link } from 'react-router-dom';
import '../scss/LinkCost.scss'
export default function LinkCost() {
    return (
        <div id="link-cost">
            <h3>Не відкладайте ідею на потім — дізнайся вартість створення сайту прямо зараз</h3>
            <Link className="link-cost-btn" to="/price">Дізнатись ціну</Link>
        </div>
    );
}