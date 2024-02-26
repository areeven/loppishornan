import "../assets/scss/ShopPage.scss";
import { motion } from "framer-motion";
import React from "react";
import CardComponent from "../components/card/CardComponent";

const ShopPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h1>Shop</h1>
      <CardComponent group="card" />
    </motion.div>
  );
};

export default ShopPage;
