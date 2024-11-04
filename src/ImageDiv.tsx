/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import ImageMapper from 'react-img-mapper';
import imgLotes from './assets/lotes.jpg';
import { CustomArea } from 'react-img-mapper';

interface MapConfig {
  name: string;
  areas: CustomArea[];
}

const LotesMapper = () => {

    const [selectedLote, setSelectedLote] = useState<CustomArea | null>(null);
  const MAP: MapConfig = {
    name: "lotes-toscas",
    areas: [
      // Manzana 4
      {
        id: "mza4-lote9",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [100, 105, 170, 105, 170, 155, 100, 155],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      {
        id: "mza4-lote1A",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [170, 105, 240, 105, 240, 130, 170, 130],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      {
        id: "mza4-lote1B",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [170, 130, 240, 130, 240, 155, 170, 155],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      {
        id: "mza4-lote5",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [100, 315, 170, 315, 170, 360, 100, 423],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      {
        id: "mza4-lote8",
        shape: "poly",
        scaledCoords: [200, 110, 150, 110, 150, 160, 200, 160],
        coords: [100, 210, 170, 210, 170, 155, 100, 155],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      {
        id: "mza4-lote7",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [100, 210, 170, 210, 170, 263, 100, 263],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      {
        id: "mza4-lote6",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [100, 263, 100, 315, 170, 315, 170, 263],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      {
        id: "mza4-lote5",
        shape: "poly",
        scaledCoords: [200, 110, 150, 110, 150, 160, 200, 160],
        coords: [240, 210, 170, 210, 170, 155, 240, 155],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      {
        id: "mza4-lote3A",
        shape: "poly",
        scaledCoords: [200, 110, 150, 110, 150, 160, 200, 160],
        coords: [240, 210, 240, 238, 170, 238, 170, 210],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      {
        id: "mza4-lote3B",
        shape: "poly",
        scaledCoords: [200, 110, 150, 110, 150, 160, 200, 160],
        coords: [240, 263, 240, 238, 170, 238, 170, 263],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      {
        id: "mza4-lote4",
        shape: "poly",
        scaledCoords: [200, 110, 150, 110, 150, 160, 200, 160],
        coords: [170, 265, 240, 265, 240, 303, 170, 360],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      // Manzana 3
      {
        id: "mza3-lote2",
        shape: "poly",

        scaledCoords:  [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [362,358,362,410,430,410,430,358],
        preFillColor: "rgba(76, 175, 80, 0.3)",

      },
      {
        id: "mza3-lote3",
        shape: "poly",
        scaledCoords:  [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [362,410,362,463,430,463,430,410],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      {
        id: "mza3-lote4",
        shape: "poly",
        scaledCoords:  [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [362,515,362,463,430,463,430,515],
        preFillColor: "rgba(76, 175, 80, 0.3)",

      },
      {
        id: "mza3-lote9",
        shape: "poly",
        scaledCoords:  [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [295,410,295,463,360,463,360,410],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      {
        id: "mza3-lote10",
        shape: "poly",
        scaledCoords:  [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [295,360,295,410,362,410,362,300],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      {
        id: "mza3-lote1",
        shape: "poly",
        scaledCoords:  [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [362,300,362,355,430,355,430,240],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      {
        id: "mza3-lote8B",
        shape: "poly",

        scaledCoords:  [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [297,490,297,463,362,463,362,490],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      {
        id: "mza3-lote8A",
        shape: "poly",
        scaledCoords:  [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [297,515,297,490,362,490,362,515],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      {
        id: "mza3-lote5",
        shape: "poly",
        scaledCoords:  [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [380,595,380,516,430,516,430,595],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      {
        id: "mza3-lote6",
        shape: "poly",
        scaledCoords:  [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [380,595,380,516,348,516,348,595],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      {
        id: "mza3-lote7",
        shape: "poly",
        scaledCoords:  [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [295,595,295,516,348,516,348,595],
        preFillColor: "rgba(76, 175, 80, 0.3)",
      },
      // 🍎 5
   
      {
        id: "mza5-lote2B",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [348, 158, 348, 105, 315, 105, 315, 158],
        preFillColor: "rgba(90, 11, 80, 0.3)",
      },
      {
        id: "mza5-lote1A",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [380, 158, 380, 105, 345, 105, 345, 158],
        preFillColor: "rgba(90, 11, 80, 0.3)",
      },
      {
        id: "mza5-lote1B",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [430, 135, 430, 105, 380, 105, 380, 160],
        preFillColor: "rgba(90, 11, 80, 0.3)",
      },
      {
        id: "mza5-lote2A",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [390, 158, 375, 155, 280, 155, 280, 250],
        preFillColor: "rgba(90, 11, 80, 0.3)",
      },
      //manzana 7
      {
        id: "mza7-lote11",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 95, 598, 195, 462, 195, 462, 195],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza7-lote10A",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [530, 238, 530, 195, 462, 195, 462, 238],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza7-lote10B1",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 222, 598, 195, 530, 195, 530, 222],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza7-lote10B2",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 238, 598, 222, 530, 222, 530, 238],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza7-lote9A",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [530, 276, 530, 237, 462, 237, 462, 276],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza7-lote9B",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 276, 598, 237, 530, 237, 530, 276],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza7-lote8A",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [530, 278, 530, 317, 462, 317, 462, 278],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza7-lote8B",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 278, 598, 317, 530, 317, 530, 278],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza7-lote7",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 357, 598, 317, 462, 317, 462, 357],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza7-lote6",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 357, 598, 395, 462, 395, 462, 357],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza7-lote5A",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [530, 396, 530, 436, 462, 436, 462, 396],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza7-lote5B",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 396, 598, 436, 530, 436, 530, 396],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza7-lote4A",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [530, 475, 530, 436, 462, 436, 462, 475],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza7-lote4B1",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 462, 598, 436, 530, 436, 530, 462],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza7-lote4B2",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 462, 598, 475, 530, 475, 530, 462],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza7-lote3A",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [530, 475, 530, 515, 462, 515, 462, 475],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza7-lote3B",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 475, 598, 515, 530, 515, 530, 475],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza7-lote2A",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [530, 556, 530, 515, 462, 515, 462, 556],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza7-lote2B",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 556, 598, 515, 530, 515, 530, 556],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },

      {
        id: "mza7-lote1",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 596, 598, 556, 462, 556, 462, 596],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      //manzana 6
      {
        id: "mza6-lote8A",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [530, 675, 530, 620, 462, 620, 462, 675],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza6-lote8B",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 675, 598, 620, 530, 620, 530, 675],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza6-lote7A",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [530, 675, 530, 715, 462, 715, 462, 675],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza6-lote7B",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 675, 598, 715, 530, 715, 530, 675],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza6-lote6A",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [530, 755, 530, 715, 462, 715, 462, 755],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza6-lote6B1",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 740, 598, 715, 530, 715, 530, 740],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza6-lote6B2",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 755, 598, 740, 530, 740, 530, 755],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza6-lote5A",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [530, 755, 530, 793, 462, 793, 462, 755],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza6-lote5B",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 755, 598, 793, 530, 793, 530, 755],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza6-lote4",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 835, 598, 793, 465, 793, 465, 835],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza6-lote3",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 835, 598, 875, 465, 875, 465, 835],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza6-lote2A",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [530, 875, 530, 915, 462, 915, 462, 875],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza6-lote2B",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 875, 598, 915, 530, 915, 530, 875],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza6-lote1A",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [530, 915, 530, 980, 462, 980, 462, 915],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
      {
        id: "mza6-lote1B",
        shape: "poly",
        scaledCoords: [50, 50, 150, 50, 150, 100, 50, 100],
        coords: [598, 915, 598, 980, 530, 980, 530, 915],
        preFillColor: "rgba(7, 11, 80, 0.3)",
      },
    ],

  };

  const handleLoteClick = (area: CustomArea) => {
    setSelectedLote(area);
  };

  return (

    <div className="w-screen">
      <div className="w-full flex justify-center">
        <ImageMapper 
          src={imgLotes}
          map={MAP}
          width={1000}
          imgWidth={1000}
          onClick={(area) => handleLoteClick(area)} 
        />
      </div>
    </div>

  );
};

export default LotesMapper;

