import chefPic from "../../Assets/portrait-pensive-old-man-chef-dressed-uniform-posing-against-dark-background-min.jpg";
import grillPic from "../../Assets/grilling-hamburgers-720x482.jpeg";
import breadPic from "../../Assets/hamburger-buns.jpeg";
import saucePic from "../../Assets/Best-Burger-Sauce-4.jpeg";
import signature from "../../../src/Assets/Ingvar_Kamprad_Signature.svg";
//styles
import styles from "./About.module.scss";

export const About: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.headling}>
        What about <span>chief</span> ?
      </h3>
      <div className={styles.info}>
        <img src={chefPic} alt="chef" />
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            fugiat nulla, ratione quisquam blanditiis quos natus. Porro sapiente
            illum eum molestias perspiciatis esse vitae maiores adipisci
            ratione. Magnam tenetur molestias vel odio sit ad consectetur quo.
            Ipsam ipsum blanditiis numquam accusamus, a voluptates vero laborum,
            enim, in odit natus minima facilis error facere inventore delectus
            unde. Laborum maiores eaque doloremque vel laboriosam dolores
            deserunt corporis ex placeat sunt consequuntur, veritatis cum
            exercitationem mollitia minima. Exercitationem corrupti mollitia
            enim labore, repellendus blanditiis consequatur dolore libero
            facilis, amet vel! Iusto maxime ipsam, voluptates placeat officiis
            dolore! Eos sint sequi quasi itaque ullam.
          </p>
          <img className={styles.icon} src={signature} alt="signature" />
        </div>
      </div>
      <div className={styles.hl}></div>
      <h3 className={styles.headling}>
        <span>Our</span> style
      </h3>
      <div className={styles.advantages}>
        <div>
          <img src={grillPic} alt="BBQ" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            recusandae.
          </p>
        </div>
        <div>
          <img src={breadPic} alt="BBQ" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            recusandae.
          </p>
        </div>
        <div>
          <img src={saucePic} alt="BBQ" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            recusandae.
          </p>
        </div>
      </div>
      <div className={styles.hl}></div>
    </div>
  );
};
