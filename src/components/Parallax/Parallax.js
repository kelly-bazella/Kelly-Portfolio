import React, { useEffect } from "react";
import M from "materialize-css";
import "./style.css"

function Parallax() {
  useEffect(() => {
    let elements = document.querySelectorAll(".parallax");
    M.Parallax.init(elements);
  }, []);
  return (
    <div>
      <div className="parallax-container">
        <div className="parallax fadein">
          <img
            src="https://dtjew9b6f6zyn.cloudfront.net/wp-content/uploads/2019/03/MN-GettyImages-758683149-o.jpg"
            alt="mn"
            className="fadein"
          />
         
        </div>
        <div className="section white">
            <h1>K E L L Y  B A Z E L L A</h1>
            <h4>web developer</h4>
          </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img
            src="https://stmedia.startribune.com/images/ows_143404516015502.jpg"
            alt="minnesota"
            className="fadein"
          />
         
        </div>
        <div className="section white">
            <div className="container">
            <h3>Mission Statement</h3>
            <p>Front-end web developer with a business communications background who is passionate about creating more user focused content on the web. A recent University of Minnesota Full Stack Development certificate holder looking to continue to expand knowledge further in JavaScript, React, and more. Known for a can-do attitude and tenacious personality: Always looks at each project individually and brings a new perspective while also pinpointing issues, and troubleshooting along the way. Eager to contribute to building user-friendly apps. Looking forward to contributing to a solution-focused environment.</p>
            </div>
          
          </div>
      </div>
    </div>
  );
}

export default Parallax;
