import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import FastRewindRoundedIcon from "@mui/icons-material/FastRewindRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import FastForwardRoundedIcon from "@mui/icons-material/FastForwardRounded";
import MicNoneRoundedIcon from "@mui/icons-material/MicNoneRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";
import React, { useEffect, useRef, useState } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";
import { ThemeContext } from "@emotion/react";
import { ScreenContainer } from "../styles/screen";


const Screen = () => {
  const mapElement = useRef();
  const [map, setMap] = useState({});
  const [longitude, setLongitude] = useState(-76.8867);
  const [latitude, setLatitude] = useState(40.2732);

  useEffect(() => {
    let map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_API_KEY,
      container: mapElement.current,
      center: [longitude, latitude],
      zoom: 10,
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
    });

    setMap(map);
  }, [latitude, longitude]);

  return (
    <ScreenContainer
      disableGutters
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        height: '80vh'
        
      }}
    >
      <Box className="screen-left" sx={{
        height: '80%',
      }}>
        <Box
          className="screen-header"
          sx={{
            padding: '16px',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: 'center',
          }}
        >
          <Typography variant="h3">Customizable Color Schemes!</Typography>
        </Box>
        <Box
          className="screen-details"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="p">
            Imagine matching the color scheme of of your cars interior to the UI
            on the Android auto interface!
          </Typography>
        </Box>
      </Box>
      
      <Box
        className="screen secondary"
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: '1 1 auto',
          maxWidth: 900,
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
            <NotificationsActiveRoundedIcon  sx={{ fontSize: "40px" }} />
          </Box>
        </Box>
      </Box>
    </ScreenContainer>
  );
};

export default Screen;
