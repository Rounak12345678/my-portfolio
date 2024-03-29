import { IUpdateProps, getSingleUser, updateUser } from "@/api/api";

import styled from "@emotion/styled";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { User } from "../all-users";
import Wrapper from "@/components/Wrapper/Wrapper";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";

export const UserBlock = styled(Box)`
  figure {
    height: 250px;
    width: 250px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const userSchema = yup.object().shape({
  name: yup.string().trim(),
  email: yup.string().trim(),
});

const Index = () => {
  const [userData, setUserData] = useState<User>();

  const [edit, setEdit] = useState<boolean>(false);

  const router = useRouter();

  const { id } = router.query;

  const { isLoading } = useQuery(["getsingleUser", id], {
    queryFn: () => getSingleUser({ _id: id as string }),
    onSuccess: (data) => {
      setUserData(data);
      setValue("email", data?.email);
      setValue("name", data?.name);
    },
  });

  const { control, handleSubmit, setValue } = useForm<IUpdateProps | any>({
    resolver: yupResolver(userSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const { mutate: userUpdate } = useMutation("upadteUser", updateUser);

  const formSubmit = (data: IUpdateProps) => {
    setEdit(false);
    console.log(data, "update");
    setValue("_id", id);
    userUpdate(data, {
      onSuccess: (updateData) => {
        console.log(updateData, "updateData");
        setUserData(updateData);
      },
    });
  };

  return (
    <Wrapper>
      <Container fixed>
        <Box className="edit_sec">
          {!edit && <Button onClick={() => setEdit(true)}>Edit</Button>}
          {isLoading ? (
            <Typography variant="h4">Loading...</Typography>
          ) : (
            <UserBlock component="form" onSubmit={handleSubmit(formSubmit)}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <figure>
                    <img src={userData?.avatar} alt="" />
                  </figure>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography>{userData?.id}</Typography>
              </Grid>
              <Grid item xs={12}>
                {!edit ? (
                  <Typography>{userData?.email}</Typography>
                ) : (
                  <Controller
                    name="email"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { invalid, error },
                    }) => (
                      <TextField
                        fullWidth
                        placeholder="email"
                        error={invalid}
                        helperText={error?.message}
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                )}
              </Grid>
              <Grid item xs={12}>
                <Typography>{userData?.password}</Typography>
              </Grid>
              <Grid item xs={12}>
                {!edit ? (
                  <Typography>{userData?.name}</Typography>
                ) : (
                  <Controller
                    name="name"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { invalid, error },
                    }) => (
                      <TextField
                        fullWidth
                        placeholder="name"
                        error={invalid}
                        helperText={error?.message}
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                )}
              </Grid>
              <Grid item xs={12}>
                <Typography>{userData?.role}</Typography>
              </Grid>
              {edit && (
                <Grid item xs={12}>
                  <Button type="submit">Update</Button>
                </Grid>
              )}
            </UserBlock>
          )}
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Index;
