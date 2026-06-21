import "./App.css"
let App = () => {
  let PI = 3.14
  let handelTitleClick = ()=> {
    alert("Hello Everyone")
  }
  let handleFullNameChange = (ev)=>{
    // .console.log("on chnage called fullname". ev)
    console.log(ev.target.value)
  }
  return (
    <div>
      <h1 className="title">My first REACT project</h1>
      <b>This is bold text.</b>
      <i>this is italic text</i>
      <br />
      <strong>
        <u>
          Value of PI is {PI}
        </u>
      </strong>
      <br />
      <label htmlFor="full_name">Full name: </label>
      <input id="full_name" type="text" placeholder="Enter your name:" />
    </div>
  )
}
export default App
// R6: Always clsoe the EventTarget, either using self closing or closing tag, eg: <br/>
// R7: akways use className attribute instead of class and htmlFor attribute instead of for. And attribute must be in camelcase
