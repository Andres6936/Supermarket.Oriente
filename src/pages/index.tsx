import {Carousel} from "../components/home/carousel";
import {Categories} from "../components/home/categories";
import {TopProducts} from "../components/home/top-products";
import {Banners} from "../components/home/banners";
import {BestOffers} from "../components/home/best-offers";

export default async function HomePage() {
    const data = await getData();

    return (
        <div>
            <title>{data.title}</title>
            <Carousel/>
            <Categories/>
            <TopProducts/>
            <Banners/>
            <BestOffers/>
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