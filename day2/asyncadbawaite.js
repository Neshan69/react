let fetchAllusers = async()=>{
    // https://jsonplaceholder.typicode.com/users
try{
    let response = await fetch ("https://jsonplaceholder.typicode.com/users")
    let data = await response.json()
    console.log("All users: ", data)
} catch(e){
    console.log("error: ", e)

}finally{
    console.log("fetching data is done")
}
}
fetchAllusers()