import { useState } from "react"
import Navigation from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommonded from "./Recommonded/Recommonded"
import Sidebar from "./Sidebar/Sidebar"
import products from "./db/data"
import Card from "./components/Card"
const App = () => {
  const [selectedCategory,setSelectedCategory]=useState(null)

  const [query,setQuery]=useState("")

  const handleInputChange =event=>{
    setQuery(event.target.value)
  }

  const filteredItems=products.filter((product)=>
  product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())
  !==-1
)

const handleChange = event =>{
  setSelectedCategory(event.target.value)
}

const handleClick = event=>{
  setSelectedCategory(event.target.value)
}

function filteredData(products,selected,query)
{
  let filteredProducts=products

  //filtering input items

  if(query){
    filteredProducts=filteredItems
  }
  
  if(selected){
    filteredProducts=filteredProducts.filter(({category,color,company,newPrice,title})=>
    category ===selected || color ===selected || newPrice ===selected || title ===selected || company ===selected)
      
  }

  return filteredProducts.map(({img,title,star,reviews,newPrice,prevPrice})=>(
    <Card key={Math.random()}
    img={img}
    title={title}
    star={star}
    reviews={reviews}
    prevPrice={prevPrice}
    newPrice={newPrice}
    />
  ))
}

const result=filteredData(products,selectedCategory,query)
  return (
    <>
    <Sidebar handleChange={handleChange}/>
    <Navigation query={query} handleInputChange={handleInputChange}/>
    <Recommonded handleClick={handleClick}/>
    <Products result={result}/>
    
    </>
  )
}

export default App
