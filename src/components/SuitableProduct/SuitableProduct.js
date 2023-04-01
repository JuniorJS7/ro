import './_suitableProduct.scss';
import Image8 from '../../Images/image-8.png'
import Image17 from '../../Images/image-17.png'

function SuitableProduct() {
  return (
    <>
      <div className="suitableProduct">
        <div className='suitableProductImg'>
          <img className='image8' src={Image8} alt="Trees" height="200" />
          <img className='image17' src={Image17} alt="Trees" height="200" />
        </div>
        <div className='suitableProductText'>
          <h2>Не нашли подходяший товар?<br />
            Создайте его сами.</h2>
          <p>Воспользуйтесь нашим онлайн-конструктором одежды<br />
            и создайте товар на свой вкус.<br />
            Вы можете добавить фото, текст или пинт.<br/>
            Ф мы реализуем вашу идею и напечатаем дизайн на одежде.
          </p>
          <button>Создать в конструкторе</button>
        </div>
      </div>
    </>
  );
}

export default SuitableProduct;
