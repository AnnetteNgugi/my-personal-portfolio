import React, {useState} from 'react'

const About = () => {
    const [activeTab , setActiveTab] = useState("education");
    let content;
    if (activeTab === "education") {
        content = (
          <ul>
            <li>University of Nairobi - Bachelor of Science in Electrical and Electronic Engineering</li>
            <li>Moringa School - Software Engineering Program</li>
          </ul>
        );
    } else if (activeTab === "coding") {
        content = (
          <p>I'm a full-stack web devloper.
            I value understanding how technology really works instead of just using it blindly.
            I strive to grasp the underlying mechanisms before adopting them.
            I also believe the best products are clear , easy to use and well-desined .
            True sophistication comes form simpicity.
          </p>
         );
    } else if (activeTab === "hobbies") {
        content = (<p>
          I am a health enthusiast.
          I workout 4-5 times a week, and try to maintain myself in good shape.
          I also care about nutrition and cooking healthy meals is one of my favorite thigns to do.
        </p>
        )
    } else {content = <p>Select a category to learn more about me.</p>}
  return (
    <div id='about' className='about'>
      <h1>About Me</h1>
      <div className='about-tabs'>
        <button 
        className={activeTab === "education" ? "active" : ""}
        onClick={() => setActiveTab("education")}>
        Education
        </button>
        <button 
        className={activeTab === "coding" ? "active" : ""}
        onClick={() => setActiveTab("coding")}
        >
          Coding
        </button>
        <button
        className={activeTab === "hobbies" ? "active" : ""}
        onClick={() => setActiveTab("hobbies")}
        >
          Hobbies
        </button>
      </div>
    </div>
  )
}

export default About;