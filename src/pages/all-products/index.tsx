import {
  deleteProduct,
  getAllCategories,
  getAllProducts,
  getAllProductsWithFilter,
} from "@/api/api";
import CommonSelect from "@/components/CommonSelect/CommonSelect";
import Wrapper from "@/components/Wrapper/Wrapper";
import {
  Box,
  Container,
  Grid,
  Pagination,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useMutation, useQuery } from "react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CustomSlider from '@mui/material/Slider';

type ratingType = {
  rate: number;
  count: number;
};
interface cardProps {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ratingType;
}

export function BasicCard({ ...props }: cardProps) {
  return (
    <Card>
      <CardContent>
        <figure style={{ height: "250px" }}>
          <img
            src={props?.image}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </figure>
        <Typography variant="h6">{props?.title}</Typography>
        <Typography>{props?.price}</Typography>
        <Typography variant="body2">{props?.category}</Typography>
        <Typography>{props?.description}</Typography>
        <Typography>{props?.rating?.count}</Typography>
        <Typography>{props?.rating?.rate}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
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

interface IProductList {
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

export default function Home() {
  const router = useRouter();

  const [limit, setLimit] = useState<string>("10");

  const handleChangeLimit = (event: SelectChangeEvent) => {
    setLimit(event.target.value as string);
  };

  const [offset, setOffset] = useState(0);
  const [pagOffset, setPagoffset] = useState(1);

  const [totalProducts, setTotalProducts] = useState<IProductList[]>();

  const [titleFilter, setTitleFilter] = useState<string>("");

  const [value, setValue] = useState<number[]>([0, 200]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const valueCallback = useCallback((data: string) => {
    setTitleFilter(data);
  }, []);

  const handleOffset = (event: any, page: number) => {
    setOffset((page - 1) * parseInt(limit));
    setPagoffset(page);
  };

  const { data: allProducts } = useQuery("allProductsCount", getAllProducts);

  const { isLoading } = useQuery(["allProducts", offset, limit, titleFilter , value], {
    queryFn: () => {
      return getAllProductsWithFilter(offset, parseInt(limit), titleFilter ,value[0],value[1]);
    },
    onSuccess: (data: IProductList[]) => {
      setTotalProducts(data);
    },
  });

  const { mutate: deleteMutate } = useMutation("deleteProduct", deleteProduct);

  const productDelete = (id: number) => {
    deleteMutate(id, {
      onSuccess: () => {
        const newArr = totalProducts?.filter((data) => data?.id !== id);
        setTotalProducts(newArr);
      },
    });
  };

  const ClearFilter = () => {
    setLimit("10");
    setTitleFilter("");
  };

  function valuetext(value: number) {
    return `${value}°C`;
  }

  return (
    <Wrapper>
      <Container fixed>
        <Typography variant="h1">Products</Typography>
        <Button variant="contained" color="info" onClick={() => ClearFilter()}>
          Clear Filter
        </Button>
        <Stack
          direction="row"
          alignItems="center"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <Stack
            direction="row"
            alignItems="center"
            flexWrap="wrap"
            className="filterStack"
          >
            <Box className="filter_title" sx={{ minWidth: "250px" }}>
              <Typography>Title</Typography>

              <CommonSelect valueCallback={valueCallback}>
                {!!allProducts &&
                  allProducts?.length &&
                  allProducts?.map((data: IProductList) => (
                    <MenuItem value={data?.title}>{data?.title}</MenuItem>
                  ))}
              </CommonSelect>
            </Box>
            <Box className="filter_title" sx={{ minWidth: "250px" }}>
              <Typography>Limit</Typography>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  displayEmpty
                  value={limit}
                  onChange={handleChangeLimit}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box className="filter_title" sx={{ minWidth: "250px" }}>
              <Typography>Limit</Typography>
              <CustomSlider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                max={1000}
               
              />
            </Box>
          </Stack>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/add-product")}
          >
            Add Product
          </Button>
        </Stack>

        {isLoading ? (
          <Typography variant="h2">Loading...</Typography>
        ) : (
          <Grid container spacing={3}>
            {!!totalProducts &&
              totalProducts?.length &&
              totalProducts?.map((data: IProductList) => (
                <Grid item md={4} key={data?.id}>
                  <Link href={`/product-details/${data?.id}`}>
                    <Slider {...settings}>
                      {data?.images?.map((image, index) => (
                        <figure key={index}>
                          <img src={image} alt="" width={200} height={200} />
                        </figure>
                      ))}
                    </Slider>
                  </Link>
                  <Typography variant="h4">
                    Title:
                    <Link href={`/product-details/${data?.id}`}>
                      {data?.title}
                    </Link>
                  </Typography>
                  <Typography>category: {data?.category?.name}</Typography>
                  <Typography>Price: {data?.price}</Typography>
                  <Typography>Description: {data?.description}</Typography>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => productDelete(data?.id)}
                  >
                    Delete
                  </Button>
                </Grid>
              ))}
          </Grid>
        )}

        <Pagination
          count={Math.ceil(allProducts?.length / parseInt(limit))}
          page={pagOffset}
          onChange={handleOffset}
          color="primary"
        />
      </Container>
    </Wrapper>
  );
}
