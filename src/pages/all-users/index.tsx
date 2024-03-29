import { getAllUsers } from '@/api/api';
import Wrapper from '@/components/Wrapper/Wrapper'
import styled from '@emotion/styled';
import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const UserCardWrapper = styled(Link)`
  figure{
    height: 250px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

export type User = {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string;
  };

export async function getServerSideProps() {

    const response = await getAllUsers()
  
    return {
      props: {
        allUsers:response
      },
    };
  }

const Index = ({allUsers}:{allUsers:User[]}) => {

    console.log(allUsers,"allUsers")
  return (
   <Wrapper>
    <Container fixed>
        <Grid container spacing={3}>
            {
              !!allUsers && allUsers?.length && allUsers?.map((data)=>(
                <Grid key={data?.id} item md={4} xs={12}>
                  <UserCardWrapper href={`/user-details/${data?.id}`}>
                    <figure>
                  
                     <img src={data?.avatar} alt="" />
                    </figure>
                    <Typography variant='h4'>{data?.name}</Typography>
                 
                  </UserCardWrapper>
                </Grid>
              ))
            }
        </Grid>
    </Container>
   </Wrapper>
  )
}

export default Index