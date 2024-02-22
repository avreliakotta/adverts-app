import axios from "axios";
const baseURL= "https://65b91787b71048505a8a2983.mockapi.io/adverts";
const instance=axios.create({
    baseURL: `${baseURL}`,
    headers: {
        'Content-Type': 'application/json'
    }
});
export  const fetchAdvertsAll =async(page=1,limit=12)=>{
    const{data}=await instance.get("/",{
        params: {
            page: page,
            limit: limit
        }
    });
   return data;
}

   


  
 
