import { styled } from "@mui/material";
import { Box, Container } from "@mui/system";

export const ScreenContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80vh",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
}));

export const ScreenContainerTop = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "60vh",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const ScreenContainerTopRight = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 900,
  height: "100%",
  [theme.breakpoints.down('sm')]: {
    maxWidth: '360px'
  }
}));

export const BodyContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));
