import "./_ourAdvantage.scss";
import CardDetails from "./CardDetails/CardDetails";
function OurAdvantage({ titles }) {
  return (
    <>
      <div className="ourAdvantage">Что вы получаете выбирая нас:</div>
      <div className="main">
        {titles.map((title) => {
          return <CardDetails key={title.id} title={title} />;
        })}
      </div>
    </>
  );
}

export default OurAdvantage;
