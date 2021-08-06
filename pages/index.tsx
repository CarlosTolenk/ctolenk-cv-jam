import React from "react";
import MainLayout from "../src/components/templetes/MainLayout";
import Banner from "../src/components/organisms/banner/Banner";


export default function Home() {
    return (
        <MainLayout title="CTolenk - Carlos Tolentino" description="Que tenemos">
            <Banner/>
        </MainLayout>
    )
}
