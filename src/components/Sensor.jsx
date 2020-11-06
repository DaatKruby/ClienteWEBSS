import React from 'react';
import styled from '@emotion/styled';

const TextoTitulo = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
`;

const Sensor = ({actividad, tipo}) => {
    return ( 
        <div>
        <TextoTitulo>{tipo}</TextoTitulo>
        <p>
          Última actividad detectada: <br />
          {actividad.fecha}
        </p>
      </div>
     );
}
 
export default Sensor;