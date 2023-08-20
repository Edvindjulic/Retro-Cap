import { Box, Button, Typography, useMediaQuery } from "@mui/material";

export default function Call2Action() {
  const matches = useMediaQuery("(max-width: 640px)");
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "300px",
        backgroundColor: "#e5e5e5",
      }}
    >
      <Box
        sx={{
          maxWidth: "940px",
          display: "flex",
          flexDirection: matches ? "column" : "row",
          alignItems: "center",
          margin: "0 auto",
          padding: "5rem 0",
          gap: matches ? "4rem" : "8rem",
        }}
      >
        <Box sx={{ flex: 1, marginLeft: "2rem" }}>
          <Typography sx={{ width: "200px",
            wordWrap: matches ? "break-word" : "normal",
          }}>
            Som medlem hos oss öppnar du dörren till en värld av kepsglädje och
            stil. Upplev kepsarnas förtrollande värld på närmare håll med
            förmåner skräddarsydda för dig. Gå med idag och sätt kronan på
            verket av din hattkollektion!
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Button
            variant="contained"
            sx={{
              width: "200px",
              height: "40px",
              backgroundColor: "#079395",
              "&:hover": {
                backgroundColor: "#006075",
              },
              color: "black",
              fontSize: "12px",
            }}
          >
            Bli medlem
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
