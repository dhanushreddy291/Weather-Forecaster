import * as React from "react";
import "./weather.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function weather({ weatherData }) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://i0.wp.com/shinesolutions.com/wp-content/uploads/2020/03/test-resize.jpg?fit=320%2C240&ssl=1"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherData.location.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Temperature is:{" "}
              <button className="btn btn-primary">
                {weatherData.current.temp_c} °C
              </button>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
