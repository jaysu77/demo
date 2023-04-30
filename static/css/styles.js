import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export const styles = {
  root: {
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
    },
  },
  tableContainer: {
    maxWidth: "100%",
    overflowX: "auto",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "80%",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "70%",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "60%",
    },
  },
  selectFormControl: {
    minWidth: 120,
    with: "20%",
    [theme.breakpoints.up("sm")]: {
      minWidth: 200,
    },
  },
  sortButton: {
    color: "white",
    margin: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(2),
    },
  },
};
