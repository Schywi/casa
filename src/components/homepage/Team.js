import React from "react"
import mainImage from './blogPicture.png'
import IrinaImage from "./irina.png";
import BryeImage from "./Brye.png";
import CliffordImage from "./Clifford.png";
import IvaImage from "./Iva.png"; 
import LucasImage from "./Lucas.png"; 
import { FaFacebook  , FaPinterest , FaTwitter} from 'react-icons/fa';
import {  FiInstagram  } from 'react-icons/fi';
import {   AiFillLinkedin } from 'react-icons/ai';
const db = [
  {
    image: IrinaImage,
    name: "Irina",
    role: "Product Owner",
  }, 
  {
       image: BryeImage,
      name: "Brye",
      role: "Designer"
    }, 
  {
       image: CliffordImage,
     name: "Clifford",
     role: "React Native Developer"
  }, 
  {
       image: IvaImage,
      name: "Iva",
      role: "Chief Technology Officer "
  },
  {
       image: LucasImage,
      name: "Lucas", 
      role: "Front-end Developer"
  }
]

export default function Team() {
   

  return (
    <div className="ContainerWrap teamFix">
        <h2>Team</h2>
       <div className="TeamContainer">

     
       {db.map(item => {

           return(

                <div class="TeamContainer_teamCard"> 

                    <img src={item.image}/>
                    <span>{item.name}</span>
                    <span>{item.role}</span>

                </div> 
           )
       })}
   </div>
       <h2>Follow Us!</h2>
       <div className="socialMidia">
           <FaFacebook fontSize="80px"/>
           <FiInstagram fontSize="80px"/>
           <AiFillLinkedin fontSize="80px"/>
           <FaPinterest fontSize="80px"/>
           <FaTwitter fontSize="80px"/>
        
       </div>
</div>
   )
}
