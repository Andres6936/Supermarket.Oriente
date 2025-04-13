export const Carousel = () => {
    return (
        <section
            id="spo-carousel-slide"
            className="carousel slide carousel-dark carousel-fade border border-top-0 mx-1"
            data-bs-ride="carousel"
        >
            <ol className="carousel-indicators">
                <li
                    data-bs-target="#spo-carousel-slide"
                    data-bs-slide-to="0"
                    className="active"
                ></li>
                <li
                    data-bs-target="#spo-carousel-slide"
                    data-bs-slide-to="1"
                ></li>
            </ol>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="./img/slides/slider1.jpg"
                        alt="Slider"
                        className="d-block w-100"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="./img/slides/slider2.jpg"
                        alt="Slider"
                        className="d-block w-100"
                    />
                </div>
            </div>

            <a
                className="carousel-control-prev"
                href="#spo-carousel-slide"
                role="button"
                data-bs-slide="prev"
            >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a
                className="carousel-control-next"
                href="#spo-carousel-slide"
                role="button"
                data-bs-slide="next"
            >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                <span className="visually-hidden">Next</span>
            </a>
        </section>
    )
}