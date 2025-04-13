export const Categories = () => {
    return (
        <section
            className="flex flex-row gap-4 items-center justify-around pt-3 mx-1 text-center bg-white border border-top-0 overflow-auto">
            {[
                {src: "./img/item/8.jpg", title: "Breakfast & Dairy", items: "857 Items"},
                {src: "./img/item/3.jpg", title: "Beverages", items: "65 Items"},
                {src: "./img/item/4.jpg", title: "Home & Kitchen", items: "965 Items"},
                {src: "./img/item/9.jpg", title: "Biscuits, Snacks & Chocolates", items: "48 Items"},
                {src: "./img/item/11.jpg", title: "Pet Care", items: "568 Items"}
            ].map((category, index) => (
                <div className="flex flex-col items-center" key={index}>
                    <div className="w-[64px] aspect-square">
                        <img
                            src={category.src}
                            alt="Item"
                            className="border w-full aspect-square rounded-circle mb-2"
                            height="80"
                            width="80"
                        />
                    </div>
                    <h6 className="h6 fw-bold small">{category.title}</h6>
                    <p className="text-muted small">{category.items}</p>
                </div>
            ))}
        </section>
    )
}