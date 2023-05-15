import axios from "axios"

export const login = async(values) => {
    try{
       const data = await axios.post("https://crossing-borders-backend.onrender.com/login", {...values});
       return data;
    }catch(err){
        console.log(err);
        return "error";
    }
}

export const register = async(values) => {
    try{
       const data = await axios.post("https://crossing-borders-backend.onrender.com/register", {...values});
    //    console.log(data.data);
       return data.data;
       
    }catch(err){
        // console.log(err.response.data);
        return err.response.data;
    }
}

export const getCountry = async (country) => {
    try{
       const data = await axios.get(`https://crossing-borders-backend.onrender.com/country/${country}`);
       return data.data.data;
    }catch(err){
        console.log(err);
        return "error";
    }
}