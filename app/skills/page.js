import classes from "./page.module.css";

export default function Resume() {
  const title = "cout << SKILLS";
  return (
    <>
      <h1 className={classes.heading}>{title}</h1>
      <div className={classes.container}>
        <ul>
          <li>
            Languages
            <ul>
              <li>Experienced : Java</li>
              <li>Intermediate : C,C++</li>
              <li>Novices : Python</li>
            </ul>
          </li>
          <li>
            Technologies
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>MongoDB</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
