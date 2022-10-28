import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function ResultItem({ name, category, nutriscore }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  const getNutriScoreColor = (score) => {
    if (score === "A") return "green";
    if (score === "B") return "green";
    if (score === "C") return "green";
    if (score === "D") return "gold";
    if (score === "E") return "red";
    return "grey";
  };

  const nutriStyle = { color: getNutriScoreColor(nutriscore) };

  return (
    <Card
      sx={{
        boxShadow: "none",
        minHeight: "100px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: ".5rem",
        marginBottom: "1rem",
      }}
    >
      <Box display="flex" alignItems="center" gap=".5rem">
        <CardMedia
          component="img"
          height="100px"
          sx={{ width: "8rem", borderRadius: "20px" }}
          image="https://picsum.photos/200/300"
          alt="Product"
        />
        <CardContent
          sx={{
            padding: ".3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h5" color="grey">
            {category}
          </Typography>
          <Box display="flex" alignItems="center" gap=".5rem">
            <Brightness1Icon fontSize="xs" sx={nutriStyle} />
            <Typography variant="h5">Nutri-score : {nutriscore}</Typography>
          </Box>
        </CardContent>
      </Box>
      {isFavorite ? (
        <FavoriteIcon
          onClick={handleClick}
          fontSize="large"
          sx={{ color: "primary.main" }}
        />
      ) : (
        <FavoriteBorderIcon
          onClick={handleClick}
          fontSize="large"
          sx={{ color: "primary.main" }}
        />
      )}
    </Card>
  );
}

ResultItem.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  nutriscore: PropTypes.string,
};

ResultItem.defaultProps = {
  nutriscore: "Z",
};

export default ResultItem;
