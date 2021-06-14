import React from "react"
import mainImage from './blogPicture.png'

 
const db = [
  {
    id: 1,
    fade: "fade-right",
    fadeDuration: "1000",
    image:"https://www.thebalancesmb.com/thmb/f3_NuKDRY2fe11yaHZ0Eh3ZebK4=/1333x1000/smart/filters:no_upscale()/smart-goal-examples-2951827_final-5b6887cc46e0fb0050aa0bc9.png", 
    title:"Why SMART goal",
    content: ` Your brain needs to know the direction you want to head. 
    The more **SPECIFIC** you are, the `
  }, 
  {
      id: 2,
      fade: "fade-right",
      fadeDuration: "1500",
    image:"https://mk0softwareplanjrdht.kinstacdn.com/wp-content/uploads/2019/02/trello-timeline-milestones.jpg", 
    title:"Milestones",
    content: ` 
    When you travel you probably don't want to get to the final destination and see all the sights in 1 hour. The same applies to your goals. We need to decide, which smaller goals or milestones we need to achieve in order to reach our goal on time. Aimily provides examples for the most common goals.  `
  }, 
  {
      id: 3,
      fade: "fade-right",
      fadeDuration: "2000",
    image:"https://www.vislumbrerh.com/wp-content/uploads/2018/06/Tipos-de-Inova%C3%A7%C3%A3o-600x300.jpg", 
    title:"Accountability",
    content: ` 
But our meetings give you more than just an energy of like-minded people working on their goals, it makes each of us accountable. Come and share what you have accomplished so far and what next steps you are going to take. If you are not sure what to do next - our meetings is a great place to do some brainstorming
    
    `
  }
]

export default function Blog() {
   

  return (
    <div className="ContainerWrap">
        <h2>Blog</h2>
        <div className="blogHome">
                <img className="a"  src={mainImage} data-aos="fade-right" data-aos-duration="1600"/>
                <div className="blogHome_content" data-aos="fade-left" data-aos-duration="1800">
                  <h2>Celebrating Your Wins</h2>
                  <p>Like I've shared before, I am in the middle of pursuing my medium-term (6 month) goal of the Japanese Language Proficiency Test (part of a much larger goal). It's definitely a marathon, not a sprint & I'm learning to find the balance of staying disciplined & being gentle with myself for faltering. While those are incredibly important things to achieving goals, another overlooked aspect is congratulating yourself along the way! As they say, it's the journey not the destination so we don't have to wait to accomplish a major milestone before celebrating what we have worked towards. </p>
                  <p>
Typically I study grammar & Japanese kanji in the morning & have an online lesson during my lunch hour. Then review more at night before bed after dinner & side projects . It's a lot! So more often than not I'll take 10 minutes out of my day around 2:00pm to have a matcha set. Taking the time to set everything up, all the little rituals, sitting down to unplug & enjoy my sweet & sip my matcha is a great way to ground & refocus my day. I have a sweet tooth that will never die & I love chatting with the shop owners when I go buy the beautiful Japanese sweets. It's one of my favourite ways to pay myself on the back for my morning & afternoon studies (& work) & keep me going for the rest of the day. What are your favourite ways to bring happiness into your day & reward yourself?</p>
                </div>
                
        </div>
        <div className="blogRow">
              {db.map(item => {
                          return(
                                  <div className="blogRow_wrapContent" data-aos={item.fade} data-aos-duration={item.fadeDuration}>
                                          <div class={"image" + item.id}> </div>
                                          
                                      <div className="blogRow_wrapContent_container">
                                                  
                                              <h3 className="blogRow_wrapContent_container-title" >{item.title}</h3>
                                                  <p className="blogRow_wrapContent_container-content"  >
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
