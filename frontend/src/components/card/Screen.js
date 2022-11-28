import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Navbar from "../navBar/Navbar";
import "../Styles/styles.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function MainScreen() {
  return (
    <Card
      sx={{
        display: "flex",
        flex: "1",
        minWidth: 275,
        justifyContent: "center",
      }}
    >
      <CardContent
        sx={{
          width: "100%",
        }}
      >
        <div className="screenSurface"></div>
        <div className="appbar">
          <Navbar />
        </div>
      </CardContent>
    </Card>
  );
}
