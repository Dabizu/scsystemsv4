//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
//import React, { useState } from 'react';
function App() {
  /*let array=[];
  let subArray=[];*/
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true); // Para mostrar un indicador de carga
  const listar=()=>{
    fetch('http://sistemasupport.site/scsystemsv4/php/conection/acciones/listarHistorial.php')
        .then(response => response.json())
        .then(data =>{
          console.log(data)
          //var plantilla=``;
          //array=data;
          setDatos(data);
          setLoading(false); // Termina la carga
          console.log("estas es la variable con datos",datos);
          /*
          data.forEach(element => {
            plantilla=plantilla+`
              <tr>
                <td>${element.folio}</td>
                <td>${element.fecha}</td>
                <td>${element.cliente}</td>
                <td>${element.telefono}</td>
                <td>${element.precio}</td>
                <td>${element.status}</td>
                <td>${element.equipo}</td>
                <td></td>
              </tr>`;
              array.push(`<tr>
                  <td>${element.folio}</td>
                  <td>${element.fecha}</td>
                  <td>${element.cliente}</td>
                  <td>${element.telefono}</td>
                  <td>${element.precio}</td>
                  <td>${element.status}</td>
                  <td>${element.equipo}</td>
                  <td></td>
                </tr>`)
          });*/
          //$("#contenedor").html(subArray[0]);
          //document.getElementById("contenedor").innerHTML=plantilla;
        });
  }
  useEffect(()=>{
    listar();
  },[])

  return (
    <div className="App">
      <div id='main'></div>
      <div>
        {loading ? (
          <p>Cargando datos...</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Folio</th>
                <th scope="col">fecha</th>
                <th scope="col">cliente</th>
                <th scope="col">telefono</th>
                <th scope="col">precio</th>
                <th scope="col">status</th>
                <th scope="col">equipo</th>
                <th scope="col">cargador</th>
              </tr>
            </thead>
            <tbody id='contenedor'>
              {datos.map((element, index) => (
                <tr key={index}>
                  <td>{element.folio}</td>
                  <td>{element.fecha}</td>
                  <td>{element.cliente}</td>
                  <td>{element.telefono}</td>
                  <td>{element.precio}</td>
                  <td>{element.status}</td>
                  <td>{element.equipo}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>

  );
}

export default App;
