import React, { useState } from "react";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
export const Contact = () => {
  const [formState, setFormState] = useState({});

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      SecureToken: "6a9b14e7-e464-4302-9388-0f2e1f801316",
      To: "tayracutri10@gmail.com",
      From: formState.email,
      Subject: "This is the subject",
      Body: `${formState.name} contacted you.`,
    };
    if (window.Email) {
      window.Email.send(config).then(() => alert("email sent"));
    }
  };

  return (
    <div id="contact">
      <h2>Contact me</h2>

      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Name"
              type="name"
              name="name"
              fullWidth
              onChange={handleChange}
              value={formState.name || ""}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@email.com"
              fullWidth
              onChange={handleChange}
              value={formState.email || ""}
              name="email"
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label="Message" type="text" placeholder="" fullWidth />
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
          <Button variant="outlined">Send</Button>
        </Grid>
      </form>
    </div>
  );
};
