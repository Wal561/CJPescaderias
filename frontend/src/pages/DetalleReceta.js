import React from 'react';
import { useParams } from 'react-router-dom';

const DetalleReceta = ({ recetas }) => {
  const { id } = useParams();
  console.log(recetas)
  const receta = recetas.find(item => item.recetas.id === parseInt(id));
  

  if (!receta) {
    return <p>Receta no encontrada</p>;
  }

  return (
    <div>
      <h2>{receta.nombre}</h2>
      <p>{receta.descripcion}</p>
      <p>Ingredientes: {receta.ingredientes}</p>
      <p>Instrucciones: {receta.instrucciones}</p>
      
    </div>
  );
};

export default DetalleReceta;
