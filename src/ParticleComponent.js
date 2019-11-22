import React from "react";
import Particles from "react-particles-js";

export default ({ people }) => {
  if(people.length === 0) return null;

  const images = people.map((person) => ({src: person.image, width: 100, height: 100}))
  console.log(images)

  return (
    <div
    style={{
      width: "100%",
      height: "100%"
    }}
    >
    <Particles
      params={{
        particles: {
          number: {
            value: images.length,
            density: {
              enable: false,
              value_area: 1803.4120608655228
            }
          },
          shape: {
            images: images,
            type: "images",
            stroke: {
              width: 2,
              color: "#000000"
            },
            polygon: {
              nb_sides: 4
            } 
          },
          opacity: {
            value: 0.4008530152163807,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 100,
            random: false,
            anim: {
              enable: false,
              speed: 40,
              size_min: 150,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 0,
            color: "#ffffff",
            opacity: 0.7,
            width: 0.6413648243462091
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "bubble"
            },
            onclick: {
              enable: false,
              mode: "repulse"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 80,
              size: 200,
              duration: 1.8,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
      />
  </div>
);

}