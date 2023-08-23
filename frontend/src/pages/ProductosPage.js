import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import ProductoItem from '../components/productos/ProductoItem';
import '../styles/components/pages/ProductosPage.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ProductosPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
      const cargarProductos = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/api/productos');
        setProductos(response.data);
        setLoading(false);
      };
      
        cargarProductos();
     }, []);
   
     return (
      <Container className='containerproductos'>
        <h1>Nuestros productos:</h1>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <Row xs={1} md={4} className="g-2">
            {productos.map((item) => (
              <Col key={item.productos.id}>
                <ProductoItem
                  key={item.productos.id}
                  name={item.productos.nombre}
                  description={item.productos.descripcion}
                  image={item.imagen}
                  price={item.productos.precio}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    );
  }
  
  export default ProductosPage;