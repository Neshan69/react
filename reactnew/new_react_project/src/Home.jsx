import "./Home.css"

let Home  = ({pageTitle, address, age}) =>{
    return(
        <>
        <h1 className="title">{pageTitle}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur necessitatibus exercitationem sequi consectetur, tempora nihil, sapiente unde provident sunt non, aut ipsam deserunt!</p>
        <i><b> THis is italic tag</b></i>
        <p>Address: {address}</p>
        <p>Age: {age}</p>
   
        </>
    )

}
export default Home