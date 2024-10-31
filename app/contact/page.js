import classes from "./page.module.css";
import Link from "next/link";

export default function Contact() {
  const title = "cout << CONTACT";
  return (
    <>
      <h1 className={classes.heading}>{title}</h1>
      <div className={classes.container}>
        <ul>
          <li>email : singh2004aman@gmail.com</li>
          <li>
            <Link href = 'https://linkedin.com/in/singh-aman23'  target="_blank" rel="noopener noreferrer">LinkedIn</Link>
          </li>
          <li>
            <Link href = 'https://github.com/singh-aman23'  target="_blank" rel="noopener noreferrer">GitHub</Link>
          </li>
          <li>
            <Link href = 'https://leetcode.com/u/singh-aman23/'  target="_blank" rel="noopener noreferrer">Leetcode</Link>
          </li>
          <li>
            <Link href = 'https://www.instagram.com/singh_aman23?igsh=MXF0cDRzN3lzbzdtcw=='  target="_blank" rel="noopener noreferrer">Instagram</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
