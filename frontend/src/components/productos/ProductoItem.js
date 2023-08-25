import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import '../../styles/components/pages/ProductoItem.css';

const ProductoItem = (props) => {
    const { key, name, price, image, description } = props;
    return (
        <section className='seccionproductos'>
                  
      <Row xs={1} md={0} className="g-6">
          <Col key={key}>
          <Card className="tarjetaproducto-hija">
            <Card.Img
              variant="top"
              src={image}
              style={{ aspect_ratio: "1.0", height: 150, crop: "fit"}}              
            />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text className="price-text" style={{ color: "#1e5594" }}>{`$${price}`}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>

    </section>

    );
}



export default ProductoItem;