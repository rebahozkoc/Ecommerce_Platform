import AddressListHeader from "./addressListHeader";
import AddressListTabBar from "./addressListTabBar";
import { ThemeProvider, Box, Container } from "@mui/material";
import { AppBar } from "@mui/material";
import themeOptions from "../../theme";
import AddressListSummary from "./addressListSummary";
import { CssBaseline } from "@mui/material";
const addressListPage = () => {
  return (
    <ThemeProvider theme={themeOptions}>
        
      <Box sx={{ bgcolor: "white.main", ml: 12, mr: 12}}>
        <AddressListHeader></AddressListHeader>
        <Box
          sx={{
            mt: 2,
            mb: 2,
            ml: 16,
            mr: 16,
            display: "grid",
            gap: 4,
            gridTemplateColumns: "auto auto auto auto auto auto",
            gridColumn: "1 / 3",
          }}
        >
          <Box sx={{ gridColumn: "span 5" }}>
            <AddressListTabBar></AddressListTabBar>
          </Box>

          <AddressListSummary></AddressListSummary>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default addressListPage;
