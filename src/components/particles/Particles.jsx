import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; 

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: { value: "#000" },
        opacity: 1
      },
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true, mode: "connect" },
          resize: { enable: true }
        },
        modes: {
          repulse: { distance: 120, duration: 70 }
        }
      },
      particles: {
        number: {
          value: 700,
          density: {
            enable: true,
            width: 1920,
            height: 1080
          }
        },
        color: { value: "#fff" },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.1, max: 1 },
          animation: {
            enable: true,
            speed: 0.25
          }
        },
        size: { value: 1 },
        move: {
          enable: true,
          speed: 0.5,
          direction: "top",  
          straight: true,    
          outModes: { default: "out" } 
        }
      },
      links: {
        enable: true,            
        distance: 1500,           
        opacity: 0.2,           
        width: 0.5,             
        color: "#ffffff"        
      },
      detectRetina: true
    }),
    []
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} className="common-particles-background"/>; 
};

export default ParticlesComponent;