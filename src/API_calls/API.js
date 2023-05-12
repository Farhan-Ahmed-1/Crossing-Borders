import axios from "axios"

export const login = async(values) => {
    try{
       const data = await axios.post("http://localhost:8000/login", {...values});
       console.log(data.data.message);
       
    }catch(err){
        console.log(err);
    }
}