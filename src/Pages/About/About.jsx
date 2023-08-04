import React from 'react'
import product_1 from "../../Assets/product_1.jpg"
import product_2 from "../../Assets/product_2.jpg"
import product_3 from "../../Assets/product_3.jpg"
import "./About.scss"

export const About = () => {
  return (
    <div className='container'>
        <div className="container marketing"/>

    <div className="row featurette my-5 ml-4">
      <div className="col-md-7">
        <h2 className="featurette-heading">THE CHALLENGES AND TRIUMPHS OF LEARNING TO CODE</h2>
        <p className="lead center">Share your personal experiences of the obstacles you faced when you first started coding and how
          you overcame them. Discuss your journey, from beginner to where you are now, and the lessons you learned along
          the way.</p>
      </div>
      <div className="col-md-5">
        <img className="bd-placeholder-img img" width="400"src={product_1} alt="Not Found"/>
      </div>
    </div>

    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading">THE IMPORTANCE OF MENTORSHIP IN YOUR CODING JOURNEY</h2>
        <p className="lead center">Explain how having a mentor or someone to guide you in your coding journey can make all the
          difference. Share your own experiences with finding a mentor and how they have helped you develop your skills
          and grow as a coder.</p>
      </div>
      <div className="col-md-5 order-md-1">
        <img className="bd-placeholder-img" width="400" src={product_2} alt="Not Found"/>
      </div>
    </div>


    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">THE EVOLUTION OF YOUR CODING SKILLSET</h2>
        <p className="lead center">Write about how your coding skills have progressed over time, and how you continue to grow and
          learn new things. Discuss the different tools, technologies, and programming languages that you have learned
          and how they have shaped your coding journey.</p>
      </div>
      <div className="col-md-5">
        <img className="bd-placeholder-img" width="400" src=
        {product_3} alt="Not Found"/>
      </div>
    </div>


    </div>
  )
}
