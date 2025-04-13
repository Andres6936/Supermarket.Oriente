export const TopProducts = () => {
    return (
        <section className="mt-5 px-sm-4">
            <div className="row row-cols-2 mb-2">
                <h5
                    className="col-8 col-sm-6 h5 text-nowrap"
                    style={{fontSize: "1em"}}
                >
                    Top Savers Today
                    <span
                        className="bg-primary text-white m-1 p-1 rounded"
                        style={{fontSize: "0.7em"}}
                    >
                            20% OFF
                        </span>
                </h5>
                <a
                    href="#"
                    className="col-4 col-sm-6 text-end text-decoration-none"
                    style={{color: "#fd7e14"}}
                >
                    View All
                </a>
            </div>

            <div className="row row-cols-1 px-4 px-sm-0 row-cols-sm-4 bg-white">
                {[1, 2, 3, 4].map((item, index) => (
                    <div className="col border" key={index}>
                        <div className="flex flex-row items-center justify-between mt-2">
                            <div
                                className="small border text-success border-success px-1"
                                style={{backgroundColor: "#f2fef2"}}
                            >
                                50% OFF
                            </div>

                            <div
                                className={`small border aspect-square ${
                                    index % 2 === 0
                                        ? "text-success border-success"
                                        : "text-danger border-danger"
                                } px-1 my-auto`}
                                style={{
                                    backgroundColor:
                                        index % 2 === 0
                                            ? "#f2fef2"
                                            : "#FFEFF2"
                                }}
                            >
                                ●
                            </div>
                        </div>
                        <img
                            src={`./img/item/${item}(1).jpg`}
                            className="img-fluid"
                            alt="Item Image"
                        />
                        <h6 className="h6">Product Title Here</h6>
                        <p className="text-muted small">
                            Available in <span>- 500 gm</span>
                        </p>
                        <div className="row gx-2 mb-2">
                            <p className="col-5 small my-auto">
                                $450.99<br/>$800.99
                            </p>
                            <button
                                className="col-7 btn text-white btn-sm my-auto"
                                style={{backgroundColor: "#fd7e14"}}
                            >
                                Add To Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}