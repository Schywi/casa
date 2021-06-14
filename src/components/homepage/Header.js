import React , {useEffect}from "react"
import mainImage from './Group 2.png'

export default function Header() {
  useEffect(() => {    
    
    const fragment = document.getElementById("homeHeader")
    fragment.classList.add("homeHeaderActive")
    
 }, []);

  return (
   <div id="homeHeader" className="homeHeader">
       <img className="a"  src={mainImage}/>
       <div className="homeHeader_wrapContent">
           <h1 className="homeHeader_wrapContent-title"> Aimily</h1>
           <p className="homeHeader_wrapContent-content" >
           Goal setting, progress tracking, 
accountability,  and everything else you need to achieve your dreams  
           </p>
         
           <div className="homeHeader_wrapNewsletter">
                <span className="homeHeader">
                   Subscribe to our newsletter to hear first when we launch!
               </span>
               <div  className="homeHeader_wrapInput">
                        <input  className="homeHeader_wrapInput-input"/>
                        <button className="homeHeader" >Count me in!</button>
                    
               </div>
                </div>
       </div>
    
   </div>
  )
}
