import "tailwindcss/tailwind.css";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import bgImage1 from "./assets/bg-main-1.jpg";

const App = () => {
  return (
    <div className="text-text-primary relative">
      <Header />
      <main>
        <MainSection />
        <section className="bg-text-primary h-screen text-black">
          <ul className="grid items-center h-full">
            <li className="flex flex-col items-center gap-y-2">
              <span className="text-3xl">
                <strong>2</strong>
              </span>
              <hr className="w-1/2 h-px my-1 bg-black border-0" />
              <span className="text-3xl">Зала</span>
            </li>
            <li className="flex flex-col items-center gap-y-2">
              <span className="text-3xl">
                <strong>60+</strong>
              </span>
              <hr className="w-1/2 h-px my-1 bg-black border-0" />
              <span className="text-3xl">Отзывов</span>
            </li>
            <li className="flex flex-col items-center gap-y-2">
              <span className="text-3xl">
                <strong>1973</strong>
              </span>
              <hr className="w-1/2 h-px my-1 bg-black border-0" />
              <span className="text-3xl">Год основания</span>
            </li>
          </ul>
        </section>
        <section
          className="flex items-center justify-center w-full bg-cover bg-center overflow-hidden relative px-4 py-4 text-text-primary"
          style={{ backgroundImage: `url(${bgImage1})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <p className="z-10">
            Полтора десятка видов пиццы по самым низким ценам в стране и одна из
            лучших коллекций пиццы в мире. Ассорти от классических маргариты и
            болоньезе до необычных комбинаций с трюфельным маслом и
            морепродуктами. Изящные и остроумные подачи, которые восхитят даже
            самых требовательных гурманов. Редкие деликатесы, такие как артишоки
            и пармская ветчина, а также домашних ингредиенты от свежих овощей до
            уникальных сыров. Каждая пицца — это гастрономическое путешествие по
            Италии и за её пределы, предлагающее наслаждение для каждого вкуса и
            настроения.
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;
