import './_popularProduct.scss';
import DB from './../../DB/DB.json'

function PopularProduct() {

  const img1 = DB.popular[0].url;
  const img2 = DB.popular[1].url;
  const img3 = DB.popular[2].url;

  return (
    <>
      <div className="popularProduct">
        <div className="popularProduct_contener">
          <div className="popular_contner_text">
            <p className="popular_text">
              Популярные товары
            </p>
          </div>

          <div className="store_contener">
            <div className="block_all">

              <div className="block_1 block">
                <div className="imgBlock">
                  <div className='imgPrice'>
                    <p>Осталось 3 шт.</p>
                    <p>Скидка 10%</p>
                  </div>
                  <img src={img1} alt="img-1 " />
                </div>
                <div className="title">
                  <p>{DB.popular[0].title}</p>
                  <span>{DB.popular[0].price}</span>
                </div>
                <div className="basket">
                  <button >В корзину</button>
                </div>
              </div>

              <div className="block_2 block">
                <div className="imgBlock">
                  <div className='imgPrice'>
                    <p>Бесплатная доставка</p>
                  </div>
                  <img src={img2} alt="img-2 " />
                </div>
                <div className="title">
                  <p>{DB.popular[1].title}</p>
                  <span>{DB.popular[1].price}</span>
                </div>
                <div className="basket">
                  <button >В корзину</button>
                </div>
                <div className="title"></div>
                <div className="basket"></div>
              </div>

              <div className="block_3 block">
                <div className="imgBlock">
                  <div className='imgPrice'>
                    <p>Скидка 10%</p>
                  </div>
                  <img src={img3} alt="img-3 " />
                </div>
                <div className="title">
                  <p>{DB.popular[2].title}</p>
                  <span>{DB.popular[2].price}</span>
                </div>
                <div className="basket">
                  <button>В корзину</button>
                </div>
                <div className="title"></div>
                <div className="basket"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularProduct;
