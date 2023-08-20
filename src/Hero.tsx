import { Box, Typography, useMediaQuery } from "@mui/material";
import heroImage from "./assets/hero.jpg";

export default function Hero() {
  const matches = useMediaQuery("(max-width: 640px)");
  return (
    <Box
      sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "500px",
        position: "relative",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          top: "30%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: matches ? "20px" : "32px",
          padding: "10px",
          zIndex: 1,
          textShadow: "5px 5px 5px #000000",
          lineBreak: "auto",
          marginLeft: "2rem",
        }}
      >
        Det var bättre förr. <br /> Vi lovar att du hittar <br />
        något som klär dig.
      </Typography>
    </Box>
  );
}
