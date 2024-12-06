import Link from "next/link";
import { Fragment } from "react";

function AboutUs(){
    const details = [

        { id : 1, name: 'Yash', role: 'Senior Developer'},
        
        { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
        
        { id : 3, name: 'Suresh', role: 'Frontend Developer'}
        
        ]
    return <Fragment>
        <h1>Developers</h1>
        <ul>
        {details.map((detail)=>(
            <li><Link href={'/aboutus/'+detail.id}>{detail.name} </Link>  </li>
        ))}
        </ul>
        </Fragment>
}

export default AboutUs;