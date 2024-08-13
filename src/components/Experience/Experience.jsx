import React from "react";

import { getImageURL } from "../../utils";
import skills from "../../data/skills.json";
import career from "../../data/career.json";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImg}>
                  <img src={getImageURL(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.career}>
          {career.map((item, id) => {
            return (
              <li key={id} className={styles.careerItem}>
                <img src={getImageURL(item.imageSrc)} alt={item.organisation} />
                <div className={styles.careerDetails}>
                  <h3>{`${item.role}, ${item.organisation}`}</h3>
                  <p>{`${item.startDate}, ${item.endDate}`}</p>
                  <ul>
                    {item.experiences.map((exp, id) => {
                      return <li key={id}>{exp}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
