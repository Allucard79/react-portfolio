import React from "react";

import styles from "./About.module.css";
import { getImageURL } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageURL("about/webDeveloper.png")}
          alt="webDeveloperIcon"
          className={styles.aboutImg}
        />
        <p className={styles.aboutDesc}>
          Skilled JavaScript Developer proficient in React.js and Angular,
          creating dynamic and responsive web applications. Experienced in
          designing and implementing complex web sites. Frontend Development
          Specialist crafting visually appealing, user-friendly interfaces. Has
          practical knowledge of GIT, TypeScript, Redux, Unit Testing.
          Collaborative team player, proven ability to work seamlessly within
          cross-function teams, contributing technical expertise and driving
          successful project outcomes. Quick learner, adapting swiftly to new
          technologies for cutting-edge practices. Passionate innovator creating
          innovative web solutions with impactful user experiences.
        </p>
      </div>
    </section>
  );
};
