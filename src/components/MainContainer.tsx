import React, { useState } from "react";
import { Button, Grid, Paper, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Product from "./Product";
import List from "@mui/material/List";

export default function MainContainer() {
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    details: "",
    checked: false,
  });
  const [productList, setProductList] = useState([]);
  const [isAddProductMode, setIsAddProductMode] = useState(false);

  const handleAddProductOnClick = () => {
    setProduct({ ...product, name: "", details: "" });
    setIsAddProductMode(true);
  };

  const handleSaveButtonOnclick = () => {
    let products = [...productList] as any;
    setProduct({ ...product, id: product.id + 1 });
    products.push(product);
    setProductList(products);
    setIsAddProductMode(false);
  };

  const handleCancelButtonOnClick = () => {
    setIsAddProductMode(false);
  };

  const handleProductCheckboxOnChange = (id: number) => {
    productList.forEach((p: any) => {
      if (id === p["id"]) {
        p["checked"] = !p["checked"];
        setProduct({ ...product, checked: !p.checked });
      }
    });
  };

  const handleProductDeleteButtonOnClick = (id: number) => {
    let index = -1;
    let prodList = [...productList];
    productList.forEach((p: any, idx: any) => {
      if (id === p.id) {
        index = idx;
      }
    });
    if (index > -1) {
      prodList.splice(index, 1);
    }
    setProductList(prodList);
  };

  const handleProductOnChange = (mode: string, e: any) => {
    switch (mode) {
      case "name":
        setProduct({ ...product, name: e.target.value });
        break;
      case "details":
        setProduct({ ...product, details: e.target.value });
        break;
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: "1%", alignItems: "center" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8}>
            <h1>Lista zakupów</h1>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              size="large"
              onClick={handleAddProductOnClick}
              disabled={isAddProductMode}
            >
              Dodaj produkt
            </Button>
          </Grid>
        </Grid>
      </Paper>
      {productList.length > 0 && !isAddProductMode && (
        <Paper
          style={{
            padding: "1%",
            marginTop: "5px",
          }}
        >
          <h3>Produkty</h3>
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
            }}
          >
            {productList.map((product) => {
              return (
                <Product
                  key={product["id"]}
                  product={product}
                  checked={product["checked"]}
                  handleProductCheckboxOnChange={handleProductCheckboxOnChange}
                  handleProductDeleteButtonOnClick={
                    handleProductDeleteButtonOnClick
                  }
                />
              );
            })}
          </List>
        </Paper>
      )}
      {isAddProductMode && (
        <Paper style={{ padding: "1%", marginTop: "5px" }}>
          <h3>Nowy produkt</h3>
          <Grid container spacing={2} columns={12}>
            <Grid item xs={6}>
              <TextField
                id="productName"
                label="Nazwa produktu"
                variant="outlined"
                size="small"
                fullWidth={true}
                onChange={(e) => handleProductOnChange("name", e)}
                value={product.name}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="productDetails"
                label="Opis"
                variant="outlined"
                size="small"
                fullWidth={true}
                onChange={(e) => handleProductOnChange("details", e)}
                value={product.details}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ marginTop: "10px" }}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                onClick={handleSaveButtonOnclick}
                disabled={!product.name}
              >
                Zapisz
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                style={{ float: "right" }}
                variant="contained"
                color="error"
                onClick={handleCancelButtonOnClick}
              >
                Anuluj
              </Button>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Container>
  );
}
