

export const addNumber = (type) =>{
  const getItem = localStorage.getItem("counter");

  console.log(getItem)
    if(getItem){
        let value = JSON.parse(getItem)
        if(type==="+"){
            localStorage.setItem("counter",JSON.stringify(value+1))
        }else{
            localStorage.setItem("counter",JSON.stringify(value-1))
        }
    }else{
        localStorage.setItem("counter",JSON.stringify(0))
    }
}