
import React, { useState } from "react";
import { Row, Form, Button } from "react-bootstrap";


const LugarClima = ({setCiudad, setPais, ciudad, pais, handleSubmit}) => {
    const handleChange = (e) => {
        (e.target.name === 'ciudad') ? setCiudad(e.target.value) : setPais(e.target.value);
      };



  return (
    <Form onSubmit={handleSubmit}>
    <div className='row'>
      <div className="col-6">
        <Form.Group className="mb-3" controlId="formBasicCiudad">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control name='ciudad' value={ciudad} onChange={handleChange} type="text" placeholder="Ciudad" />
        </Form.Group>
      </div>
      <div className="col-6">
        <Form.Group className="mb-3" controlId="formBasicPais">
          <Form.Label>Pais</Form.Label>
          <Form.Control name='pais' value={pais} onChange={handleChange} type="text" placeholder="Pais" />
        </Form.Group>
      </div>
      <Button variant="primary" type="submit">
        consultar
      </Button>
    </div>
  </Form>
  );
};

export default LugarClima;
