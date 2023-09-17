import React from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { Favorite, FavoriteBorder, SportsBar } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

import { useBreweries } from "../hooks/breweis";

interface ImgProps {
  src: string;
  alt: string;
}

const Img = styled("img")<ImgProps>({
  height: "60vh",
  width: "100%",
  borderRadius: " 0 0 .5em .5em",
});

const ImageBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});
const SingleBrew = () => {
  const { breweries, removePrefix } = useBreweries();
  const { id } = useParams();

  const selectedBrewery = breweries.find((brewery) => brewery.id === id);

  if (!selectedBrewery) {
    return (
      <Typography variant="h6">The brewery with this id not found.</Typography>
    );
  }

  return (
    <Box
      sx={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1628361747763-78c68afe7fbc?ixlib=rb-4.0.3")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <Card
        key={selectedBrewery.id}
        sx={{ margin: "3em", width: { xs: "75%", sm: "40%" } }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              <SportsBar />
            </Avatar>
          }
          title={removePrefix(selectedBrewery.name)}
          subheader={selectedBrewery.city}
        />
        <CardMedia
          component="img"
          height="40%"
          image={`https://source.unsplash.com/300x150/?beer`}
          alt={selectedBrewery.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Country: {selectedBrewery.country}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            City: {selectedBrewery.city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Street: {selectedBrewery.street}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Brewery type: {selectedBrewery.brewery_type}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default SingleBrew;
