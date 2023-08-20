import { Box, Button, Card, Typography, useMediaQuery } from "@mui/material";
import productJaws from "./assets/productJaws.jpg";
import productTerminator from "./assets/productTerminator.jpg";
import productTitanic from "./assets/productTitanic.jpg";

export default function ProductTwo() {
  const matches = useMediaQuery("(max-width: 640px)");
  const tablet = useMediaQuery("(max-width: 1024px)");

  return (
    <Box sx={{
        width: "100%",
        minHeight: "600px",
    }}>
      <Box
        sx={{
          maxWidth: matches ? "100%" : "940px",
          display: "flex",
          flexDirection: matches ? "column" : "row",
          justifyContent: "center",
          gap: tablet ? "1rem" : "2rem",
          margin: "5rem auto",
        }}
      >
        <Card sx={{ flex: 1, maxWidth: matches ? "300px" : (tablet ? "350px" : "auto"), margin: "0 auto" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img src={productJaws} alt="Product Jaws" />
            <Typography sx={{ padding: "2.5rem" }}>
              Filmhistoriens mest ikoniska citat? För dig som har koll på läget!
            </Typography>
            <Typography sx={{ padding: "2.5rem" }}>Pris: 299kr</Typography>
            <Box sx={{ textAlign: "center", paddingBottom: "2rem" }}>
              <Button
                variant="contained"
                sx={{
                  width: "100px",
                  height: "40px",
                  backgroundColor: "#079395",
                  "&:hover": {
                    backgroundColor: "#006075",
                  },
                  color: "black",
                  fontSize: "12px",
                }}
              >
                Läs mer
              </Button>
            </Box>
          </Box>
        </Card>
        <Card sx={{ flex: 1, maxWidth: matches ? "300px" : (tablet ? "350px" : "auto"), margin: "0 auto" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img src={productTerminator} alt="Product Jaws" />
            <Typography sx={{ padding: "2.5rem" }}>
              Ett stenhårt löfte oavsett om du är en cyborg eller ej. OBS!
              Muskler ingår ej.
            </Typography>
            <Typography sx={{ padding: "2.5rem" }}>Pris: 299kr</Typography>
            <Box sx={{ textAlign: "center", paddingBottom: "2rem" }}>
              <Button
                variant="contained"
                sx={{
                  width: "100px",
                  height: "40px",
                  backgroundColor: "#079395",
                  "&:hover": {
                    backgroundColor: "#006075",
                  },
                  color: "black",
                  fontSize: "12px",
                }}
              >
                Läs mer
              </Button>
            </Box>
          </Box>
        </Card>
        <Card sx={{ flex: 1, width: matches ? "300px" : (tablet ? "350px" : "auto"), margin: "0 auto" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img src={productTitanic} alt="Product Jaws" />
            <Typography sx={{ padding: "2.5rem" }}>
              När du vill påtala för andra hur bra du är. Leonardo Di Caprio’s
              citat från Titanic.{" "}
            </Typography>
            <Typography sx={{ padding: "2.5rem" }}>Pris: 299kr</Typography>
            <Box sx={{ textAlign: "center", paddingBottom: "2rem" }}>
              <Button
                variant="contained"
                sx={{
                  width: "100px",
                  height: "40px",
                  backgroundColor: "#079395",
                  "&:hover": {
                    backgroundColor: "#006075",
                  },
                  color: "black",
                  fontSize: "12px",
                }}
              >
                Läs mer
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
