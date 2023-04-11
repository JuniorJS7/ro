import './_workExamples.scss';
import Polygon1 from '../../Images/workExampleImg/Polygon 1.png'
import Polygon2 from '../../Images/workExampleImg/Polygon 2.png'
import Rectangle10 from '../../Images/workExampleImg/Rectangle 10.png'
import Rectangle11 from '../../Images/workExampleImg/Rectangle 11.png'
import Rectangle12 from '../../Images/workExampleImg/Rectangle 12.png'

function WorkExamples() {
  return (
    <>
      <div className="workExamples">
        <h1>Примеры наших работ:</h1>
        <div className='workExamplesBtn'>
          <img src = {Polygon1} className='polygon1' height="15"/>
          <div className='workExampleImg'>
          <img src = {Rectangle10} className='rectangle10' height="300"/>
          <img src = {Rectangle11} className='rectangle11' height="300"/>
          <img src = {Rectangle12} className='rectangle12' height="300"/>
          </div>
          <img src = {Polygon2} className='polygon2' height="15"/>
        </div>
      </div>
    </>
  );
}

export default WorkExamples;
