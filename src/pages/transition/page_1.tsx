// whileHover鼠标悬停时的动画效果

import "./style.css";
import { motion } from "framer-motion";

export default function Transition_1() {
  return (
    <motion.div
      className="box_transiton"
      /**
       * Setting the initial keyframe to "null" will use
       * the current value to allow for interruptable keyframes.
       */
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
    />
  );
}
