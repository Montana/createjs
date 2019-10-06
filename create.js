import React from 'react';

// simple method that parses a ThreeJS material into a component (to be extended with other types of material, what I like to call a swap) 

export default function createMaterial(material){
  let m;
  switch(material.type){
    case 'MeshBasicMaterial':
      m = (
        <meshBasicMaterial
          color={material.color}
        />
      );
      break;
    case 'MeshLambertMaterial':
      m = (
        <meshLambertMaterial
          transparent={material.transparent}
          alphaTest={material.alphaTest}
          side={material.side}
          opacity={material.opacity}
          visible={material.visible}
          color={material.color}
          emissive={material.emissive}
          wireframe={material.wireframe}
          wireframeLinewidth={material.wireframeLinewidth}
        />
      );
      break;
    default:
      m = null;
  }

  return m;
}
