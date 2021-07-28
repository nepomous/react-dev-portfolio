// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'
import { experiences, projectStrings } from "../../constants/strings";

const Contact = () => {

  return (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5>{projectStrings.contact}</h5>
        <Card>
          {/* Colocar minhas redes sociais aqui ao inves de um form */}
          <Row>
              <Input placeholder="lorem@ipsum.com" type="email" label="Email" s={12} />
              <Input placeholder="Lorem Ipsum..." label="Message" s={12} />
            <Col s={12} m={12}>
              <Button waves='light' className="right grey darken-2">{projectStrings.sendButtonLabel}</Button>
            </Col>
          </Row>
        </Card>
    </Col>
  </Row>
  )
  };

export default Contact;