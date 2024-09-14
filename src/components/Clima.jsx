import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import axios from 'axios';
const Clima = ({ ciudad, pais }) => {
    const [clima, setClima] = useState("");
    const [error, setError] = useState(null);

    
    useEffect(() => {
        if (ciudad && pais) {
            const getData = async () => {
                try {
                    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=3e4ce6a97e27f26e29e4844904c327d1&units=metric&lang=es`);
                    setClima(res.data);
                    
                    console.log(clima)
                    setError(null);  // Limpiar errores si la solicitud es exitosa
                } catch (error) {
                    setError('No se pudo obtener el clima. Inténtalo de nuevo.');
                    setClima({});  // Limpiar clima en caso de error
                }
            };
            getData();
        }
    }, [ciudad, pais]);

    return (
        <div className='d-flex justify-content-center'>
            {error && <div className="alert alert-danger">{error}</div>}
            {clima.main ? (
                <Card className='w-75'>
                    <Card.Body>
                        <Card.Title>{clima.name}, {clima.sys.country}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Temperatura: {clima.main.temp} °C</Card.Subtitle>
                        <Card.Text>
                            Descripción: {clima.weather[0].description}
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            ) : (
                <div></div>
            )}
            {console.log(clima)}
        </div>
    );
};

export default Clima;