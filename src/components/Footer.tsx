import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const date = new Date();
  return (
    <footer className="bg-[#0F2027] text-white py-8">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="flex items-center justify-center space-x-2 text-gray-300">
            <span>
              © {date.getFullYear()}{" "}
              <span className="text-[#1C92D2]">Hariharan.</span> All rights
              reserved.
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
