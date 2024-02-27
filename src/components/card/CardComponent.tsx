import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { cardData } from "../../shared/data/cardData";
import "./CardComponent.scss";

interface CardProps {
  group: string;
}

const CardComponent: React.FC<CardProps> = ({ group }) => {
  const [open, setOpen] = useState<boolean>(false);
  function handleOpen() {
    setOpen(!open);
  }

  return (
    <motion.div>
      <div className="card-container">
        {cardData
          .filter((data) => data.group === group)
          .map((data) => (
            <div className="card-box" onClick={handleOpen} key={data.label}>
              <p>{data.label}</p>
              <img
                className="shop-image"
                src={data.image}
                alt={data.label}
                width="200px"
              />
              <p>{data.price}</p>
            </div>
          ))}
        <div
          className={open ? "open-window" : "closed-window"}
          onClick={handleOpen}
        >
          <div className="close-button" onClick={handleOpen}>
            <MdClose />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardComponent;
