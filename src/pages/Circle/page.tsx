import '../../styles/styles.css'
import { motion } from "framer-motion";

export default function Circle() {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />
  );
}








