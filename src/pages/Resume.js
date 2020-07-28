import React, {Component} from "react";
import M from "materialize-css";

class Resume extends Component {
  componentDidMount = () => {
    M.Tabs.init(this.Tabs);
  }
  render(){
    return (
      <div className="container">
        <h1>Resume</h1>
        <div className="row">
      <div className="col s12">
        <ul className="tabs" ref={(Tabs) => {
                  this.Tabs = Tabs;
                }}>
          <li className="tab col s3"><a href="#test1">Summary</a></li>
          <li className="tab col s3"><a className="active" href="#test2">Technical Skills</a></li>
          <li className="tab col s3"><a href="#test3">Education</a></li>
          <li className="tab col s3"><a href="#test4">Experience</a></li>
        </ul>
      </div>
      <div id="test1" className="col s12">
        <h1>Mission</h1><h5>Front-end web developer with a business communications background who is passionate about creating more user focused content on the web. A recent University of Minnesota Full Stack Development certificate holder looking to continue to expand knowledge further in JavaScript, React, and more. Known for a can-do attitude and tenacious personality: Always looks at each project individually and brings a new perspective while also pinpointing issues, and troubleshooting along the way. Eager to contribute to building user-friendly apps. Looking forward to contributing to a solution-focused environment.</h5>
        <p>For a PDF version of my resume <a href="./resume.pdf" target="_blank">Click Here</a></p>
        </div>
      <div id="test2" className="col s12">
        <h3>MERN Stack</h3>
        <p>MongoDB, Express, React.js, Node.js</p>
        <h3>Languages</h3>
        <p>HTML, CSS, JavaScript, jQuery</p>
        <h3>Applications</h3>
        <p>VisualStudio Code, Node.js, GitHub, PostMan, JustInMind</p>
        <p>For a PDF version of my resume <a href="./resume.pdf" target="_blank">Click Here</a></p>
      </div>
      <div id="test3" className="col s12">
        <h3>University of St. Thomas</h3>
        <p>St. Paul, MN | Graduated: May 2018</p>
        <p>Bachelor of Arts in Business Administration - Concentration in Communication</p>
        <hr />
        <h3>University of Minnesota Coding Boot Camp Certificate</h3>
        <p>Certificate Received: May 2020</p>
        <p>A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory, Bookshelf.js, MongoDB, MySQL, Command Line, Java and Git.  </p>
        <p>For a PDF version of my resume <a href="./resume.pdf" target="_blank">Click Here</a></p>
      </div>
      <div id="test4" className="col s12">
        <h3>H.R. Coordinator - C.H. Robinson</h3>
        <p>April 2019-Present</p>
        <ul>
          <li>Responsible for scheduling interviews, completing background checks, and ensuring a smooth onboarding experience</li>
          <li>Maintain standard metrics for HR interviewing process and audit current processes to ensure legal compliance</li>
          <li>
            Member of the fun committee which aims to bring the department together to foster professional workplace relationship development
          </li>
          </ul>
          <p><b>Relavent projects:</b></p>
          <ul>
          <li>Worked to update the HTML of all job postings to be more cohesive, user-friendly, and professional looking</li>
          <li>
            Shadowed technology team to review the CSS of our intranet site
          </li>
          <li>
            Shadowed Learning and Development team to learn about learning modules. 
          </li>
          </ul>
          <hr />
         <h3>H.R. Coordinator - Fraser</h3>
         <p>May 2018 - April 2019</p>
         <ul>
           <li>Supported internal communications primarily through formatting and editing the employee intranet site, forms, and site pages in SharePoint</li>
           <li>Developed project management, time management, and professional communication skills</li>
         </ul>
         <p><b>Relavent projects:</b></p>
         <ul>
           <li>Updated Benefits page on Intranet Site so more accessible to employees</li>
           <li>Updated homepage of intranet site weekly</li>
         
         </ul>
         <p>For a PDF version of my resume <a href="./resume.pdf" target="_blank">Click Here</a></p>
  
      </div>
    </div>
      </div>
    );
  }
  
}

export default Resume;