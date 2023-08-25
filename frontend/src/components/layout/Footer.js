import React from "react"
import '../../styles/components/layout/Footer.css'

// Importación de grid de ReactBootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Importación de react icons
import { ImFacebook2, ImWhatsapp, ImInstagram} from 'react-icons/im';

const Footer = (props) => {
    return (
    <footer> 
        <Container className="containerfooter">
        <Row>
        <Col>
        <p>Derechos reservados. Capitan JACK Pescaderías.</p>
        </Col>
        <Col>
        
        <p>Contactanos en redes:</p>
            <a href='https://www.facebook.com/people/Capit%C3%A1n-Jack/100027992936887/' target="_blank" rel="noreferrer">
                <i><ImFacebook2/></i>
            </a>
            <a href='https://api.whatsapp.com/send?phone=3492317823' target="_blank" rel="noreferrer">
                <i><ImWhatsapp/></i>
            </a>
            <a href='https://www.instagram.com/capitanjackpescaderia/?hl=es' target="_blank" rel="noreferrer">
                <i><ImInstagram/></i>
            </a>
            
            
        </Col>
        </Row>
        </Container>
    
    </footer>
    );
}

export default Footer;



