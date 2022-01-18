import React from "react";
import {
  Button,
  Checkbox,
  FormGroup,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function Product(props: any) {
  return (
    <FormGroup>
      <ListItem>
        <Checkbox
          checked={props.checked}
          onChange={() => props.handleProductCheckboxOnChange(props.product.id)}
        />
        <ListItemText
          primary={props.product.name}
          secondary={props.product.details}
          sx={
            props.checked
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        />
        <Button
          style={{ float: "right" }}
          variant="contained"
          color="error"
          onClick={() =>
            props.handleProductDeleteButtonOnClick(props.product.id)
          }
        >
          Usuń
        </Button>
      </ListItem>
    </FormGroup>
  );
}
