import "./_quesitions.scss";

function Quesitions() {
  return (
    <>
      <div className="quesitions">
        <div className="container">
          <div className="otherQuestions">
            <h2>Остались вопросы?</h2>
            <p>Заполните форму и менеджер свяжется с вами в ближайшее время.</p>
            <div className="buttons">
              <button type="submit">Задать вопрос</button>
              <button type="submit">Заказать звонок</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quesitions;
