import axios from "axios";
import { parseCookies } from "nookies";

const axiosInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
});

const cookies = parseCookies()

axiosInstance.interceptors.request.use(
  function (config) {
    let token = cookies.token
    if (token !== undefined && token !== "" && token !== null) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export type IloginData = {
  email: string;
  password: string;
};

export type IsignUpData = {
  name: string;
  email: string;
  password:string;
  avatar: File | null;
};

type isEmail = {
  email:string;
}

export type IQueryProps = {
  _id: string;
};

export type IUpdateProps = {
  _id: string;
  email:string;
  name:string;
};

export type Category = {
  id: number;
  name: string;
  image: string;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
};

export type IAddProduct = {
  title: string;
  price: number | null;
  description: string;
  categoryId: number | null;
  images: string[];
};


export type IproductUpdate = {
  id:number;
  title:string;
  price:number
}



export const loginUser = async (data: IloginData) => {
  try {
    let res = await axiosInstance.post("/auth/login", data);
    return res?.data;
  } catch (err) {
    throw err;
  }
};



export const getAllCategories = async () => {
  let res = await axiosInstance.get("/products/categories");
  return res?.data;
};


export const signupUser = async(data:IsignUpData) =>{
  let res = await axiosInstance?.post('/users/',data);
  return res?.data;
}

export const fileUpload = async(data:any) =>{
  let res = await axiosInstance.post('/files/upload',data,{
    headers:{
      "Content-Type" : 'multipart/form-data',
    }
  })

  return res?.data
}

export const emailAvailable = async (data:isEmail) =>{
  let res = await axiosInstance.post('/users/is-available',data);
  return res?.data
}

export const getAllUsers = async () =>{
  let res = await axiosInstance.get('/users');
  return res?.data
}

export const getSingleUser = async (data:IQueryProps) =>{
  let res = await axiosInstance.get(`/users/${data?._id}`);
  return res?.data
}


export const updateUser = async (data:IUpdateProps) =>{
  let res = await axiosInstance.put(`/users/${data?._id}`,{email:data?.email,name:data?.name});
  return res?.data
}

export const getAllProducts = async () =>{
  let res = await axiosInstance.get(`/products`);
  return res?.data
}

export const getAllProductsWithFilter = async (offset:number,limit:number,title:string,price_min:number,price_max:number) =>{
  let res = await axiosInstance.get(`/products?offset=${offset}&limit=${limit}&title=${title}&price_min=${price_min}&price_max=${price_max}`);
  return res?.data
}

export const addProduct = async(data:any) =>{
  let res = await axiosInstance.post('/products/',data);
  return res?.data
}

export const getSingleProduct = async(id:string) =>{
  let res = await axiosInstance.get(`/products/${id}`);
  return res?.data
}


export const updateProduct = async(data:IproductUpdate) =>{
  console.log(data,"IproductUpdate")
  let res = await axiosInstance.put(`/products/${data?.id}`,{title:data?.title,price:data?.price});
  return res?.data
}

export const deleteProduct = async(id:number) =>{
  let res = await axiosInstance.delete(`/products/${id}`);
  return res?.data
}

