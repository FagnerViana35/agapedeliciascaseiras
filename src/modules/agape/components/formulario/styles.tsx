import { styled } from "@stitches/react";

export const ContainerContact = styled("form", {
    display: "flex",
    maxWidth: "400px",
    margin: "0 auto",
    justifyContent:"space-between"
  
  });

export const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "400px",
  margin: "0 auto",

});

export const FormDescription = styled("form", {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    margin: "0 auto",
  
  });

export const Label = styled("label", {
  marginBottom: "8px",
  fontWeight: "bold",
});

export const Input = styled("input", {
  padding: "8px",
  marginBottom: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
});

export const Button = styled("button", {
  padding: "10px",
  backgroundColor: "$warning-dark",
  color: "#fff",
  cursor: "pointer",
  border: "none",
  borderRadius: "4px",
});