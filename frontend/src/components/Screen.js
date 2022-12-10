import { Box, Container } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import FastRewindRoundedIcon from "@mui/icons-material/FastRewindRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import FastForwardRoundedIcon from "@mui/icons-material/FastForwardRounded";
import MicNoneRoundedIcon from "@mui/icons-material/MicNoneRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";
import React from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  useZoomPanContext,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/united-states/higher-quality-5m/5m-US-congressional-districts-2015.json";

const AddZoom = () => {
  const ctx = useZoomPanContext();

  // ctx.x
  // ctx.y
  // ctx.k
  // ctx.transformString

  return <circle cx={0} cy={0} r={10} />;
};

const Screen = () => {
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
          <ComposableMap height={450}>
            <ZoomableGroup>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} />
                  ))
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
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
