import ProjectCard from "@/components/project-card";
import classes from "./page.module.css";

export default function Contact() {
  const title = "cout << PROJECTS";
  return (
    <>
      <h1 className={classes.heading}>{title}</h1>
      <div className={classes.container}>
        <ProjectCard
          name="RentBudy"
          description="Designed and developed a full-stack web application that allows users to postroommate requirements and connect with potential matches"
          technologies="HTML, CSS, JavaScript, React.js, Next.js, MongoDB, Vercel"
          keyFeatures={[
            "User Registration and Authentication",
            "Dynamic Posting",
            "Database Integration",
          ]}
          link="https://rentbudy.vercel.app/"
        />

        <ProjectCard
          name="RECIPE ROVER"
          description="A platform where users can discover and share recipes from around the world. Whether you are a seasoned chef or home cook, you can showcase your culinary creations and explore dishes from otherfood lovers"
          technologies="HTML, CSS, JavaScript, React.js, Next.js, MongoDB, Vercel"
          keyFeatures={[
            "Recipe Sharing",
            "Dynamic Recipe Posting",
            "Database Integration",
          ]}
          link="https://recipe-rover-opal.vercel.app/"
        />
      </div>
    </>
  );
}
