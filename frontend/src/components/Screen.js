import FastRewindRoundedIcon from "@mui/icons-material/FastRewindRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import FastForwardRoundedIcon from "@mui/icons-material/FastForwardRounded";
import RadioButtonCheckedTwoToneIcon from "@mui/icons-material/RadioButtonCheckedTwoTone";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import MicNoneRoundedIcon from "@mui/icons-material/MicNoneRounded";
import { Box, Container } from "@mui/material";

import React from "react";

const Screen = () => {
  return (
    <Container
      maxWidth="md"
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "460px",

        backgroundColor: "lightblue",
      }}
    >
      <Box
        className="screen"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 16px",
          flex: "4",
          width: "100%",
          backgroundColor: "darkgray",
        }}
      >
        <Box className="screen-left">hello</Box>
        <Box className="screen-right">bye</Box>
      </Box>
      <Box
        className="bottomNav"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
          justifyContent: "space-between",
          padding: "0px 16px",
          flex: "1",
          backgroundColor: "lightgray",
          width: "100%",
        }}
      >
        <RadioButtonCheckedTwoToneIcon sx={{ fontSize: "48px" }} />
        
        <Box
          className="musicControls"
          sx={{
            display: "flex",
            justifyContent: "center",
            flex: 1,
            gap: "40px",
            backgroundColor: "gray",
            borderRadius: "25px",
          }}
        >
          <FastRewindRoundedIcon
            sx={{
              fontSize: "48px",
            }}
          />
          <PlayArrowRoundedIcon
            sx={{
              fontSize: "48px",
            }}
          />
          <FastForwardRoundedIcon
            sx={{
              fontSize: "48px",
            }}
          />
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '32px',
          flex: '1',
        }}>

        <MicNoneRoundedIcon fontSize="large" />
        <NotificationsNoneRoundedIcon fontSize="large" />
        </Box>
      </Box>
    </Container>
  );
};

export default Screen;
