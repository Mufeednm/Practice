import React from "react";
import {useSelector ,useDispatch} from "react-redux"
import randomcolor from "randomcolor"
import { change_color } from "../redux/colour/colorSlice";
function Aside() {
  const backgroundColor = useSelector(state =>state.color.value)
  const dispatch = useDispatch()
  const changecolor = ()=>{
    dispatch(change_color({
      color : randomcolor()
    }))
  }
  return (
    <div>
      <div style={{backgroundColor}} className=" text-right m-10 border-2 p-5">
        <h4   className="text-3xl m-5 ">Aside</h4>
        <button  onClick={changecolor} className=" border-2 m-3">change color</button>
      </div>
    </div>
  );
}

export default Aside;
