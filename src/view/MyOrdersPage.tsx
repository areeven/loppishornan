import "../assets/scss/MyOrdersPage.scss";
import { motion } from "framer-motion";
import React from "react";

const MyOrdersPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h1>My Orders</h1>
    </motion.div>
  );
};

export default MyOrdersPage;
