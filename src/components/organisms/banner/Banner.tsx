import React from 'react';
import styles from './banner.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'

// Components
import BgDynamic from "../../molecules/bg-dynamic/BgDynamic";
import TypingMessage from "../../molecules/typing-message/TypingMessage"
import Image from "next/image";

const Banner = () => {

    const title = 'I am Carlos Tolentino'
    const subtitle = 'Programming is a fundamental part of the integral development of society and I am part of the revolution.'
    const messages = ['Front-end Developer', 'Back-end Developer', 'Mobile Developer', 'Fullstack Developer']

    return (
        <>
            <div className={styles.containerBanner}>
                <div className={styles.containerInformation}>
                    <Image src="/ctolenk-logo-gray.png"
                           alt="ctolenk-logo-gray"
                           width={700}
                           height={200}
                    />
                    <h1 className={styles.title}>{title}</h1>
                    <TypingMessage className={styles.typing} message={messages}/>
                    <h4 className={styles.subtitle}>{subtitle}</h4>
                    <a className={styles.anchorBottom} href="">
                        <FontAwesomeIcon size="xs" className={styles.icon} icon={faArrowDown}/>
                    </a>
                </div>
                <div className={styles.containerPartial}>
                    <BgDynamic/>
                </div>
            </div>
        </>
    )
}

// @ts-ignore
export default Banner;
