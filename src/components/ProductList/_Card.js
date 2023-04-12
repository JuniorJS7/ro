

function Card(props) {
   console.log(props.group.image);

   return (
      <>
         <div className='productList__item'>
            <span className='productList__subtitle'>
               {props.group.subtitle}
            </span>
            <p className='productList__text'>{props.group.text}</p>
            <div className='productList__img'>
               <img src={props.group.image} alt='' />
            </div>
         </div>
      </>
   );
}

export default Card;
