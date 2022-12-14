import { styled } from "@mui/material";
import { Box, Container } from "@mui/system";

export const ScreenContainer = styled(Container)(({ theme }) => ({
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
