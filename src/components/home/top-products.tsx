import {Product} from "../items/product";

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
                    <Product index={index} item={item}/>
                ))}
            </div>
        </section>
    )
}