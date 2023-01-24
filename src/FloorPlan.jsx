import './App.css'

function FloorPlan(props) {
  console.log(props);
  return (
    <div className='floorPlanContainer'>
      <h1>Floor Plan</h1>
      <LivingRoom/>
      <Kitchen/>
      <Bedroom bed/>
      <Bath/>
      <Bedroom/>
      <Bath/>
      <Bedroom/>
    </div>
  )
}
export default FloorPlan