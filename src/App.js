import React from 'react';
import logo from './logo.svg';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <div id="mobile-menu-open" class="shadow-large">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
  
      <header>
          <div id="mobile-menu-close">
              <span>Close</span> <i class="fa fa-times" aria-hidden="true"></i>
          </div>
          <ul id="menu" class="shadow">
              <li>
                  <a href="#about">About</a>
              </li>
              <li>
                  <a href="#experience">Experience</a>
              </li>
              <li>
                  <a href="#education">Education</a>
              </li>
              <li>
                  <a href="#projects">Projects</a>
              </li>
              <li>
                  <a href="#skills">Skills</a>
              </li>
              <li>
                  <a href="#contact">Contact</a>
              </li>
          </ul>
      </header>
  

      <div id="lead">
          <div id="lead-content">
              <h1>Fillipe Oliveira</h1>
              <h2>Front-end Developer</h2>
              <a href="https://drive.google.com/file/d/1CKGvUXx2EaQ90JVd8gefcIA8KyrBgCuw/view?usp=sharing" target="_blank" class="btn-rounded-white">Download Resume</a>
          </div>          

          <div id="lead-overlay"></div>

          <div id="lead-down">
              <span>
                  <i class="fa fa-chevron-down" aria-hidden="true"></i>
              </span>
          </div>          
      </div>  

      <div id="about">
          <div class="container">
              <div class="row">
                  <div class="col-md-4">
                      <h2 class="heading">About Me</h2>
                  </div>
                  <div class="col-md-8">
                      <p>
                          I'm a Brazilian Front-end Developer
                          I'm an enthusiastic about new technologies/methodologies and I also love to share what I know
                          with others. I started my developer journey in 2018 with Front-End development and
                          since then I evolved my learning with other technologies like: HTML, CSS, JavaScript, ReactJS and 
                          SQL. My main stack is JS                        
                      </p>
                  </div>
              </div>
          </div>
      </div>
  
      <div id="experience" class="background-alt">
          <h2 class="heading">Experience</h2>
          <div id="experience-timeline">
              <div data-date="April 2018 – Current">
                  <h3>PwC Brazil</h3>
                  <h4>Associate</h4>
                  <p>
                      As a G Suite Service Manager, I'm responsible for Google platform in Brasil, testing new updates
                      from global team, also supporting our territory communications team to spread the word on new
                      features, and encouraging the Google culture in the company. <br />
                      - Onboarded several Google services at country level. <br />
                      - Created standardized documents to speed up the process of our Service Desk. <br />
                      - Established communication channels with other country Service Managers. <br />
                      - Testing new services and evaluating them to our territory reality. <br />
                  </p>
              </div>

              <div data-date="February 2015 – April 2018">
                  <h3>Fundação IDI</h3>
                  <h4>System Analyst</h4>
                  <p>
                      - Support and analysis in RM TOTVS ERP (payroll and people management), <br />
                      - HTML5/Javascript programming in Fluig TOTVS (forms); <br />
                      - Construction of BI panels using Qlik Sense; <br />
                      - Requirement analysis with the intern clients focusing in process evolution; <br />
                      - Manual development; <br />
                      - Training experience; <br />
                      - Software used: SQL Server 2008 R2, RM TOTVS, Qlik Sense, VS Code <br />
                  </p>
              </div>

              <div data-date="September 2011 – July 2013">
                  <h3>Accenture</h3>
                  <h4>Analyst</h4>
                  <p>
                      - Analyst with the responsability of developing project documentation; <br />
                      - (2011-2012) “Projeto Migração CEI”: Analyst responsible for developing the documentation to the
                      programming team to build the source-code of Itaú’s new ATM System. <br />
                      - (2012-2013)”Projeto NMA Qualicorp”: Analyst responsible for developing the documentation to the
                      programming team to build the source-code of Qualicorp’s new system <br />
                  </p>
              </div>
          </div>
      </div>
  

      <div id="education">
          <h2 class="heading">Education</h2>
          <div class="education-block">
              <h3>Pontifícia Universidade Católica de São Paulo (PUC-SP)</h3>
              <span class="education-date">Jan 2007 - Jul 2011</span>
              <h4>Bachelor of Science in Computer Science</h4>            
          </div>          

          <div class="education-block">
              <h3>SENAC-SP</h3>
              <span class="education-date">Jan 2012 - Jul 2013</span>
              <h4>Postgraduate, Computer Games and Programming Skills</h4>            
          </div>          
      </div>  

      <div id="projects" class="background-alt">
          <h2 class="heading">Projects</h2>
          <div class="container">
              <div class="row">
                  <div class="project shadow-large">
                      <div class="project-image">
                          <img src="images/project.jpg" />
                      </div>
                      
                      <div class="project-info">
                          <h3>Minhas Series</h3>
                          <p>
                              A ReactJS based project to control your favorite TV Series.
                          </p>
                          <a href="https://minhas-series-nepomous.herokuapp.com/" target="_blank">View Project</a>
                      </div>                      
                  </div>                  

                  <div class="project shadow-large">
                      <div class="project-image">
                          <img src="images/project.jpg" />
                      </div>
                      
                      <div class="project-info">
                          <h3>Contador de Voltas</h3>
                          <p>
                              A ReactJS based project to count your laps in your daily running.
                          </p>
                          <a href="#">View Project (under construction)</a>
                      </div>
                      
                  </div>
                  
              </div>
          </div>
      </div>  

      <div id="skills">
          <h2 class="heading">Skills</h2>
          <ul>
              <li>JavaScript</li>           
              <li>ReactJS</li>           
              <li>C#</li>         
              <li>SQL</li>        
              <li>Node.js</li>
          </ul>
      </div> 

      <div id="contact">
          <h2>Get in Touch</h2>
          <div id="contact-form">
              <form method="POST" action="https://formspree.io/fillipe_martins@hotmail.com">
                  <input type="hidden" name="_subject" value="Contact request from personal website" />
                  <input type="email" name="_replyto" placeholder="Your email" required />
                  <textarea name="message" placeholder="Your message" required></textarea>
                  <button type="submit">Send</button>
              </form>
          </div>
          
      </div>  

      <footer>
          <div class="container">
              <div class="row">
                  <div class="col-sm-5 copyright">
                      <p>
                          Copyright &copy; 2019 FILLIPE OLIVEIRA
                      </p>
                  </div>
                  <div class="col-sm-2 top">
                      <span id="to-top">
                          <i class="fa fa-chevron-up" aria-hidden="true"></i>
                      </span>
                  </div>
                  <div class="col-sm-5 social">
                      <ul>
                          <li>
                              <a href="https://github.com/nepomous/" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
                          </li>
                          <li>
                              <a href="https://pt.stackoverflow.com/users/159741/nepomous" target="_blank"><i class="fa fa-stack-overflow" aria-hidden="true"></i></a>
                          </li>
                          <li>
                              <a href="https://www.linkedin.com/in/fillipe-oliveira/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                          </li>                        
                      </ul>
                  </div>
              </div>
          </div>
      </footer>
    </div>
  );
}

export default App;
