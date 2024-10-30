import classes from "./page.module.css";

export default function AboutPage() {
  const title = "cout << ABOUT ME";
  return (
    <>
      <h1 className={classes.heading}>{title}</h1>
      <div className = {classes.container}>
      <img src = "./me.jpg" />
      <ul>
        <li>Name : Amandeep Singh</li>
        <li>DOB : 07/07/2004</li>
        <li>Education: B.Eng in Computer Science, Chandigarh University (2027)</li>
        <li>Class XII : 96.6%</li>
        <li>Ex-National Defence Acadmey Army cadet</li>
      </ul>

      </div>
    </>
  );
}
