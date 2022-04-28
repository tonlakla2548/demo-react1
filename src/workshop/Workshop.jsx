import Hello from "./Hello"
import Hello2 from "./Hello2";
import Users from "./Users";

const Workshop = () => {

  const callback = (message) => {
	console.log("Callback with " + message);
  }

  return (
    <div>
      <h2>Workshop component</h2>
      <Users/>
    </div>
  )
}

export default Workshop