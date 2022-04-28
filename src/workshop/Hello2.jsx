import { useState } from "react";

const Hello2 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  return (
    <div>
  	<Name name ={name} onNameChange={event=> setName(event.target.value)}></Name>
    <Age age ={age} onAgeChange={event=> setAge(event.target.value)}></Age>
   	<Show name ={name} age={age}></Show>
    </div>
  )
}

const Name = ({name,onNameChange}) => {
  return (
    <div>
      <form>
		Name : <input type="text" value={name} onChange={onNameChange} />
	  </form>
    </div>
  )
}

const Age = ({age,onAgeChange}) => {
  return (
    <div>
      <form>
		Age : <input type="number" value={age}  onChange={onAgeChange} />
	  </form>
    </div>
  )
}

const Show = ({name,age}) => {
  return (
    <div>
      Hi,{name}   with age = {age}
    </div>
  )
}

export default Hello2