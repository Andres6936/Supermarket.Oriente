export default async function HomePage() {
    const data = await getData();

    return (
        <div>
            <title>{data.title}</title>
            <section id="spo-carousel-slide"
                     className="carousel slide carousel-dark carousel-fade border border-top-0 mx-1"
                     data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#spo-carousel-slide" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#spo-carousel-slide" data-bs-slide-to="1"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./img/slides/slider1.jpg" alt="Slider" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/slides/slider2.jpg" alt="Slider" className="d-block w-100"/>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#spo-carousel-slide" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#spo-carousel-slide" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </section>

            <section className="row row-cols-2 row-cols-sm-5 pt-3 mx-1 text-center bg-white border border-top-0">
                <div className="col">
                    <img src="./img/item/8.jpg" alt="Item" className="img-thumbnail rounded-circle mb-2" height="80"
                         width="80"/>
                    <h6 className="h6 fw-bold small">Breakfast & Dairy</h6>
                    <p className="text-muted small">857 Items</p>
                </div>
                <div className="col">
                    <img src="./img/item/3.jpg" alt="Item" className="img-thumbnail rounded-circle mb-2" height="80"
                         width="80"/>
                    <h6 className="h6 fw-bold small">Beverages</h6>
                    <p className="text-muted small">65 Items</p>
                </div>
                <div className="col">
                    <img src="./img/item/4.jpg" alt="Item" className="img-thumbnail rounded-circle mb-2" height="80"
                         width="80"/>
                    <h6 className="h6 fw-bold small">Home & Kitchen</h6>
                    <p className="text-muted small">965 Items</p>
                </div>
                <div className="col">
                    <img src="./img/item/9.jpg" alt="Item" className="img-thumbnail rounded-circle mb-2" height="80"
                         width="80"/>
                    <h6 className="h6 fw-bold small">Biscuits, Snacks & Chocolates</h6>
                    <p className="text-muted small">48 Items</p>
                </div>
                <div className="col">
                    <img src="./img/item/11.jpg" alt="Item" className="img-thumbnail rounded-circle mb-2" height="80"
                         width="80"/>
                    <h6 className="h6 fw-bold small">Pet Care</h6>
                    <p className="text-muted small">568 Items</p>
                </div>
            </section>

            <section className="mt-5 px-sm-4">
                <div className="row row-cols-2 mb-2">
                    <h5 className="col-8 col-sm-6 h5 text-nowrap" style="font-size: 1em">Top Savers Today
                        <span className="bg-primary text-white m-1 p-1 rounded" style="font-size: 0.7em">20% OFF</span>
                    </h5>
                    <a href="#" className="col-4 col-sm-6 text-end text-decoration-none" style="color: #fd7e14">View
                        All</a>
                </div>

                <div className="row row-cols-1 px-4 px-sm-0 row-cols-sm-4 bg-white">
                    <div className="col border">
                        <div className="row my-2">
                            <div className="col">
                                <span className="small border text-success border-success px-1"
                                      style="background-color: #f2fef2">50% OFF</span>
                            </div>

                            <div className="col text-end">
                                <!-- Hexadecimal Value of Character: &#x25CF;
                                     Decimal Value of Character: &#9679; -->
                                <span className="small border text-success border-success px-1 my-auto"
                                      style="background-color: #f2fef2">●</span>
                            </div>
                        </div>
                        <img src="./img/item/1(1).jpg" className="img-fluid" alt="Item Image"/>
                        <h6 className="h6">Product Title Here</h6>
                        <p className="text-muted small">Available in <span>- 500 gm</span></p>
                        <div className="row gx-2 mb-2">
                            <p className="col-5 small my-auto">
                                $450.99<br/>$800.99
                            </p>
                            <button className="col-7 btn text-white btn-sm my-auto"
                                    style="background-color: #fd7e14">Add To Cart
                            </button>
                        </div>
                    </div>

                    <div className="col border">
                        <div className="row my-2">
                            <div className="col">
                                <span className="small border text-success border-success px-1"
                                      style="background-color: #f2fef2">50% OFF</span>
                            </div>

                            <div className="col text-end">
                                <!-- Hexadecimal Value of Character: &#x25CF;
                                     Decimal Value of Character: &#9679; -->
                                <span className="small border text-danger border-danger px-1 my-auto"
                                      style="background-color: #FFEFF2">●</span>
                            </div>
                        </div>
                        <img src="./img/item/2(1).jpg" className="img-fluid" alt="Item Image"/>
                        <h6 className="h6">Product Title Here</h6>
                        <p className="text-muted small">Available in <span>- 500 gm</span></p>
                        <div className="row gx-2 mb-2">
                            <p className="col-5 small my-auto">
                                $450.99<br/>$800.99
                            </p>
                            <button className="col-7 btn text-white btn-sm my-auto"
                                    style="background-color: #fd7e14">Add To Cart
                            </button>
                        </div>
                    </div>

                    <div className="col border">
                        <div className="row my-2">
                            <div className="col">
                                <span className="small border text-success border-success px-1"
                                      style="background-color: #f2fef2">50% OFF</span>
                            </div>

                            <div className="col text-end">
                                <!-- Hexadecimal Value of Character: &#x25CF;
                                     Decimal Value of Character: &#9679; -->
                                <span className="small border text-success border-success px-1 my-auto"
                                      style="background-color: #f2fef2">●</span>
                            </div>
                        </div>
                        <img src="./img/item/3(1).jpg" className="img-fluid" alt="Item Image"/>
                        <h6 className="h6">Product Title Here</h6>
                        <p className="text-muted small">Available in <span>- 500 gm</span></p>
                        <div className="row gx-2 mb-2">
                            <p className="col-5 small my-auto">
                                $450.99<br/>$800.99
                            </p>
                            <button className="col-7 btn text-white btn-sm my-auto"
                                    style="background-color: #fd7e14">Add To Cart
                            </button>
                        </div>
                    </div>

                    <div className="col border">
                        <div className="row my-2">
                            <div className="col">
                                <span className="small border text-success border-success px-1"
                                      style="background-color: #f2fef2">50% OFF</span>
                            </div>

                            <div className="col text-end">
                                <!-- Hexadecimal Value of Character: &#x25CF;
                                     Decimal Value of Character: &#9679; -->
                                <span className="small border text-danger border-danger px-1 my-auto"
                                      style="background-color: #FFEFF2">●</span>
                            </div>
                        </div>
                        <img src="./img/item/4(1).jpg" className="img-fluid" alt="Item Image"/>
                        <h6 className="h6">Product Title Here</h6>
                        <p className="text-muted small">Available in <span>- 500 gm</span></p>
                        <div className="row gx-2 mb-2">
                            <p className="col-5 small my-auto">
                                $450.99<br/>$800.99
                            </p>
                            <button className="col-7 btn text-white btn-sm my-auto"
                                    style="background-color: #fd7e14">Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row px-4 my-5">
                <img className="col-12 col-sm-6 img-fluid mx-0 px-0" alt="Off Products" src="./img/slides/1(2).jpg"/>
                <img className="col-12 col-sm-6 img-fluid mx-0 px-0" alt="Off Products" src="./img/slides/2(2).jpg"/>
            </section>

            <section className="my-5 px-sm-4">
                <div className="row row-cols-2 mb-2">
                    <h5 className="col-8 col-sm-6 h5 text-nowrap" style="font-size: 1em">Best Offers View
                        <span className="bg-info text-white m-1 p-1 rounded" style="font-size: 0.7em">20% OFF</span>
                    </h5>
                    <a href="#" className="col-4 col-sm-6 text-end text-decoration-none" style="color: #fd7e14">View
                        All</a>
                </div>

                <div className="row row-cols-1 px-4 px-sm-0 row-cols-sm-4 bg-white">
                    <div className="col border">
                        <div className="row my-2">
                            <div className="col">
                                <span className="small border text-success border-success px-1"
                                      style="background-color: #f2fef2">50% OFF</span>
                            </div>

                            <div className="col text-end">
                                <!-- Hexadecimal Value of Character: &#x25CF;
                                     Decimal Value of Character: &#9679; -->
                                <span className="small border text-success border-success px-1 my-auto"
                                      style="background-color: #f2fef2">●</span>
                            </div>
                        </div>
                        <img src="./img/item/7(1).jpg" className="img-fluid" alt="Item Image"/>
                        <h6 className="h6">Product Title Here</h6>
                        <p className="text-muted small">Available in <span>- 500 gm</span></p>
                        <div className="row gx-2 mb-2">
                            <p className="col-5 small my-auto">
                                $450.99<br/>$800.99
                            </p>
                            <button className="col-7 btn text-white btn-sm my-auto"
                                    style="background-color: #fd7e14">Add To Cart
                            </button>
                        </div>
                    </div>

                    <div className="col border">
                        <div className="row my-2">
                            <div className="col">
                                <span className="small border text-success border-success px-1"
                                      style="background-color: #f2fef2">50% OFF</span>
                            </div>

                            <div className="col text-end">
                                <!-- Hexadecimal Value of Character: &#x25CF;
                                     Decimal Value of Character: &#9679; -->
                                <span className="small border text-danger border-danger px-1 my-auto"
                                      style="background-color: #FFEFF2">●</span>
                            </div>
                        </div>
                        <img src="./img/item/9(1).jpg" className="img-fluid" alt="Item Image"/>
                        <h6 className="h6">Product Title Here</h6>
                        <p className="text-muted small">Available in <span>- 500 gm</span></p>
                        <div className="row gx-2 mb-2">
                            <p className="col-5 small my-auto">
                                $450.99<br/>$800.99
                            </p>
                            <button className="col-7 btn text-white btn-sm my-auto"
                                    style="background-color: #fd7e14">Add To Cart
                            </button>
                        </div>
                    </div>

                    <div className="col border">
                        <div className="row my-2">
                            <div className="col">
                                <span className="small border text-success border-success px-1"
                                      style="background-color: #f2fef2">50% OFF</span>
                            </div>

                            <div className="col text-end">
                                <!-- Hexadecimal Value of Character: &#x25CF;
                                     Decimal Value of Character: &#9679; -->
                                <span className="small border text-success border-success px-1 my-auto"
                                      style="background-color: #f2fef2">●</span>
                            </div>
                        </div>
                        <img src="./img/item/10(1).jpg" className="img-fluid" alt="Item Image"/>
                        <h6 className="h6">Product Title Here</h6>
                        <p className="text-muted small">Available in <span>- 500 gm</span></p>
                        <div className="row gx-2 mb-2">
                            <p className="col-5 small my-auto">
                                $450.99<br/>$800.99
                            </p>
                            <button className="col-7 btn text-white btn-sm my-auto"
                                    style="background-color: #fd7e14">Add To Cart
                            </button>
                        </div>
                    </div>

                    <div className="col border">
                        <div className="row my-2">
                            <div className="col">
                                <span className="small border text-success border-success px-1"
                                      style="background-color: #f2fef2">50% OFF</span>
                            </div>

                            <div className="col text-end">
                                <!-- Hexadecimal Value of Character: &#x25CF;
                                     Decimal Value of Character: &#9679; -->
                                <span className="small border text-danger border-danger px-1 my-auto"
                                      style="background-color: #FFEFF2">●</span>
                            </div>
                        </div>
                        <img src="./img/item/11(1).jpg" className="img-fluid" alt="Item Image"/>
                        <h6 className="h6">Product Title Here</h6>
                        <p className="text-muted small">Available in <span>- 500 gm</span></p>
                        <div className="row gx-2 mb-2">
                            <p className="col-5 small my-auto">
                                $450.99<br/>$800.99
                            </p>
                            <button className="col-7 btn text-white btn-sm my-auto"
                                    style="background-color: #fd7e14">Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const getData = async () => {
    const data = {
        title: 'Waku',
    };

    return data;
};

export const getConfig = async () => {
    return {
        render: 'static',
    } as const;
};