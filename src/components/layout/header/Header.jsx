import React from "react";
import { SlSettings } from "react-icons/sl";
import styles from "./Header.module.scss";


function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Habify</h1>
      <button className={styles.settingsButton}>
        <SlSettings size={24} background={"black"}/>
      </button>
    </header>
  );
}

export default Header;