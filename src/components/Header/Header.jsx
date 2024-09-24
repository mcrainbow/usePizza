import CartIcon from "../icons/CartIcon";
import { motion } from "framer-motion";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 pt-4 px-4 z-10 lg:px-40">
      <div className="grid grid-cols-[1fr,2fr,1fr] items-center border-b-2 pb-4 text-center w-full">
        <HeaderNav className="hidden lg:flex" />
        <div className="lg:hidden">Menu</div>
        <motion.h2
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          className=" text-3xl font-bold text-white cursor-pointer"
        >
          usePizza
        </motion.h2>
        <CartIcon className="justify-self-end" />
      </div>
    </header>
  );
}
