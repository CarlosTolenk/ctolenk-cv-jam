import React, {PropsWithChildren} from "react";
import MainLayout from "../src/components/templetes/MainLayout";
import Banner from "../src/components/organisms/banner/Banner";

interface IPropsHome {
    title: string;
    description: string
}


export default function Home({title, description}: IPropsHome) {
    return (
        <MainLayout title={title} description={description}>
            <Banner/>
        </MainLayout>
    )
}

export const getStaticProps = () => {
    return {
        props: {
            title: 'CTolenk',
            description: 'Que tenemos'
        }
    }
}
