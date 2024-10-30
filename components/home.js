import Link from "next/link";
import classes from './home.module.css';

export default function HomeButton(){
    return <>
        <Link href = '/'>
          <img src = './home.png' className = {classes.home}/>  
        </Link>
    </>
}