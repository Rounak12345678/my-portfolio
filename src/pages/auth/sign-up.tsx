import Wrapper from "@/components/Wrapper/Wrapper";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import {
  IsignUpData,
  emailAvailable,
  fileUpload,
  loginUser,
  signupUser,
} from "@/api/api";
import { useRouter } from "next/router";
import { setCookie } from "nookies";

const maxProfilePictureInMB = 1;

const registerSchema = yup
  .object()
  .shape({
    name: yup.string().trim().required("Name is required"),
    email: yup.string().trim().required("Email is required"),
    password: yup.string().trim().required("Password is required"),
    avatar: yup
      .mixed()
      .required("Required")
      .test("fileType", "type is not matched", (value: any) => {
        return (
          value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
        );
      })
      .test(
        "fileSize",
        `Profile picture size must not exceed ${maxProfilePictureInMB} MB`,
        (value: any) => {
          return value && value.size <= maxProfilePictureInMB * 1024 * 1024;
        }
      ),
  })
  .required();

const Index = () => {
  const {
    control,
    register,
    reset,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm<any>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      avatar: null,
    },
  });

  const { mutate: registerUser } = useMutation("signup", signupUser);

  const { mutate: loginMutate } = useMutation("loginAfterRegister", loginUser);
  const { mutate: mutateFile } = useMutation("fileUpload", fileUpload);

  const { mutate: emailAvailableMutate } = useMutation(
    "email_available",
    emailAvailable
  );

  const router = useRouter();

  const formSubmit = (signUpData: IsignUpData) => {
    console.log(signUpData?.avatar, "data");
    const formData = new FormData();
    formData.append("file", signUpData?.avatar as any);
    mutateFile(formData, {
      onSuccess: (data) => {
        if (data) {
          setValue("avatar", data?.location);
          const { email } = signUpData
          emailAvailableMutate({email}, {
            onSuccess: (availableData) => {
              if (availableData?.isAvailable) {
                registerUser(signUpData, {
                  onSuccess: (afterRegisterData) => {
                    if (afterRegisterData) {
                      const { email, password } = afterRegisterData;

                      loginMutate(
                        { email, password },
                        {
                          onSuccess: (afterLogindata) => {
                            if (afterLogindata) {
                              console.log(afterLogindata, "loginMutate");
                              setCookie(null, 'token', afterLogindata?.access_token, {
                                path: '/',
                              })
                              router.push("/");
                            }
                          },
                        }
                      );
                    }
                  },
                });
              } else {
                alert("Email is already in use!!!");
              }
            },
          });
        }
      },
    });
    // registerUser(data)
  };

  return (
    <Wrapper>
      <Container fixed>
        <Box component="form" onSubmit={handleSubmit(formSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Controller
                name="name"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    placeholder="name"
                    onChange={onChange}
                    value={value}
                    error={invalid}
                    helperText={error?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>
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
                    onChange={onChange}
                    value={value}
                    error={invalid}
                    helperText={error?.message}
                    fullWidth
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
                    placeholder="password"
                    onChange={onChange}
                    value={value}
                    error={invalid}
                    helperText={error?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="avatar"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { invalid, error },
                }) => (
                  <>
                    <input
                      type="file"
                      onChange={(e) => {
                        onChange(e.target.files && (e.target.files[0] as File));
                      }}
                    />

                    {invalid && <p>{error?.message}</p>}
                  </>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Index;
