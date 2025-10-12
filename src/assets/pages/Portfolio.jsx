import "../scss/Portfolio.scss";
import { Suspense, lazy } from 'react';
export default function Portfolio() {
    const PortfolioBlock = lazy(() => import('../components/PortfolioBlock'));
    return (
        <>
            <Suspense fallback={<div>Завантаження...</div>}>
                <PortfolioBlock />
            </Suspense>
        </>
    )
}