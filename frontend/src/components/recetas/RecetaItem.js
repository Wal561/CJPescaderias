import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import '../../styles/components/pages/RecetaItem.css'





import '../../styles/components/pages/RecetasPage.css';

const RecetaItem = (props) => {
  const { key, name, description, ingredients, instructions, image } = props;
  const [showIngredientsModal, setShowIngredientsModal] = useState(false);
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);

  const handleIngredientsModal = () => {
    setShowIngredientsModal(!showIngredientsModal);
  };

  const handleInstructionsModal = () => {
    setShowInstructionsModal(!showInstructionsModal);
  };

  return (
    <section className='seccionrecetas'>
      <Row xs={1} md={0} className="g-6">
        <Col key={key}>
          <Card className="tarjetareceta">
            <Card.Img
              variant="top"
              src={image}
              style={{ height: 350, aspect_ratio: "1/1" }}
            />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Button variant="btn btn-outline-success" onClick={handleIngredientsModal}>Ver los ingredientes</Button>
              <Button variant="btn btn-outline-success" onClick={handleInstructionsModal}>Ver las instrucciones</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showIngredientsModal} onHide={handleIngredientsModal}>
        <Modal.Header closeButton>
          <Modal.Title>Ingredientes</Modal.Title>
          
        </Modal.Header>
        <Modal.Body className="modal-body-large-font">
          {ingredients}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-outline-secondary" onClick={handleIngredientsModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showInstructionsModal} onHide={handleInstructionsModal}>
        <Modal.Header closeButton>
          <Modal.Title>Instrucciones</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-large-font">
          {instructions}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleInstructionsModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default RecetaItem;

    