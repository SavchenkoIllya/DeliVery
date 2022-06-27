import styles from "./Carousel.module.scss";

export default function MyCarousel() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.carouselCard}>
        <img
          alt=""
          src={
            "https://firebasestorage.googleapis.com/v0/b/delivery-app-95f21.appspot.com/o/1.jpg?alt=media&token=a853c05a-7bb4-44a7-8870-5ea7ed84b6b2"
          }
        />
      </div>
    </div>
  );
}
