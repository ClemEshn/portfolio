import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./fallingLeaves.scss";

const leaves = [
  "/leaf/leaf1.svg",
  "/leaf/leaf2.svg",
  "/leaf/leaf3.svg",
  "/leaf/leaf4.svg",
  "/leaf/leaf1.svg",
  "/leaf/leaf2.svg",
  "/leaf/leaf3.svg",
  "/leaf/leaf4.svg",
  "/leaf/leaf1.svg",
  "/leaf/leaf2.svg",
  "/leaf/leaf3.svg",
  "/leaf/leaf4.svg",
  "/leaf/leaf1.svg",
  "/leaf/leaf2.svg",
  "/leaf/leaf3.svg",
  "/leaf/leaf4.svg",
  "/leaf/apple.svg",
  "/leaf/dollar.svg",

];

const generateRandomMoves = (nb: number) => {
  return nb + Math.random() * 10; // Adjusts movement slightly
};

type Position = {
  x: number;
  y: number;
  rotate: number;
};

export default function FallingLeaves() {
  const [leafPositions, setLeafPositions] = useState<Position[]>([]);

  useEffect(() => {
    const positions = Array.from({ length: 5 }).map(() => ({
      x: window.innerWidth - Math.random() * 200,
      y: -100,
      rotate: Math.random() * 360,
    }));
    setLeafPositions(positions);
  }, []);

  return (
    <div className="falling-leaves">
      {leafPositions.map((position, index) => (
        <motion.img
          key={index}
          className="leaf"
          src={leaves[Math.floor(Math.random() * leaves.length)]}
          alt="a"
          initial={{ x: position.x, y: position.y, rotate: position.rotate }}
          animate={{
            y: "100vh",
            x: [generateRandomMoves(position.x), generateRandomMoves(position.x - 50), generateRandomMoves(position.x + 50), generateRandomMoves(position.x - 30), generateRandomMoves(position.x)],
            rotate: [position.rotate, position.rotate + 20, position.rotate - 20, position.rotate],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
