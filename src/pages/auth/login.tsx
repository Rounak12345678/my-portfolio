import { loginUser } from "@/api/api";
import Wrapper from "@/components/Wrapper/Wrapper";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { parseCookies, setCookie } from "nookies";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    email: yup.string().required("email is required"),
    password: yup.string().required("password is required"),
  })
  .required();

export default function Index() {
  const {
    control,
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "john@mail.com",
      password: "changeme",
    },
  });

  const router = useRouter();


  const { mutate } = useMutation("auth", loginUser, {
    onSuccess: (data) => {
      if (data) {
        console.log("success", data);
        // localStorage.setItem("token", data?.access_token);
        setCookie(null, 'token', data?.access_token, {
          path: '/',
        })
        router.push('/')
      }
    },
    onError: (err) => {
      alert(err);
    },
    onMutate: (data) => {
      if (data) {
        reset();
      }
    },
  });

  const onSubmit = useCallback(
    (data: any) => {
      console.log(data, "data");
      mutate(data);
    },
    [mutate]
  );

  return (
    <Wrapper>
      <Container fixed>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    placeholder="email"
                    label="Email"
                    fullWidth
                    onChange={onChange}
                    value={value}
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    placeholder="Password"
                    label="Password"
                    fullWidth
                    onChange={onChange}
                    value={value}
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
          <Link href='/auth/sign-up'>Sign UP</Link>
        </Box>
      </Container>
    </Wrapper>
  );
}
