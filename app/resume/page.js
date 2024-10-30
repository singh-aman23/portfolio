import classes from './page.module.css';

export default function Resume(){
    const title = "cout << RESUME"
    return <>
        <h1 className = {classes.heading}>{title}</h1>
        <div className = {classes.container}>
        <a href = "./resume.pdf" download>
            <p>Click to download my resume</p>
        </a>
        </div>
    </>
}