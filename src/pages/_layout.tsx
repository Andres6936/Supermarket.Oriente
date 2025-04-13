import '../styles.css';

import type {ReactNode} from 'react';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({children}: RootLayoutProps) {
    const data = await getData();

    return (
        <div className="font-['Nunito']">
            <meta name="description" content={data.description}/>
            <link rel="icon" type="image/png" href={data.icon}/>
            <link rel="stylesheet" href="/css/bootstrap.css"/>
            <main className="container mx-auto">
                {children}
            </main>
            <script src="/js/bootstrap.bundle.js"/>
            <script>
                let carousel = bootstrap.Carousel(document.getElementById('spo-carousel-slide'));
            </script>
        </div>
    );
}

const getData = async () => {
    const data = {
        description: 'An internet website!',
        icon: '/favicons/32x32.png',
    };

    return data;
};

export const getConfig = async () => {
    return {
        render: 'static',
    } as const;
};