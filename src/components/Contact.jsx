import React, { useRef, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Contact.css";

export const Contact = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const form = useRef();

  const notifySuccess = () =>
    toast.success("Email sent!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setMessage("");
      setEmail("");
      setName("");
    }, 1000);

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

          notifySuccess();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <h2>Contact me</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="26"
        height="26"
        viewBox="0 0 48 48"
        style={{ fill: "black" }}
      >
        <path
          fill="#e0e0e0"
          d="M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11v26C2,38.933,3.567,40.5,5.5,40.5z"
        ></path>
        <path
          fill="#d9d9d9"
          d="M26,40.5h16.5c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11L26,40.5z"
        ></path>
        <path
          fill="#eee"
          d="M6.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L6.745,40.5z"
        ></path>
        <path
          fill="#e0e0e0"
          d="M25.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L18.771,31.616L25.745,40.5z"
        ></path>
        <path
          fill="#ca3737"
          d="M42.5,9.5h-37C3.567,9.5,2,9.067,2,11v26c0,1.933,1.567,3.5,3.5,3.5H7V12h34v28.5h1.5c1.933,0,3.5-1.567,3.5-3.5V11C46,9.067,44.433,9.5,42.5,9.5z"
        ></path>
        <path
          fill="#f5f5f5"
          d="M42.5,7.5H24H5.5C3.567,7.5,2,9.036,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.036,44.433,7.5,42.5,7.5z"
        ></path>
        <path
          fill="#e84f4b"
          d="M43.246,7.582L24,21L4.754,7.582C3.18,7.919,2,9.297,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.297,44.82,7.919,43.246,7.582z"
        ></path>
      </svg>
      <span>tayracutri10@gmail.com</span>
      <form ref={form} onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <input
              label="Name"
              type="name"
              name="from_name"
              fullWidth
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-field"
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <input
              label="Email"
              type="email"
              placeholder="email@email.com"
              name="from_name"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-field"
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <textarea
              label="Message"
              name="message"
              type="text"
              placeholder="Write your message"
              fullWidth
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="text-field"
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
