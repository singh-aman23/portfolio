'use client';
import { useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect;

    if (!vantaEffect) {
      vantaEffect = FOG({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0x00ff00, 
        midtoneColor: 0x007700,    
        lowlightColor: 0x003300,   
        baseColor: 0x000000,       
        blurFactor: 0.6,           
        speed: 0.9,                
        zoom: 1.1,    
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} style={{ height: "100vh", width: "100vw", position: "fixed", top: 0, left: 0, zIndex: -1 }} />;
};

export default VantaBackground;
