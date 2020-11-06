import React, { Fragment } from "react";
import Sensor from "./Sensor";
import styled from "@emotion/styled";

const ContenedorDisplay = styled.div`
  background-color: rgb(0, 0, 0);
  border-radius: 15px;
  color: #fff;
  margin-top: 1rem;
  padding: 2rem;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.1);
`;

const NombreSistema = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  text-align: center;
  text-shadow: 1px 1px 5px #e3e0cc;
`;

const Display = ({ lugarSensor, actividad, mostrarKPIs }) => {

const nombreDisplay = () =>{
  var nombre;
  mostrarKPIs ? (nombre=lugarSensor) : (nombre="KPIs") ;
  return nombre;
}

  return (
    <ContenedorDisplay>
      <NombreSistema>{nombreDisplay()}</NombreSistema>
      <div className="container">
        <div className="row">
          {mostrarKPIs ? (
            <Fragment>
              <div className="one-half column">
                <Sensor actividad={actividad} tipo="Movimiento" />
              </div>
              <div className="one-half coluimn">
                <Sensor actividad={actividad} tipo="Sonido" />
              </div>{" "}
            </Fragment>
          ) : null}
        </div>
      </div>
    </ContenedorDisplay>
  );
};

export default Display;
