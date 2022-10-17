import React, { useRef } from "react";
import { Button, Grid, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Contacts.css";

export const Contact = () => {
  const form = useRef();

  const notify = () =>
    toast.success("Email sent!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l5k1h7m",
        "template_li052s4",
        form.current,
        "jWllRSXuSbTXpIyLr"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <h2>Contact me</h2>

      <form ref={form} onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Name"
              type="name"
              name="from_name"
              fullWidth
              placeholder="Name"
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@email.com"
              fullWidth
              name="from_name"
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Message"
              name="message"
              type="text"
              placeholder="Write your message!"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
          <Button variant="outlined" type="submit" className="btn-send">
            Send
          </Button>
        </Grid>
        <ToastContainer />
      </form>
    </div>
  );
};
