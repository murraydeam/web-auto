import { Box, Container } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import FastRewindRoundedIcon from "@mui/icons-material/FastRewindRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import FastForwardRoundedIcon from "@mui/icons-material/FastForwardRounded";
import MicNoneRoundedIcon from "@mui/icons-material/MicNoneRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";
import React, { useEffect, useRef, useState } from "react";
import tt from "@tomtom-international/web-sdk-maps";
const Screen = () => {
  const mapElement = useRef();
  const [map, setMap] = useState({});

  useEffect(() => {
    let map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_API_KEY,
      container: mapElement.current,
    });

    setMap(map);
  }, []);

  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        className="screen secondary"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 900,
          height: 540,
        }}
      >
        <Box
          sx={{
            flex: "5",
            padding: "8px 8px 0px 8px",
          }}
        >
          <div ref={mapElement} className="map"></div>
        </Box>
        <Box
          className="screenNav primary"
          sx={{
            display: "flex",
            alignItems: "center",
            flex: "1",
            gap: "16px",
            padding: "0px 32px",
          }}
        >
          <RadioButtonCheckedIcon sx={{ fontSize: "40px" }} />
          <Box
            className="playButtons secondary"
            sx={{
              display: "flex",
              padding: "8px 16px",
              ml: "32px",
              justifyContent: "space-between",
              borderRadius: "50px",
              width: "380px",
            }}
          >
            <LibraryMusicRoundedIcon sx={{ fontSize: "40px" }} />
            <FastRewindRoundedIcon sx={{ fontSize: "40px" }} />
            <PlayArrowRoundedIcon sx={{ fontSize: "40px" }} />
            <FastForwardRoundedIcon sx={{ fontSize: "40px" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "32px",
              flex: "1",
              justifyContent: "flex-end",
            }}
          >
            <MicNoneRoundedIcon sx={{ fontSize: "40px" }} />
            <NotificationsActiveRoundedIcon sx={{ fontSize: "40px" }} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Screen;
