import { useState } from "react"
const PropsExample = ({ name, age }) => {
    let [count, setCount] = useState(0)
    let [fullName, setFullName] = useState("");
    console.log("name: ", name, "age: ", age)
    let handleIncrement = (event) => {
        setCount(count + 1)
        console.log(count)
        console.log(event.target.className)
    }
    let handlefullNameChange = (e) => {
        console.log(e.target.value)
        setFullName(e.target.value)
    }
    return (
        <div>
            <h1>{name}</h1>
            <p>age: {age}</p>
            <b>count: {count}</b>
            <button onClick={() => {
                setCount(count + 1)
                console.log(count)
            }}>increment</button>
            <input type="text" placeholder="Enter your full Name" onChange={handlefullNameChange} value={fullName} />
            <br />
            <p>Full Name:{fullName}</p>
        </div>
    )
}
export default PropsExample