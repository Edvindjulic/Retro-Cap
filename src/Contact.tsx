import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";

export default function Contact() {
  const matches = useMediaQuery("(max-width: 640px)");
  return (
    <Box
      sx={{
        maxWidth: "940px",
        minHeight: "300px",
        display: "flex",
        flexDirection: matches ? "column" : "row",
        justifyContent: "center",
        gap: matches ? "4rem" : "10rem",
        margin: matches ? "5rem 0" : "3.5rem 0",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }}
      >
        <LocalPhoneIcon sx={{ fontSize: 70 }} />
        <Typography sx={{ maxWidth: "200px", textAlign: "center" }}>
          Behöver du hjälp eller har du synpunkter på din beställning? Ring oss
          på 0701234567
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }}
      >
        <CommentOutlinedIcon sx={{ fontSize: 70 }} />
        <Typography sx={{ maxWidth: "200px", textAlign: "center" }}>
          Behöver du hjälp med att välja rätt keps för dig? Chatta med en av
          våra medarbetare!
        </Typography>
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
            marginTop: "1rem",
          }}
        >
          Chatta
        </Button>
      </Box>
    </Box>
  );
}
