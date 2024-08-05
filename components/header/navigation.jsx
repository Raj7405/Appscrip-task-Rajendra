import styles from "@/styles/NavBar.module.css";
import useWindowDimensions from "../hooks/useWindowDimensions ";
import { useEffect, useState } from "react";

const NavigationBar = () => {
  const [menuActive, setMenuActive] = useState(false)
  const { width,height} = useWindowDimensions()

  useEffect(() => {
    console.log([width, height])
  },[width])
  
  const navLinks = ["SHOPS", "SKILLS", "STORIES", "ABOUT US", "CONTACT"];
  const navIcon = ["search", "heart", "cart", "profile"];
  const cx = (...className) => className.join(" ");
  
  const handleMenu = () => {
    setMenuActive(!menuActive)
  }
  return (
    <div className={styles.header}>
      <div className={styles.topBanner}>
        <div className={cx(styles.container, styles.topBannerContainer)}>
          <div className={cx(styles.topText, styles.display)}>
            <img
              src={"/icons/squrerIcon.svg"}
              alt="squreIcon"
              width={16}
              height={16}
            />
            <p>Lorem ipsum dolor.</p>
          </div>
          <div className={cx(styles.topText, styles.display)}>
            <img
              src={"/icons/squrerIcon.svg"}
              alt="squreIcon"
              width={16}
              height={16}
            />
            <p>Lorem ipsum dolor.</p>
          </div>
          <div className={cx(styles.topText)}>
            <img
              src={"/icons/squrerIcon.svg"}
              alt="squreIcon"
              width={16}
              height={16}
            />
            <p>Lorem ipsum dolor.</p>
          </div>
        </div>
      </div>
      <div className={cx(styles.flexCol, styles.container, styles.menuBar)}>
        <div className={cx(styles.midNavBar)}>
          <div className={styles.companyIcon}>
            <img
              src="/icons/menu.svg"
              alt="menu"
              width={20}
              height={20}
              className={styles.menu}
              onClick={handleMenu}
            />
            <img
              src="/companyIcon.svg"
              alt="LogoIcon"
              width={35.61}
              height={35.61}
            />
          </div>
          <h1 className={styles.logo}>LOGO</h1>
          <div className={styles.iconBar}>
            {navIcon.map((iconName, i, arr) => {
              return (
                <img
                  src={`/icons/${iconName}.svg`}
                  alt={iconName}
                  width={24}
                  height={24}
                  key={i}
                  className={
                    i > arr.length - 2 ? `${styles.display}` : undefined
                  }
                />
              );
            })}
            <span className={styles.display}>
              ENG{" "}
              <img
                src="/icons/downArrow.svg"
                alt="downArrow"
                width={16}
                height={16}
              />
            </span>
          </div>
        </div>
        <div className={width > 600 ? styles.navLink : styles.navLinkMenu}>
          {
          (width > 600 ? true : menuActive)&&
          navLinks.map((links, i) => {
            return (
              <a href="#" key={i}>
                {links}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
