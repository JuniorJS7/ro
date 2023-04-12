import './_productList.scss';
import form from '../../Images/form.png';
import Card from '../ProductList/_Card';

function ProductList() {
   const data = [
      {
         id: 1,
         subtitle: 'Верх',
         text: 'Футболки, майки',
         image: '/shirt.png',
      },
      {
         id: 2,
         subtitle: 'Низ',
         text: 'Велосипедки, леггинсы',
         image: '/short.png',
      },
      {
         id: 3,
         subtitle: 'Обувь',
         text: 'Штангетки',
         image: '/shoes.png',
      },
      {
         id: 4,
         subtitle: 'Инвентарь',
         text: 'Магнезия для гиревого спорта',
         image: '/magnum.png',
      },

      {
         id: 5,
         subtitle: 'Экипировка',
         text: ' Ремни для гиревого спорта и тяжелоатлетические',
         image: '/belt.png',
      },
      {
         id: 6,
         subtitle: 'Маски',
         text: ' Медицинские с готовым и индивидуальным дизайном',
         image: '/mask.png',
      },
   ];

   return (
      <>
         <div className='productList'>
            <div className='productList__container'>
               <h2 className='productList__title'>Что вы ищите?</h2>
               <div className='productList__list'>
                  {data.map((item) => {
                     return <Card group={item} key={item.id} />;
                  })}
               </div>
            </div>
            <div className='productList__block'>
               <div className='productList__content'>
                  <div className='productList__box'>
                     <h3 className='productList__descr'>
                        Командная форма на заказ
                     </h3>
                     <p className='productList__subtext'>
                        Разрабатываем дизайн и шьём на заказ футбольную,
                        волейбольную, гиревую форму, а также тяжелоатлетические
                        костюмы и гимнастические купальники.
                     </p>
                     <ul className='productList__ul'>
                        <li>Нанесения логотипа</li>
                        <li>Печать номера и фамилии</li>
                        <li>Разработка дизайна формы</li>
                     </ul>
                     <button className='productList__link' href='##'>
                        Узнать подробнее
                     </button>
                  </div>
                  <div className='productList__box'>
                     <img src={form} alt='form' />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default ProductList;
