import React from 'react';
import '../css/estiloTabla.css';

const Tabla = ({ encabezados, datos }) => {
  return (
    <div className="tablaWrapper">
      <div className="tablaContainer">
        <table className="table">
          <thead className="thead">
            <tr>
              {encabezados.map((encabezado, index) => (
                <th key={index} className="th">
                  {encabezado}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {datos.map((fila, index) => (
              <tr key={index} className="trHover">
                {fila.map((celda, index) => (
                  <td key={index} className="td">
                    {celda}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabla;
