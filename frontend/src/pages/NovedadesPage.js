import React from "react";
import '../styles/components/pages/NovedadesPage.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NovedadesPage = (props) => {
    return (
        <Container className="contenedor">
            
        <Row>
          <Col>
        <section>
            <h2>Novedades</h2>
            <h3>Pescaderias Capitan Jack</h3>
            <h4>Rafaela</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia

            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </section>
        </Col>
        </Row>
        
        
        </Container>
    );
}

export default NovedadesPage;