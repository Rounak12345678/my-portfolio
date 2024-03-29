import { getAllCategories } from "@/api/api";
import Wrapper from "@/components/Wrapper/Wrapper";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";

export default function Index() {
  const [category, setCategory] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
    console.log(event.target.value);
  };

  const { data: allCategories } = useQuery("allCategories", getAllCategories);

  console.log(allCategories, "allCategories");

  return (
    <Wrapper>
      <Container fixed>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="category"
            onChange={handleChange}
          >
            {!!allCategories &&
              allCategories?.map((data: string[], index: number) => (
                <MenuItem value={data} key={index}>
                  {data}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        {/* <Grid container spacing={3}>
          {!!allProducts &&
            allProducts?.map((data: any, index: number) => (
              <Grid item md={4} xs={3} key={data?.id}>
                <BasicCard {...data} />
              </Grid>
            ))}
        </Grid> */}
      </Container>
    </Wrapper>
  );
}
