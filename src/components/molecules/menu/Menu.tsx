import React, {Props} from "react";
import styles from './Menu.module.css';

// ThirdParties
import {faHome, faUniversity, faBriefcase, faBlog, faMailBulk} from "@fortawesome/free-solid-svg-icons";

// Components
import MenuOption from "../../atoms/menu-option/MenuOption";

const Menu = ({className}: any) => {

    const options = [
        {
            text: "Home",
            icon: faHome
        },
        {
            text: "Resume",
            icon: faUniversity
        },
        {
            text: "Portfolio",
            icon: faBriefcase
        },
        {
            text: "Blog",
            icon: faBlog
        },
        {
            text: "Contact",
            icon: faMailBulk
        }
    ]
    return (
        <div className={className}>
            <div className={styles.containerListMenu}>
                {
                    options.map(({icon, text}) =>
                        <MenuOption key={text} icon={icon} text={text}/>
                    )
                }
            </div>

        </div>
    )
}


// @ts-ignore
export default Menu;
