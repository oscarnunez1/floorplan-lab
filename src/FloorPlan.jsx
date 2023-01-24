import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";


function FloorPlan(props) {
  console.log(props);
  return (
    <div className='floor-plan-div'>
      <LivingRoom />
      <Bedroom bedNum={1} className="bedroom-one"/>
      <Bath size={"Full"}/>
      <Kitchen />
      <Bedroom bedNum={2} className="bedroom-two"/>
      <Bath size={"Half"}/>
      <Bedroom bedNum={3} className="bedroom-three"/>
    </div>
  )
}
export default FloorPlan