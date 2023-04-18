import "./_home.scss";
import Footer from "../../components/Footer/Footer.js";
import Header from "../../components/Header/Header";
import LearnMore from "../../components/LearnMore/LearnMore";
import OurAdvantage from "../../components/OurAdvantage/OurAdvantage";
import PopularProduct from "../../components/PopularProduct/PopularProduct";
import ProductList from "../../components/ProductList/ProductList";
import Quesitions from "../../components/Quesitions/Quesitions";
import Slide from "../../components/Slide/Slide";
import SuitableProduct from "../../components/SuitableProduct/SuitableProduct";
import WorkExamples from "../../components/WorkExamples/WorkExamples";

function Home() {
  const titles = [
    {
      label: "Высокое качество",
      description: (
        <>Каждое изделие кроится, отшивается и проверяется вручную.</>
      ),
      id: 1,
    },
    {
      label: "Гарантию",
      description: (
        <>
          Мы гарантируем, что наши изделия выдержат
          <span className="span"> 50 стирок* </span>и не потеряет цвет и форму.
        </>
      ),
      id: 2,
    },
    {
      label: "Точность размера",
      description: (
        <>
          Размеры соотвествуют размерной сетке, т.к.
          <span className="span"> отшиваются по собственным лекалам. </span>
        </>
      ),
      id: 3,
    },
    {
      label: "Помощь дизайнера",
      description: (
        <>Помощь в разработке дизайна, доработка существующего макета.</>
      ),

      id: 4,
    },
    {
      label: "Быстрая доставка",
      description: (
        <>Доставляем по всему миру, отправка вашего заказа в течение 1 дня.</>
      ),

      id: 5,
    },
    {
      label: "Сервис",
      description: <>Лёгкий процесс оплаты, обмена и возврата заказа.</>,
      id: 6,
    },
  ];
  return (
    <>
      <div className="home">
        <Header />
        <Slide />
        <ProductList />
        <LearnMore />
        <PopularProduct />
        <SuitableProduct />
        <WorkExamples />
        <OurAdvantage titles={titles} />
        <Quesitions />
        <Footer />
      </div>
    </>
  );
}

export default Home;
