import Image from "next/image";
import backgroundImage from "assets/background-image.jpg";
import styles from "styles/components/home/Header.module.css";

const Header = () => {
  return (
    <header className="py-40 relative h-screen bg-dark grid place-content-center">
      <div className={styles.bgWrap}>
        <Image
        className="absolute top-0 left-0 w-full h-full opacity-30 grayscale"
          src={backgroundImage}
          alt="travel"
          layout="fill"
        />
        <h2 className={styles.text}>
          <span className={`${styles.span} ${styles.first}`}>Creativity</span>
          <span className={`${styles.span} ${styles.second}`}>Innovation</span>
          <span className={`${styles.span} ${styles.third}`}>Solutions.</span>
        </h2>
      </div>
    </header>
  );
};

export default Header;
