import Wrapper from '@/components/Wrapper/Wrapper'
import { Box, Button, Container, Grid, List, ListItem, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm , useFieldArray } from "react-hook-form";
import { IAddProduct, addProduct, fileUpload } from '@/api/api';
import { useMutation } from 'react-query';


export type addProductType = {
    title: string;
    price: number | null;
    description: string;
    categoryId: number | null;
    images: string[];

  };
  

const productSchema = yup.object().shape({
    title: yup.string().trim().required('Title is required'),
    price: yup.number().required('Price is required'),
    description: yup.string().trim().required('Description is required'),
    categoryId: yup.number().required('Category ID is required'),
    images: yup.array().test({message: "Aleast", test: arr => arr!.length!==0}).of(yup.mixed().test('imageType','image type mismatched',(file:File | any)=>{
        return ['image/jpg','image/png','image.webp'].includes(file.type)
    }).test('imageSize','image should not exceed the limit',(file:File | any)=>{
        return file && file.size <= 10 * 1024 * 1024
    })),

   
});

const Index = () => {

    const {handleSubmit,control,watch,setValue,getValues, formState:{errors}} = useForm<addProductType | any>({
        resolver:yupResolver(productSchema),
        defaultValues:{
            title:'',
            price:null,
            categoryId:null,
            description:'',
            images:[]
        }
    })






    const images = watch('images');

  

    const {mutate:mutateAddProduct} = useMutation("addProduct",addProduct)
    const { mutate: mutateFile } = useMutation("fileUpload", fileUpload);


    const formSubmit = (data:IAddProduct) =>{
        console.log(data,"product add");
        const formData = new FormData();
        formData.append("file", data?.images[0] as any);
        mutateFile(formData,{
            onSuccess:(uploadImage)=>{
                if(uploadImage){
                    console.log(uploadImage?.location,"images")
                 
                    console.log(data,"data")
                    mutateAddProduct({...data, images: [uploadImage?.location]},{
                        onSuccess:(addData)=>{
                           addData &&  alert('data added successfully');
                        },
                        onError:(err)=>{
                          err &&  alert('something went wrong')
                        }
                    })
                }
              
            }
        })
    }
  return (
    <Wrapper>
        <Container fixed>
            <Box component='form' onSubmit={handleSubmit(formSubmit)}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Controller name='title' control={control} render={({field:{onChange,value},fieldState:{invalid,error}})=>(
                        <TextField fullWidth placeholder='Title' onChange={onChange} value={value} error={invalid} helperText={error?.message}/>
                    )}/>
                </Grid>
                <Grid item xs={12}>
                    <Controller name='price' control={control} render={({field:{onChange,value},fieldState:{invalid,error}})=>(
                        <TextField fullWidth placeholder='price' onChange={onChange} value={value} error={invalid} helperText={error?.message}/>
                    )}/>
                </Grid>
                <Grid item xs={12}>
                    <Controller name='categoryId' control={control} render={({field:{onChange,value},fieldState:{invalid,error}})=>(
                        <TextField fullWidth placeholder='categoryId' onChange={onChange} value={value} error={invalid} helperText={error?.message}/>
                    )}/>
                </Grid>
                <Grid item xs={12}>
                    <Controller name='images' control={control} render={({field:{onChange,value},fieldState:{invalid,error}})=>(
                        <>
                         <input type='file' onChange={(e)=>{onChange([e.target.files?.[0]])}}/>
                
                        </>
                    )}/>
                </Grid>
                <Grid item xs={12}>
                    <Controller name='description' control={control} render={({field:{onChange,value},fieldState:{invalid,error}})=>(
                        <TextField fullWidth placeholder='Description' rows={4} maxRows={4} onChange={onChange} value={value} error={invalid} helperText={error?.message}/>
                    )}/>
                </Grid>
                <Grid item xs={12}>
                    <Button type='submit' variant='contained' color='primary'>Add Product</Button>
                </Grid>
            </Grid>
            </Box>
        </Container>
    </Wrapper>
  )
}

export default Index