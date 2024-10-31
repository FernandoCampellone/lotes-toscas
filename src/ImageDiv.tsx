/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import ImageMapper from 'react-img-mapper';
import imgLotes from './assets/lotes.jpg';
import { CustomArea } from 'react-img-mapper';


// Definimos la interfaz para el área
// Definimos la interfaz para el mapa
interface MapConfig {
  name: string;
  areas: CustomArea[];
}

// Shapes functions
// 4 sides [a,b,a,c,d,c,d,b]
//   ------b------
//  |             |
//  |             |
//  a             c
//  |             |
//  |             |
//   ------d------


const LotesMapper = () => {
  const [hoveredArea, setHoveredArea] = useState<CustomArea | null>(null);

  const MAP: MapConfig = {
    name: "lotes-toscas",
    areas: [
      // Manzana 4
      {
        id: "mza4-lote9",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [100, 105, 170, 105, 170, 155, 100, 155],
        preFillColor: "rgba(76, 175, 80, 0.3)"
      },
      {
        id: "mza4-lote1A",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [170, 105, 240, 105, 240, 130, 170, 130],
        preFillColor: "rgba(76, 175, 80, 0.3)"
      },
      {
        id: "mza4-lote1B",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [170, 130, 240, 130, 240, 155, 170, 155],
        preFillColor: "rgba(76, 175, 80, 0.3)"
      },
      {
        id: "mza4-lote5",
        shape: "poly",
        scaledCoords:  [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [100, 315,170, 315, 170, 360,100, 423, ],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      {
        id: "mza4-lote8",
        shape: "poly",
        scaledCoords: [200, 110, 150, 110, 150, 160, 200, 160],
        coords: [100, 210, 170, 210, 170, 155, 100, 155],
        preFillColor: "rgba(76, 175, 80, 0.3)"
      },
      {
        id: "mza4-lote7",
        shape: "poly",
        scaledCoords:  [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [100, 210, 170, 210, 170, 263, 100, 263],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      {
        id: "mza4-lote6",
        shape: "poly",
        scaledCoords:  [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [100, 263,100, 315,170, 315, 170, 263  ],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      {
        id: "mza4-lote5",
        shape: "poly",
        scaledCoords: [200, 110, 150, 110, 150, 160, 200, 160],
        coords: [240, 210, 170, 210, 170, 155, 240, 155],
        preFillColor: "rgba(76, 175, 80, 0.3)"
      },
      {
        id: "mza4-lote3A",
        shape: "poly",
        scaledCoords: [200, 110, 150, 110, 150, 160, 200, 160],
        coords: [240, 210, 240, 238, 170, 238, 170, 210],
        preFillColor: "rgba(76, 175, 80, 0.3)"
      },
      {
        id: "mza4-lote3B",
        shape: "poly",
        scaledCoords: [200, 110, 150, 110, 150, 160, 200, 160],
        coords: [240, 263, 240, 238, 170, 238, 170, 263],
        preFillColor: "rgba(76, 175, 80, 0.3)"
      },
      {
        id: "mza4-lote4",
        shape: "poly",
        scaledCoords: [200, 110, 150, 110, 150, 160, 200, 160],
        coords: [170, 265, 240, 265, 240, 303, 170, 360],
        preFillColor: "rgba(76, 175, 80, 0.3)"
      },
      // Manzana 3
      {
        id: "mza3-lote2",
        shape: "poly",
        scaledCoords:  [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [362,358,362,463,430,463,430,358],
        preFillColor: "green",
      },
      {
        id: "mza3-lote3",
        shape: "poly",
        scaledCoords:  [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [362,410,362,463,430,463,430,410],
        preFillColor: "blue",
      },
      {
        id: "mza3-lote4",
        shape: "poly",
        scaledCoords:  [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [362,515,362,463,430,463,430,515],
        preFillColor: "red",
      },
      {
        id: "mza3-lote9",
        shape: "poly",
        scaledCoords:  [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [295,410,295,463,360,463,360,410],
        preFillColor: "yellow",
      },
      {
        id: "mza3-lote10",
        shape: "poly",
        scaledCoords:  [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [295,360,295,410,360,410,360,300],
        preFillColor: "red",
      },
      {
        id: "mza3-lote1",
        shape: "poly",
        scaledCoords:  [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [362,300,362,410,430,410,430,240],
        preFillColor: "yellow",
      },
      // 🍎 5
      {
        id: "mza5-lote2A",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [320, 200, 320, 105, 170, 155, 100, 200],
        preFillColor: "rgba(90, 11, 80, 0.3)"
      },
    ]
  };

  const handleAreaClick = (area: CustomArea) => {
    alert(`Seleccionaste: ${area.id}`);
  };

  const handleAreaHover = (area: CustomArea) => {
    setHoveredArea(area);
  };

  const getTipPosition = (area: CustomArea) => {
    return { top: `${area.center?.[1]}px`, left: `${area.center?.[0]}px` };
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <ImageMapper 
        src={imgLotes}
        map={MAP}
        width={1000}
        onClick={handleAreaClick}
        onMouseEnter={handleAreaHover}
        onMouseLeave={() => setHoveredArea(null)}
      />
      {
        hoveredArea && (
          <div
            className="absolute bg-white px-2 py-1 rounded shadow-lg text-sm"
            style={getTipPosition(hoveredArea)}
          >
            {hoveredArea.id}
          </div>
        )
      }
    </div>
  );
};

export default LotesMapper;



//justifyContent: 'center', alignItems: 'center'