import React from "react";
import '../styles/components/pages/ContactoPage.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactoPage = (props) => {
    return (
            <Container className="contenedor">
                
            <Row>
              <Col>
        
            <div>
                <h2>Contacto Rapido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label htmlFor="telefono">Telefono</label>
                        <input type="text" name="" />    
                    </p>
                    <p>
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar" />
                    </p>
                </form>
                </div>
                </Col>
                <Col>

             
            <div className="datos">
                <h2>Otras vias de comunicacion</h2>
                <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Telefono: 03492 31-7823</li>
                    <li>Nuestras direcciones: Remedios de Escalada 1175  y bv Roca 1757, Rafaela, Argentina, 2300</li>
                    <li>Email: contacto@capitanJack.com.ar</li>
                    <li>Facebook: https://www.facebook.com/people/Capit%C3%A1n-Jack/100027992936887/</li>
                    <li>Instagram: capitanjackpescaderia</li>
                    
                </ul>           
            </div>
            <div style={{ maxHeight: "80vh", marginBottom: "60px" }}>
    
        </div>
        
        </Col>
        </Row>
        </Container>
    );
}

export default ContactoPage;