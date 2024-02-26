import React from "react";
import { motion } from "framer-motion";
import "./CardComponent.scss";
import { cardData } from "../../shared/data/cardData";

interface CardProps {
  group: string;
}

const CardComponent: React.FC<CardProps> = ({ group }) => {
  return (
    <motion.div>
      <h1>{group}</h1>
      {cardData
        .filter((data) => data.group === group)
        .map((data) => (
          <div key={data.label}>
            <label>
              <p>{data.label}</p>
            </label>
          </div>
        ))}
    </motion.div>
  );
};

export default CardComponent;
