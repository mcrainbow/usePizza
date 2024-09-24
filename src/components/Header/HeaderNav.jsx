import { motion } from "framer-motion";

export default function HeaderNav({ className }) {
  return (
    <ul className={`${className} gap-x-16 justify-self-start text-lg`}>
      <motion.li
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        className="hover:text-text-secondary transition-all duration-[400]"
      >
        <a href="#">Главная</a>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        className="hover:text-text-secondary transition-all duration-[400]"
      >
        <a href="#">Меню</a>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        className="hover:text-text-secondary transition-all duration-[400]"
      >
        <a href="#">Контакты</a>
      </motion.li>
    </ul>
  );
}
