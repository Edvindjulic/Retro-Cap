import MenuIcon from "@mui/icons-material/Menu";
import { Box, Link, useMediaQuery } from "@mui/material";

export default function Header() {
  const tablet = useMediaQuery("(max-width: 1024px)");
  const matches = useMediaQuery("(max-width: 640px)");

  return (
    <Box
      sx={{
        backgroundColor: "black",
        height: "80px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "940px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            padding: "1rem 0 0 1rem",
          }}
        >
          <Link href="#">
            <img
              src="https://github.com/Edvindjulic/Retro-Cap/assets/117123951/05a4d289-5e74-49cc-ab5d-86f4257a0c15"
              alt="logo"
              style={{ height: "80px", padding: "5px 0" }}
            />
          </Link>
        </Box>

        {matches ? (
          <MenuIcon
            sx={{
              color: "white",
              fontSize: "3rem",
              marginRight: "1rem",
            }}
          />
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: tablet ? "5rem" : "8rem",
              marginRight: tablet ? "2rem" : 0,
            }}
          >
            <Link href="#" sx={{ color: "white", textDecoration: "none" }}>
              Produkter
            </Link>
            <Link href="#" sx={{ color: "white", textDecoration: "none" }}>
              Bli medlem
            </Link>
            <Link href="#" sx={{ color: "white", textDecoration: "none" }}>
              Kontakta oss
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
}
