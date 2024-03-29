import "../assets/scss/OrderPage.scss";
import { motion } from "framer-motion";
import React from "react";

const OrderPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h1>Signup</h1>
    </motion.div>
  );
};

export default OrderPage;
