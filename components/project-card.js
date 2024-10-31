import styles from "./project-card.module.css";

export default function ProjectCard({name, description, technologies, link, keyFeatures}) {
  return (
    <>
      <div className={styles.card}>
        <h2 className={styles.heading}>{name}</h2>

        <div className={styles.section}>
          <h3 className={styles.subHeading}>Description</h3>
          <p className={styles.text}>
            {description}
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subHeading}>Technologies</h3>
          <p className={styles.text}>{technologies}</p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subHeading}>Key Features</h3>
          <ul>
          {keyFeatures.map((feature, index) => (
            <li key={index} className={styles.text}>{feature}</li>
          ))}
        </ul>
        </div>

        <div className={styles.section}>
          <a
            href= {link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.liveLink}
          >
            Live Project
          </a>
        </div>
      </div>
    </>
  );
}
