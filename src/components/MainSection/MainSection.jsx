import { useState, useEffect } from "react";
import bgImage1 from "../../assets/bg-main-1.jpg";
import bgImage2 from "../../assets/bg-main-2.jpg";
import bgImage3 from "../../assets/bg-main-3.jpg";
import { motion } from "framer-motion";

const images = [bgImage1, bgImage2, bgImage3];

export default function MainSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevState) => (prevState + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="flex items-center justify-center h-screen w-full bg-cover bg-center transition-all duration-1000 overflow-hidden relative"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="flex justify-center items-center h-screen  relative z-9 xl:w-[800px]">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            style={{ marginBottom: 20 }}
          >
            <h2
              className="text-3xl font-bold mb-4  xl:text-6xl"
              style={{ lineHeight: 1.2 }}
            >
              Самая настоящая итальянская пицца
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            style={{ marginBottom: 20 }}
          >
            <p className="text-lg font-light">
              Москва, Пушкина ул., 52, стр. 2
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2 }}
          >
            <motion.button
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="#CFCFEA"
              >
                <path
                  d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                  fill="#CFCFEA"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
