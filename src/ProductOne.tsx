import { Box, Typography, useMediaQuery } from "@mui/material";
import newOne from "./assets/NewOne.jpg";
import newTwo from "./assets/NewTwo.jpg";

export default function ProductOne() {
  const matches = useMediaQuery("(max-width: 640px)");
    const tablet = useMediaQuery("(max-width: 1024px)");

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e5e5e5",
      }}
    >
      <Box sx={{
        marginBottom: "2rem",
        marginTop: matches ? "2rem" : 0,
      }}>
        <Typography variant="h2" sx={{
            textAlign: "center",
        }}>Höstens nyheter</Typography>
      </Box>
      <Box
        sx={{
          maxWidth: "940px",
          width: "80%",
          display: "flex",
          flexDirection: matches ? "column" : "row",
          justifyContent: "center",
          gap: tablet ? "3rem" : "5rem",
          alignItems: "center",
          marginBottom: "7rem",
        }}
      >
        <Box sx={{ width: "50%", display: "flex", justifyContent: "center" }}>
          <img
            src={newOne}
            alt="Product One"
            style={{
              width: "100%",
              minWidth: tablet ? "300px" : "400px" ,
              maxWidth: "400px",
              height: "auto",
              margin: "0 auto",
            }}
          />
        </Box>
        <Box sx={{ width: "50%", display: "flex", justifyContent: "center" }}>
          <img
            src={newTwo}
            alt="Product Two"
            style={{
              width: "100%",
              minWidth: tablet ? "300px" : "400px" ,
              maxWidth: "400px",
              height: "auto",
              margin: "0 auto",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
