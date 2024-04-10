import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too

export const ParticlesComponent = (props) => {

  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 120,
      "interactivity": {
        "detectsOn": "window",
        "events": {
          "onClick": {
            "enable": true,
            "mode": []
          },
          "onDiv": {
            "selectors": [],
            "enable": false,
            "mode": [],
            "type": "circle"
          },
          "onHover": {
            "enable": true,
            "mode": "repulse",
            "parallax": {
              "enable": false,
              "force": 2,
              "smooth": 10
            }
          },
          "resize": {
            "delay": 0.5,
            "enable": true
          }
        },
        "modes": {
          "trail": {
            "delay": 0.005,
            "pauseOnStop": true,
            "quantity": 5,
            "particles": {
              "color": {
                "value": "#ff0000",
                "animation": {
                  "enable": true,
                  "speed": 400,
                  "sync": true
                }
              },
              "collisions": {
                "enable": false
              },
              "links": {
                "enable": false
              },
              "move": {
                "outModes": {
                  "default": "destroy"
                },
                "speed": 2
              },
              "size": {
                "value": 5,
                "animation": {
                  "enable": true,
                  "speed": 5,
                  "minimumValue": 1,
                  "sync": true,
                  "startValue": "min",
                  "destroy": "max"
                }
              }
            }
          },
          "attract": {
            "distance": 200,
            "duration": 0.4,
            "easing": "ease-out-quad",
            "factor": 2,
            "maxSpeed": 50,
            "speed": 1
          },
          "bounce": {
            "distance": 200
          },
          "bubble": {
            "distance": 200,
            "duration": 0.4,
            "mix": false,
            "divs": {
              "distance": 200,
              "duration": 0.4,
              "mix": false,
              "selectors": []
            }
          },
          "connect": {
            "distance": 80,
            "links": {
              "opacity": 0.5
            },
            "radius": 60
          },
          "grab": {
            "distance": 100,
            "links": {
              "blink": false,
              "consent": false,
              "opacity": 1
            }
          },
          "push": {
            "default": true,
            "groups": [],
            "quantity": 4
          },
          "remove": {
            "quantity": 2
          },
          "repulse": {
            "distance": 100,
            "duration": 0.4,
            "factor": 100,
            "speed": 0.1,
            "maxSpeed": 50,
            "easing": "ease-out-quad",
            "divs": {
              "distance": 200,
              "duration": 0.4,
              "factor": 100,
              "speed": 1,
              "maxSpeed": 50,
              "easing": "ease-out-quad",
              "selectors": []
            }
          },
          "slow": {
            "factor": 3,
            "radius": 200
          },
          "light": {
            "area": {
              "gradient": {
                "start": {
                  "value": "#ffffff"
                },
                "stop": {
                  "value": "#000000"
                }
              },
              "radius": 1000
            },
            "shadow": {
              "color": {
                "value": "#000000"
              },
              "length": 2000
            }
          }
        }
      },
      particles: {
        color: {
          value: "#ff0000",
        },
        links: {
          color: "#FFFFFF",
          distance: 200,
          enable: true,
          opacity: 1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );


  return <Particles id={props.id} init={particlesLoaded} options={options} />; 
};
