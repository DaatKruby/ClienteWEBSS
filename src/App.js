import React, { useState, Fragment } from "react";
import Banner from "./components/BannerTitle";
import Display from "./components/Display";

function App() {
  const nombre_casa = "Kruby";
  const lugarSensor = "Puerta Principal";

  const [actividad, nuevaActividad] = useState({
    lugar: "Cocina",
    sensor: "Movimiento",
    fecha: new Date().toUTCString(),
    valor: 0,
  });

  const [mostrarKPIs, setMostrarKPIs] = useState(true);

  const NombreBotonKPI = () => {
    var nombre;
    mostrarKPIs ? (nombre = "Mostrar KPI's") : (nombre = "Mostrar sensores");
    return nombre;
  };

  return (
    <div className="container">
      <Banner titulo="Sistema de Seguridad de " propietario={nombre_casa} />
      <button
        style={{ alignItems: "center" }}
        onClick={() => setMostrarKPIs(!mostrarKPIs)}
      >
        {NombreBotonKPI()}
      </button>
      <Display
        lugarSensor={lugarSensor}
        actividad={actividad}
        mostrarKPIs={mostrarKPIs}
      />
    </div>
  );
}

export default App;
