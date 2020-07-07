import React, {Component} from "react";
import "./style.css"

class Portfolio extends Component {
// state={
//   repoNames:[],
//   repoLinks:[]
// }

//   componentDidMount =()=> {
//     let queryURL = 'https://api.github.com/users/kelly-bazella/repos';
//     axios.get(queryURL)
//     .then(function(response){
//       console.log(response.data)
//     //  this.setState({

//     //    repoNames:response.data[i].name,
//     //    repoLinks:response.data[i].html_url
    
//     //  })
//   })
// }

render(){
  return(
    <div>
    <h1>Portfolio</h1>
 
    <div className="container">
 
    < hr />
      <div className="row">
        <div className="col s12 m6">
          <div className="card float-left">
            <div className="card-image">
            <img
              src="Assets/images/TravelMaster.png"
              //style={{height:"200px", width:"475px"}}
              loading="lazy"
              // className="card-img-top"
              alt="travelmaster"
              
            />
      
            </div>
           
            <div className="card-content">
            <span className="card-title">Travel Master</span>
              <p>
                This project helped to showcase the knowledge gained using HTML,
                CSS, JavaScript, and jQuery. My team and I also worked on API
                calls. Styling framework used was Foundation.
              </p>
              <a
                href="https://github.com/stevekindt/Project-1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                Application
              </a>
              <a
                href="https://github.com/stevekindt/Project-1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
            <img
              src="Assets/images/QuizGame.PNG"
              alt="project"
            />
            </div>
           
            <div className="card-content">
              <span className="card-title">Quiz Game</span>
              <p>
                This app was created using Passport, Express, mySQL, and
                Handlebars. This app is also deployed on Heroku.
              </p>
              <a
                href="https://gold-team-quiz.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                Application
              </a>
              <a
                href="https://github.com/kelly-bazella/Project-2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
            <img
              src="Assets/images/PasswordGenerator.png"
             
              alt="..."
            />
            </div>
        
            <div className="card-content">
              <span className="card-title">Password Generator</span>
              <p>
                This app was created using HTML, JavaScript, and BootStrap CSS
                framework.
              </p>
              <a
                href="https://github.com/kelly-bazella/Password-Generator"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
            <img
              src="Assets/images/view.gif"
              alt="..."
            />
            </div>
         
            <div className="card-content">
              <span className="card-title">Employee Tracker</span>
              <p>
                Employee Tracker is a CLI app. Employers can enter information
                about their reports and will then be presented with a PDF
                document.
              </p>
              <a
                a
                href="https://github.com/kelly-bazella/Employee-Tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
            <img
              src="Assets/images/profile-generator.gif"
              className="card-img-top"
              alt="..."
            />
            </div>
        
            <div className="card-content">
              <span className="card-title">Profile Generator</span>
              <p>
                This project uses the CLI to gather information, send out
                information through an API and ultimately returns a profile in
                HTML format.
              </p>
              <a
                href="https://github.com/kelly-bazella/Profile-Generator"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
            <img
              src="Assets/images/employee-directory.PNG"
          
              alt="..."
              className="fadein"
            />
            </div>
      
            <div className="card-content">
              <span className="card-title">Employee Directory</span>
              <p>
                A React application deployed on Heroku. Using the Random User API, employees are displayed in random order. The employees can be sorted by their first name or by their ID number. 
              </p>
              <a
                href="https://bazella-employee-tracker.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                Application
              </a>
              <a
                href="https://github.com/kelly-bazella/Employee-Directory"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div style={{height:'25px'}}></div>
    </div>
  </div>
  )
}
}

export default Portfolio;