import React, {PropsWithChildren} from "react";
import Head from "next/head";
import styles from "../../../styles/MainLayout.module.css"

// Components
import Menu from "../molecules/menu/Menu";
import Footer from "../molecules/footer/Footer";

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

                <Menu className={styles.containerMenu}/>

                <div className={styles.containerContent}>
                    {children}
                </div>
            </main>

            <Footer/>
        </>
    )

}


export default MainLayout;
