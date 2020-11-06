import React from 'react';
import styled from '@emotion/styled'

const TextTitulo = styled.h1`
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
text-shadow: 3px black;
text-align: center;
text-shadow: 2px 2px 5px grey;
`;

const Titulo = ({titulo, propietario}) => {
    return ( 
        <TextTitulo>
            {titulo} {propietario}
        </TextTitulo>
     );
}
 
export default Titulo;