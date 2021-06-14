import React from "react"
import mainImage from './Group 2.png'


const db = [
    {
      id: 1,
      fade: "fade-right",
      fadeDuration: "2000",
      image:"https://www.thebalancesmb.com/thmb/f3_NuKDRY2fe11yaHZ0Eh3ZebK4=/1333x1000/smart/filters:no_upscale()/smart-goal-examples-2951827_final-5b6887cc46e0fb0050aa0bc9.png", 
      title:"Why SMART goal",
      content: ` Your brain needs to know the direction you want to head. 
      The more **SPECIFIC** you are, the `
    }, 
    {
        id: 2,
        fade: "fade-up",
        fadeDuration: "2400",
      image:"https://mk0softwareplanjrdht.kinstacdn.com/wp-content/uploads/2019/02/trello-timeline-milestones.jpg", 
      title:"Milestones",
      content: ` 
      When you travel you probably don't want to get to the final destination and see all the sights in 1 hour. The same applies to your goals. We need to decide, which smaller goals or milestones we need to achieve in order to reach our goal on time. Aimily provides examples for the most common goals.  `
    }, 
    {
        id: 3,
        fade: "fade-left",
        fadeDuration: "2600",
      image:"https://www.vislumbrerh.com/wp-content/uploads/2018/06/Tipos-de-Inova%C3%A7%C3%A3o-600x300.jpg", 
      title:"Accountability",
      content: ` 
  But our meetings give you more than just an energy of like-minded people working on their goals, it makes each of us accountable. Come and share what you have accomplished so far and what next steps you are going to take. If you are not sure what to do next - our meetings is a great place to do some brainstorming
      
      `
    }
  ]

export default function How() {
   

  return (
      <div className="ContainerWrap howFix">
          <h2  > How it works</h2>
            <div className="how">
                    
                    {db.map(item => {
                    return(
                            <div className="how_wrapContent" data-aos={item.fade}   data-aos-duration={item.fadeDuration}>
                                    <div class={"image" + item.id}> </div>
                                    
                                <div className="how_wrapContent_container" >
                                            
                                        <h3 className="how_wrapContent_container-title" >{item.title}</h3>
                                            <p className="how_wrapContent_container-content"  >
                                                {item.content}
                                        </p>
                                    
                                    </div> 
                            
            
                                
                    </div>
                            )
                        
            
                    })}
                
                </div>
   
      </div>
   )
}
