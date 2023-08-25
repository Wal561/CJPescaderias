
import React, { useState } from 'react'
import axios from 'axios';
import '../styles/components/pages/ContactoPage.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);
    
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await

axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }
    return(
        <Container className="contenedor">
            <Row>
                <Col>
                    <form className="formulario" onSubmit={handleSubmit}>
                        <p>
                            <label>Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre}
                                onChange={handleChange} />
                        </p>
                        <p>
                            <label>Email</label>
                            <input type="text" name="email" value={formData.email}
                                onChange={handleChange} />
                        </p>
                        <p>
                            <label>Teléfono</label>
                            <input type="text" name="telefono" value={formData.telefono}
                                onChange={handleChange} />
                        </p>
                        <p>
                            <label>Mensaje</label>
                            <textarea name="mensaje" value={formData.mensaje}
                                onChange={handleChange} ></textarea>
                        </p>
                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}
                        <p className="centrar"><input type="submit" value="Enviar" /></p>
                    </form>
                </Col>
           
            <Col>


                <div className="datos">
                    <h2>Otras vias de comunicacion</h2>
                    <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
                    <ul>
                        <li>Telefono: 03492 31-7823</li>
                        <li>Nuestras direcciones: Remedios de Escalada 1175  y bv Roca 1757, Rafaela, Argentina.</li>
                        <li>Email: contacto@capitanJack.com.ar</li>
                        <li>Facebook: <a href='https://www.facebook.com/people/Capit%C3%A1n-Jack/100027992936887/' target="_blank" rel="noreferrer">Nuestro Facebook</a></li>
                        <li>Instagram: <a href='https://www.instagram.com/capitanjackpescaderia/' target="_blank" rel="noreferrer">Nuestro Instagram</a></li>

                    </ul>
                </div>
                <div style={{ maxHeight: "80vh", marginBottom: "60px" }}>

                </div>

            </Col>
            </Row>
        </Container>
    )

}

export default ContactoPage;