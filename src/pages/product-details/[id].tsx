import { IproductUpdate, getSingleProduct, updateProduct } from "@/api/api";
import Wrapper from "@/components/Wrapper/Wrapper";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

export const ProductWrapper = styled(Box)``;

const productEditSchema = yup.object().shape({
  title: yup.string().trim(),
  price: yup.number(),
});

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
}

const settings = {
  dots: false,
  arrows: true,
  navigator: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Index = () => {
  const { handleSubmit, control, setValue, watch } = useForm<
    IproductUpdate | any
  >({
    resolver: yupResolver(productEditSchema),
    defaultValues: {
      title: "",
      price: 0,
    },
  });

  console.log(watch(), "IproductUpdate watch");
  const [edit, setEdit] = useState<boolean>(false);
  const router = useRouter();

  const [productDetails, setproductDetails] = useState<IProduct>();

  const { id } = router.query;

  const { isLoading } = useQuery(["get_single_product", id], {
    queryFn: () => getSingleProduct(id as string),
    onSuccess: (singleProductDetails: IProduct) => {
      setproductDetails(singleProductDetails);
    },
  });

  const { mutate: mutateUppdateProduct } = useMutation(
    "updateProduct",
    updateProduct
  );

  const formSubmit = (data: IproductUpdate) => {
    setEdit(false);
    setValue("id", id);
    mutateUppdateProduct(data, {
      onSuccess: (updateData) => {
        if (updateData) {
          setproductDetails(updateData);
          alert("product added succefully");
        }
      },
      onError: (err) => {
        if (err) {
          alert(`Something went wrong ${err}`);
        }
      },
    });
  };

  useEffect(() => {
    if (productDetails) {
      setValue("title", productDetails?.title);
      setValue("price", productDetails?.price);
    }
  }, [productDetails]);

  console.log(productDetails, "singleProduct");
  return (
    <Wrapper>
      <Container fixed>
        <ProductWrapper
          component="form"
          onSubmit={handleSubmit(formSubmit as any)}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          {isLoading ? (
            <Typography variant="h3">Loading...</Typography>
          ) : (
            <Grid container spacing={3}>
              <Grid item md={12} key={productDetails?.id}>
                <Link href={`/product-details/${productDetails?.id}`}>
                  <Slider {...settings}>
                    {productDetails?.images?.map((image, index) => (
                      <>
                        {image ? (
                          <figure key={index}>
                            <img
                              src={image}
                              alt=""
                              style={{ width: "300px", height: "300px" }}
                            />
                          </figure>
                        ) : (
                          <img
                            src={"../../../public/images/no_image.png"}
                            alt=""
                          />
                        )}
                      </>
                    ))}
                  </Slider>
                  {!edit ? (
                    <Typography variant="h4">
                      Titlle: {productDetails?.title}
                    </Typography>
                  ) : (
                    <Controller
                      name="title"
                      control={control}
                      render={({
                        field: { onChange, value },
                        fieldState: { invalid, error },
                      }) => (
                        <TextField
                          fullWidth
                          label="title"
                          placeholder="title"
                          onChange={onChange}
                          value={value}
                          error={invalid}
                          helperText={error?.message}
                        />
                      )}
                    />
                  )}

                  <Typography>
                    category: {productDetails?.category?.name}
                  </Typography>

                  {!edit ? (
                    <Typography>Price: {productDetails?.price}</Typography>
                  ) : (
                    <Controller
                      name="price"
                      control={control}
                      render={({
                        field: { onChange, value },
                        fieldState: { invalid, error },
                      }) => (
                        <TextField
                          fullWidth
                          label="price"
                          placeholder="price"
                          onChange={onChange}
                          value={value}
                          error={invalid}
                          helperText={error?.message}
                        />
                      )}
                    />
                  )}
                  <Typography>
                    Description: {productDetails?.description}
                  </Typography>
                </Link>
              </Grid>
              {edit && (
                <Grid xs={12}>
                  <Button variant="contained" color="primary" type="submit">
                    Update
                  </Button>
                </Grid>
              )}
            </Grid>
          )}
        </ProductWrapper>
      </Container>
    </Wrapper>
  );
};

export default Index;
