import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";

export default function Footer() {
  const matches = useMediaQuery("(max-width: 640px)");

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "220px",
        backgroundColor: "#000000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "640px",
          display: "flex",
          flexDirection: matches ? "column" : "row",
          justifyContent: "space-between",
          gap: "3rem",
          marginTop: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: matches ? "start" : "center",
            marginBottom: "1rem",
            height: "100%",
            flex: 1,
            order: matches ? 2 : 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              marginBottom: "1rem",
              gap: "1rem",
              height: "100%",
            }}
          >
            <FacebookIcon sx={{ fontSize: 40, color: "white" }} />
            <InstagramIcon sx={{ fontSize: 40, color: "white" }} />
            <TwitterIcon sx={{ fontSize: 40, color: "white" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "white",
            }}
          >
            <Typography>E-post: hello@retrocaps.se</Typography>
            <Typography>Telefon: 0701234567</Typography>
            <Typography>Besöksadress: Kepsgatan 55, Göteborg</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: matches ? "column" : "row",
            alignItems: "center",
            gap: matches ? "1rem" : 0,
            height: "100%",
            order: matches ? 1 : 2,
          }}
        >
          <input
            type="email"
            placeholder="Anmäl dig till vårt nyhetsbrev"
            style={{
              height: "40px",
              width: "180px",
              padding: "0.5rem",
              boxSizing: "border-box",
              fontSize: "12px",
              border: "1px solid gray",
              borderRadius: "4px",
              marginRight: "1rem",
            }}
          />

          <Button
            variant="contained"
            sx={{
              width: "60px",
              height: "40px",
              backgroundColor: "#079395",
              "&:hover": {
                backgroundColor: "#006075",
              },
              color: "black",
              fontSize: "12px",
            }}
          >
            Skicka
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
