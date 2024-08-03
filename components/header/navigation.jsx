import styles from "@/styles/navBar.module.css";

const NavigationBar = () => {
  const navLinks = ["SHOPS", "SKILLS", "STORIES", "ABOUT US", "CONTACT"];
  const navIcon = ["search", "heart", "cart", "profile"];
  const cx = (...className) => className.join(" ");
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
      <div className={cx(styles.flexCol, styles.container)}>
        <div className={cx(styles.midNavBar)}>
          <div className={styles.companyIcon}>
            <img
              src="/icons/menu.svg"
              alt="menu"
              width={20}
              height={20}
              className={styles.menu}
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
        <div className={cx(styles.navLink)}>
          {navLinks.map((links, i) => {
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
