import { useRouter } from "next/router"
import { Fragment, useState } from "react";


function Developer(){
  const router=useRouter()
  const [dev,setDev]=useState()
  const developerId=router.query.developerId;
  const details = [

    { id : 1, name: 'Yash', role: 'Senior Developer'},
    
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}
    
    ]

    const developer = details.find((detail) => detail.id === Number(developerId));

  return <Fragment>
      <h1>{developer?developer.name+" "+developer.role:"Developer doesn't exist"}</h1>
    </Fragment>
}

export default Developer