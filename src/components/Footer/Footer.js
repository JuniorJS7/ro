import './_footer.scss';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className = "Footer1" style={{display: "flex"}}>
          <ul>
            <li><a href="#">Оплата</a></li>
            <li><a href="#">Возврат</a></li>
            <li><a href="#">Доставка</a></li>
            <li><a href="#">Вопросы</a></li>
          </ul>
          <ul>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Отзывы</a></li>
            <li><a href="#">Оптовый отдел</a></li>
          </ul>
          <ul>
            <li><a href="#">Каталог</a></li>
            <li><a href="#">Размерная сетка</a></li>
            <li><a href="#">Комнадная форма</a></li>
            <li><a href="#">Создание дизайна формы </a></li>
          </ul>

          <ul>
            <li><a href="#">8(499)300-49-49</a></li>
            <li><a href="#">info@markov-team.ru</a></li>
            <li><a href="#"> Facebook </a>
            <a href="#"> Twitter </a>
            <a href="#"> Instagram </a>
            <a href="#"> Pinterest </a>
         </li>
          </ul>
          
        </div>

        <div className = "Footer2"> 
        <div>    
        <a href="#"> Футбольная форма </a>
        <a href="#"> Волейбольная форма </a>
        <a href="#"> Гимнастический купальник </a>
        <a href="#"> Гиревая форма </a>
        <a href="#"> Тяжелоатлетический костюм </a>
        </div>
        <div>
        <a href="#"> Майки </a>
        <a href="#"> Футболки </a>
        <a href="#"> Леггинсы </a>
        <a href="#"> Велосипедки </a>
        <a href="#"> Маски </a>
        <a href="#"> Ремни </a>
        <a href="#"> Штангетки </a>
        <a href="#"> Магнезия </a>
        </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
