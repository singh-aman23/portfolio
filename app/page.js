import classes from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const title = "cout << PORTFOLIO";
  return (
    <>
      <h1 className={classes.heading}>{title}</h1>
      <div className={classes.container}>
        <ul>
          <Link href = '/about'>
            <li>About Me</li>
          </Link>

          <Link href = '/skills'>
            <li>Skills</li>
          </Link>

          <Link href = '/projects'>
            <li>Projects</li>
          </Link>

          <Link href = '/resume'>
            <li>Resume</li>
          </Link>

          <Link href = '/contact'>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
