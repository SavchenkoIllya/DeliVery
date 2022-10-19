import Carousel from "nuka-carousel";
import styles from "./Carousel.module.scss";

export default function MyCarousel() {
  return (
    <div className={styles.wrapper}>
      <Carousel
        autoplay={true}
        wrapAround
        className={styles.carousel}
        defaultControlsConfig={{
          nextButtonText: "→",
          prevButtonText: "←",
          pagingDotsStyle: {
            fill: "#e55125",
          },
        }}
      >
        <img
          alt="1"
          src="https://firebasestorage.googleapis.com/v0/b/delivery-app-95f21.appspot.com/o/1-min.jpg?alt=media&token=3cd6ce8c-dd53-476e-9897-0ffe0b43461a"
        />
        <img
          alt="2"
          src="https://firebasestorage.googleapis.com/v0/b/delivery-app-95f21.appspot.com/o/2-min.jpg?alt=media&token=a13ffd24-e3c9-4a96-b3f3-1575155c9b1d"
        />
      </Carousel>
      <a href="/#menu">
        <button className={styles.toMenu}>To menu</button>
      </a>
    </div>
  );
}
