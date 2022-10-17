import React from "react";
import bikes from "../assets/projects/bikes.jpg";
import "../styles/Recent.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Recent = () => {
  return (
    <div className="recent" id="projects">
      <h2>Recent projects</h2>
      <div className="project-card">
        <Card sx={{ maxWidth: 350 }}>
          <CardActionArea>
            <CardMedia component="img" height="180" image={bikes} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Rad Power Bikes | E-commerce
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Live demo
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Recent;
