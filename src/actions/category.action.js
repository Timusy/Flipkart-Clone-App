import axios from "../helpers/axios";
import {categoryConstants} from "./constants";
export const getAllCategory=function(){
  return async function(dispatch){
    dispatch({type:categoryConstants.GET_ALL_CATEGORIES_REQUEST});
    const res=await axios.get("category/getCategories");
    console.log(res);
    if(res.status===200){
      const {categoryList}=res.data;
      dispatch({
        type:categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
        payload:{categories:categoryList}
      });
    }
    else{
      dispatch({
        type:categoryConstants.GET_ALL_CATEGORIES_FAILURE,
        payload:{error:res.data.error}
      });
    }
  }
}
