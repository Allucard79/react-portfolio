import React from "react";

import styles from "./Hero.module.css";
import { getImageURL } from "../../utils";

export const Hero = () => {
  const text = "WEB-DEVELOPER";
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.neon}>
          {text.split("").map((char, index) => (
            <span
              key={index}
              className={`${styles.letter} ${styles[`letter${index + 1}`]} ${
                char === " " ? styles.space : ""
              }`}
            >
              {char}
            </span>
          ))}
        </h1>
        <p className={styles.description}>
          I am a web developer with a passion for designing and building dynamic
          websites and web applications. There's nothing I enjoy more than
          sitting down with a cup of coffee and diving into code, solving
          complex problems, and bringing ideas to life in the browser. The
          creative process of turning concepts into functional, interactive
          experiences is what drives me.
        </p>
        <p className={styles.description}>
          Outside of coding, I have a deep love for sport climbing. Much like in
          development, scaling a wall requires quick problem-solving skills and
          strategic thinking—qualities that I bring to every project I work on.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageURL("hero/myImage.png")}
        alt="my picture"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
