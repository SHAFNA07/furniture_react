import axios from "axios";
import { FAIL, SUCCESS } from "../constants/furnConstant";




//api access aall data


 export const getFurnitures=async(dispatch)=>{

    try{

    
   const {data}=await axios.get('./furniture.json')
   console.log(data.furnitures);

   dispatch(
    {
       payload: data.furnitures,
       type: SUCCESS
    }
 )

}
catch (err) {
 dispatch(
    {
       payload:err,
       type: FAIL
    }
 )
}

}