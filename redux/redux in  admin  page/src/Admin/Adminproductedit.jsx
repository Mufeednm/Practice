import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import UseeContext from "../Globalcontext/UseConstext";
import { useDispatch, useSelector } from "react-redux";
// import { UseDispatch } from "react-redux";
import { productedit } from "./slice/productSlice";
const Adminproductedit = () => {
    const navigate =useNavigate( )
    const dispatch = useDispatch()
    const produscts = useSelector((state)=>state.product.value)
    // const {products,setProducts} =useContext(UseeContext)
  const handlesubmit = (e) => {
    e.preventDefault();
    const editproduct =produscts.map((e) => {
      let updatetitle = title || e.title;
      let updateprice = price || e.price;
      let updatetype = type || e.type;
      let updateimage = image || e.image;
      if (e.id == id) {
        return{
            ...produscts,
            id:e.id,
            title:updatetitle,
            price : updateprice,
            type : updatetype,
            image :updateimage
        }
        
        
      }else 
      return e;
    });
 dispatch ( productedit (editproduct))
navigate ("/Productedit");

  };
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();
  const find =produscts.find((e) => e.id == id);
  console.log(find);
  return (
    <div className=" bg-red-400">
   
      Adminproductedit
      <form className=" " onSubmit={(e) => handlesubmit(e)}>
      <div className=" parent flex flex-row ">

      <div className="image h-44 w-44">

      <img src={find.image} alt="" />

      </div>
      <div>
        
        <label className=""> title :</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder={find.title}
          type="text"
          />{" "}
        <br />

        <label> type:</label>
        <input
          onChange={(e) => setType(e.target.value)}
          placeholder={find.type}
          type="text"
          />{" "}
        <br />

        <label> price :</label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          placeholder={find.price}
          type="number"
          />
        <br />
        <label> image :</label>
        <input
          onChange={(e) => setImage(e.target.value)}
          placeholder
          type="text"
          />
        <button type="submit">add</button>
          </div>
          </div>
      </form>
    </div>
  );
};

export default Adminproductedit;
