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
    height: '60vh'
  },
}));

export const ScreenContainerTop = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "80vh",
  width: "100%",
  marginTop: "24px",
  [theme.breakpoints.down("xl")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const ScreenContainerTopRight = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 900,
  width: "100%",
  height: "80%",
  [theme.breakpoints.down("lg")]: {
    maxWidth: "680px",
    flex: "1 1 auto",
    height: '80%'
  },
}));

export const BodyContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: '24px'
}));
