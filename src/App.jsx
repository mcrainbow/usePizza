import { useState, useEffect } from "react";
import bgImage1 from "./assets/bg-main-1.jpg";
import bgImage2 from "./assets/bg-main-2.jpg";
import bgImage3 from "./assets/bg-main-3.jpg";
import "tailwindcss/tailwind.css";
import Header from "./components/Header/Header";

const images = [bgImage1, bgImage2, bgImage3];

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevState) => (prevState + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen overflow-hidden text-text-primary relative">
      <Header />
      <main className="">
        <section
          className="flex items-center justify-center h-screen w-full bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="flex justify-center items-center h-screen  relative z-9 xl:w-[800px]">
            <div className="text-center">
              <h2
                className="text-3xl font-bold mb-4  xl:text-6xl"
                style={{ lineHeight: 1.2 }}
              >
                Самая настоящая итальянская пицца
              </h2>
              <p className="text-lg font-light">
                Москва, Пушкина ул., 52, стр. 2
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
