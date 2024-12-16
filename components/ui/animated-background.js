import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(`getRandomInt(${min}, ${max}) = ${randomInt}`);
  return randomInt;
};

const getRandomShape = () => {
  const shapes = [
    'circle',
    'square',
    'polygon', // Add more complex shapes (adjust animation properties for each shape)
  ];
  const randomShape = shapes[getRandomInt(0, shapes.length - 1)];
  console.log(`===== getRandomShape() = ${randomShape}`);
  return randomShape;
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[getRandomInt(0, 15)];
  }
  const opacity = getRandomInt(10, 20) / 100; // More opaque colors
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const getRandomAnimationOptions = (shape) => {
  const baseOptions = {
    x: getRandomInt(0, window.innerWidth - 100),
    y: getRandomInt(0, window.innerHeight - 100),
    opacity: getRandomInt(1, 2) / 1000, // Subtle opacity range
    scale: getRandomInt(2, 20) / 100, // Subtle scale range
    rotate: getRandomInt(-45, 45), // Subtle rotation range
    duration: getRandomInt(10, 50), // Longer duration for smoother animation
  };

  // Customize animation properties for specific shapes (optional)
  switch (shape) {
    case 'polygon':
      baseOptions.sides = getRandomInt(3, 8); // Set number of sides for polygons
      break;
    default:
      break;
  }

  return baseOptions;
};

export function AnimatedBackground() {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const initialShapes = [];
    for (let i = 0; i < 20; i++) { // Adjust number of shapes as desired
      const shapeType = getRandomShape();
      const newShape = {
        shape: shapeType,
        color: getRandomColor(),
        ...getRandomAnimationOptions(shapeType),
      };
      initialShapes.push(newShape);
    }
    setShapes(initialShapes);
  }, []);

  return (
    <div className="animated-background">
      <style>
        {`
          .shape {
            position: absolute;
            width: 50px;
            height: 50px;
          }
          .shape.circle {
            border-radius: 50%;
          }
          .shape.square {
            /* No additional styles needed for square */
          }
          .shape.triangle {
            width: 0;
            height: 0;
            border-left: 25px solid transparent;
            border-right: 25px solid transparent;
            border-bottom: 50px solid currentColor;
          }
          .shape.polygon {
            clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
          }
        `}
      </style>
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`shape ${shape.shape}`}
          style={{
            backgroundColor: shape.color,
            width: '50px', // Set a default width
            height: '50px', // Set a default height
            position: 'absolute', 
            left: `${shape.x}px`,
            top: `${shape.y}px`,
            transform: `scale(${shape.scale}) rotate(${shape.rotate}deg)`,
          }}
          animate={{
            x: getRandomInt(0, window.innerWidth - 100),
            y: getRandomInt(0, window.innerHeight - 100),
            opacity: getRandomInt(30, 50) / 100,
            scale: getRandomInt(80, 120) / 100,
            rotate: getRandomInt(-45, 45),
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse', // Reverse animation for smoother looping
            ease: 'easeInOut', // Adjust easing as needed
            duration: shape.duration,
          }}
        />
      ))}
    </div>
  );
}