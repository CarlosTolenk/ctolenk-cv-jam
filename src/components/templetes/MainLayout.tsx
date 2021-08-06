import React, {PropsWithChildren} from "react";
import Head from "next/head";
import Footer from "../molecules/footer/Footer";
import styles from "../../../styles/MainLayout.module.css"

interface IPropsMainLayout {
    title: string;
    children: PropsWithChildren<any>;
    description: string
}

const MainLayout = ({title, description = 'sdsds', children}: IPropsMainLayout) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.containerMainLayout}>
                {children}
            </main>

            <Footer/>
        </>
    )

}


export default MainLayout;
