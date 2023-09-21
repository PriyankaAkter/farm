
'use client'
import { useQuery } from "@tanstack/react-query"
import Header from "../../../components/layout/Header"
import AddNewProduct from "../../addNewProducts/AddNewProduct"
import axios from "axios"

const fetchCategory = async (id)=> {
  const res = await axios.get(`/api/product/${id}`)
  return  res.data
}
const page = ({params}) => {
  const { id } = params;
  const {isLoading,data,isError,error} = useQuery({
    queryKey:['product-data', id], 
    queryFn: () => fetchCategory(id)
  })


 
  if(isLoading)
  {
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }

  return (
    <div className="container1 py-10">
      <div>
        <Header title="Update Product" subTitle="" />
      </div>
      <AddNewProduct product={data} />

    </div>
  )
}

export default page