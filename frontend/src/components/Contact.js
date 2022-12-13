import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import "../App.css";
import React from "react";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#f5e4d7",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#f5e4d7",
    },
    "&:hover fieldset": {
      borderColor: "#f5e4d7",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#f5e4d7",
    },
  },
});

const Contact = () => {
  return (
    <Container
      className="contact"
      maxWidth="sm"
      sx={{
        padding: "16px",
      }}
    >
      <Box className="contact-icon">
        <ContactsOutlinedIcon fontSize="large" />
      </Box>
      <Box className="contact-title">
        <Typography variant="h3">Contact</Typography>
      </Box>
      <Box component="form" className="contact-form" sx={{ mt: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CssTextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CssTextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <CssTextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="Your Email"
              autoComplete="email"
              autoFocus
            />
            <Grid item xs={12}>
              <CssTextField
                fullWidth
                required
                label="Message"
                multiline
                rows={10}
                maxRows={20}
                sx={{
                  color: "#78646a",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            width: "50%",
            bgcolor: "#78646a",
          }}
        >
          Contact
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
