import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";


function FloorPlan(props) {
  console.log(props);
  return (
    <div className='floor-plan-div'>
      <h1>Floor Plan</h1>
      <LivingRoom/>
      <Bedroom bedNum={1}/>
      <Bath size={"Full Bath"}/>
      <Kitchen/>
      <Bedroom bedNum={2}/>
      <Bath size={"Half Bath"}/>
      <Bedroom bedNum={3}/>
    </div>
  )
}
export default FloorPlan