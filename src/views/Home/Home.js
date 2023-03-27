import './_home.scss';
import Footer from '../../components/Footer/Footer.js';
import Header from '../../components/Header/Header';
import LearnMore from '../../components/LearnMore/LearnMore';
import OurAdvantage from '../../components/OurAdvantage/OurAdvantage';
import PopularProduct from '../../components/PopularProduct/PopularProduct';
import ProductList from '../../components/ProductList/ProductList';
import Quesitions from '../../components/Quesitions/Quesitions';
import Slide from '../../components/Slide/Slide';
import SuitableProduct from '../../components/SuitableProduct/SuitableProduct';
import WorkExamples from '../../components/WorkExamples/WorkExamples';

function Home() {
  return (
    <>
      <div className="home">
        <Header/>
        <Slide/>
        <ProductList/>
        <LearnMore/>
        <PopularProduct/>
        <SuitableProduct/>
        <WorkExamples/>
        <OurAdvantage/>
        <Quesitions/>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
