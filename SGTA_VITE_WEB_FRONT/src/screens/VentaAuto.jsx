import React from "react";
import "../css/VentaAuto.css";

const VentaAuto = () => {
  return (
    <div className="product-container">
      <div className="back-link">
        <span>← Volver al catálogo</span>
      </div>
      
      <div className="product-content">
        <div className="product-image-container">
          <img
            src="https://phantom-expansion.unidadeditorial.es/d2b2584aca2d3c7f5fbbd787fb9e5bc2/crop/0x725/2043x1875/resize/1200/f/jpg/assets/multimedia/imagenes/2022/05/20/16530388017130.jpg"
            alt="Chevy POP"
            className="product-image"
          />
        </div>
        
        <div className="product-info">
          <h1 className="product-title">Chevy POP</h1>
          
          <div className="price-section">
            <p className="price-label">Precio Total Sugerido:</p>
            <p className="price-value">$915,000 MXN</p>
          </div>
          
          <div className="specs-container">
            <div className="spec-row">
              <div className="spec-item">
                <p className="spec-label">Color:</p>
                <p className="spec-value">Plateado</p>
              </div>
              
              <div className="spec-item">
                <p className="spec-label">Kilometraje promedio:</p>
                <p className="spec-value">120,000 km</p>
              </div>
            </div>
            
            <div className="spec-row">
              <div className="spec-item">
                <p className="spec-label">Motor:</p>
                <p className="spec-value">1.6L, 4 cilindros</p>
              </div>
              
              <div className="spec-item">
                <p className="spec-label">Año:</p>
                <p className="spec-value">2023</p>
              </div>
            </div>
          </div>
          
          <button className="buy-button">Comprar Auto</button>
          
          <div className="description-section">
            <p className="description-label">Descripción:</p>
            <p className="description-text">
              Sedán compacto en excelente estado, equipado con motor 1.4L de alta eficiencia, 
              sistema de transmisión automática, interiores en piel, pantalla táctil con conexión Bluetooth y 
              cámara de reversa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentaAuto;