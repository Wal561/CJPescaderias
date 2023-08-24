import React, { Fragment, useState, useEffect  } from "react";


import '../styles/components/pages/HomePage.css';
import Carousel from 'react-bootstrap/Carousel';



import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const HomePage = (props) => {
  const [presentacion, setProductos] = useState([]);

  useEffect(() => {
    // Cargar los datos del archivo JSON de productos
    fetch("/presentacion.json")
      .then((response) => response.json())
      .then((data) => setProductos(data));
  }, []);

    return (
      <Fragment>
        <div className="contenedor1">
        <Carousel fade className='carrusel'>
          {/* Primera imagen */ }
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="images/pescadosymariscos.jpg" alt="pescado de mar"
            />
            <Carousel.Caption className="letrasCarousel">
              <h3>Pescados de mar y mariscos</h3>
              <p>Encontrarás una amplia varidedad y la mejor calidad.</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Segunda imagen */ }
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="images/recetasdepescado.jpg" alt="recetas para pescados"
            />
            <Carousel.Caption className="letrasCarousel">
              <h3>Consultá nuestras recetas</h3>
              <p>Asesoramiento profesional con las mejores recetas y preparaciones.</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Tercera imagen */ }
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="images/camarones.jpg" alt="camarones"
            />
            <Carousel.Caption className="letrasCarousel">
              <h3>Pescados de río</h3>
              <p>La mayor variedad de pescados de río en la zona.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <hr />
      
      <section>
      <h1>Conoce Nuestros Locales y Productos:</h1>  
      <hr />
        
      <Row xs={1} md={2} className="g-2">
      {presentacion.map((presentacion) => (
        <Col key={presentacion.id}>
          <Card className="tarjetaproducto">
            <Card.Img
              variant="top"
              src={presentacion.imagen}
              style={{ objectFit: "cover", height: "200px" }}
            />
            <Card.Body>
              <Card.Title>{presentacion.nombre}</Card.Title>
              <Card.Text>{presentacion.descripcion}</Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    </section>
    </div>
    </Fragment>
      );
    }

export default HomePage;
