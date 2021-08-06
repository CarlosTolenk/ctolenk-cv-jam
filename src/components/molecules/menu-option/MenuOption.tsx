import React from "react";
import styles from "./MenuOption.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MenuOption = ({text, icon}: any) => {
    return (
        <a className={styles.containerOption}>
            <FontAwesomeIcon size="xs" className={styles.icon} icon={icon}/>
            {text}
        </a>
    )
}

export default MenuOption;
