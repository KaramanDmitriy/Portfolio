import '../scss/CustomArrow.scss'
export function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={`custom-arrow next-arrow`}
            onClick={onClick}
        >
            <img src="images/right-arrow.svg" alt="arrow" />
        </div >
    );
}

export function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={`custom-arrow prev-arrow`}
            onClick={onClick}
        >
            <img src="images/left-arrow.svg" alt="arrow" />
        </div>
    );
}
