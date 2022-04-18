import themeOptions from "../../theme";
import { AppBar, ThemeProvider, Box, CssBaseline } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HttpsTwoToneIcon from "@mui/icons-material/HttpsTwoTone";
const addressListHeader = () => {
  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline/>
      <AppBar color="transparent" elevation={0} position="static">
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h2" noWrap component="div" sx={{ m: 2, pl: 16 }}>
            Voidture
          </Typography>
          <Stack direction="column" justifyContent="center" alignItems="center">
            
              <LockOutlinedIcon
                fontSize="large"
                sx={{ pt: 3, pr: 12 }}
              ></LockOutlinedIcon>
            
            <Typography variant="subtitle2"  sx={{ pb: 2, pr: 12 }} style={{ color: 'red' }}>
              SSL SECURED
            </Typography>
          </Stack>
        </Stack>
      </AppBar>
    </ThemeProvider>
  );
};

export default addressListHeader;
