import React from "react";
import '../styles/components/pages/NosotrosPages.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NosotrosPage = (props) => {
    return (
        <Container className="contenedor">
            
        <Row>
          <Col>
          <div className="historia">
            <h2>Historia</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor risus eget eros elementum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia

            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            </p>
        </div>
          </Col>
          <Col>
          <div className="staff">
            <h2>Nuestro Capitan</h2>
            <div className="persona">
              <div className="image-container">
                <img src="images/images/nosotros/nosotros1.jpg" alt="Juan Gomez" />
              </div>
                <h5>Juan Gomez</h5>
                <h6>Gerente General</h6>
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia

                </p>
            </div>
            </div>
          </Col>
        </Row>
        <Row>
        <Col>
        
          <div>
            <h2>Sucrusal 1:</h2>
            <div className="persona">
              <div className="image-container">
                <img src="images/local1.jpg" alt="Imagen local uno" className="image-shadow"/>
              </div>
                <h5>Remedios de Escalada 1175</h5>
                <h6>Rafaela</h6>
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia

                </p>
            </div>
            </div>
          </Col>
          <Col>
          <div>
            <h2>Sucursal 2:</h2>
            <div className="persona">
                <div className="image-container">
                <img src="images/local2.jpg" alt="Imagen local dos" />
                </div>
                <h5>Presidente Roca 3550</h5>
                <h6>Rafaela</h6>
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 

                </p>
            </div>
            </div>
          </Col>
        </Row>
        
        
      </Container>
        
        
        
        
       
    );
}

export default NosotrosPage;