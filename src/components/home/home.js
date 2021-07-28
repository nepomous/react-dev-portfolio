import React from "react";
import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../user_profile/user_profile'
import Experience from '../experience/experience'
import company_avatar from '../../images/company.png';
import company_avatar2 from '../../images/company2.png';
import { experiences, projectStrings, profileStrings } from "../../constants/strings";

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">{projectStrings.aboutMe}</h5>
        <Card>
          <div>
            <p><b>Lorem</b></p>
            <p>{profileStrings.aboutMe}</p>
            <br/>
            <p><b>Ipsum</b></p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </Card>
        <h5 className="subtitle">Experiences</h5>
   
        <Experience title={experiences.company1.jobTitle}
                    company={experiences.company1.companyName}
                    description={experiences.company1.jobExperience}
                    avatar={company_avatar}
        />
        <Experience title={experiences.company2.jobTitle}
                    company={experiences.company2.companyName}
                    description={experiences.company2.jobExperience}
                    avatar={company_avatar2}                    
        /> 
    </Col>
  </Row>
);

export default Home;