import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./ListItem";
import Chart from "./Chart";
import Deposits from "./Deposits";

import SalesManagerPanel from "../SalesManager";

const mdTheme = createTheme();

const MainChart = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  // const [refundList, setRefundList] = useState([]);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [refundId, setRefundId] = useState(-1);
  // const startRef = useRef("");
  // const endRef = useRef("");
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");
  // const [isDateValid, setIsDateValid] = useState(false);
  // const addNewCategory = async (event) => {
  //   setStartDate(startRef.current.value);
  //   setEndDate(endRef.current.value);

  //   if (startDate !== "" && endDate !== "") {
  //     console.log("date start", startDate, "date end", endDate);
  //     setIsDateValid(!isDateValid);
  //   }
  // };

  // const [orderList, setData] = useState([]);
  // useEffect(() => {
  //   if (startDate !== "" && endDate !== "") {
  //     getData(
  //       `http://164.92.208.145/api/v1/users/orders/get_all_invoices?start=${startDate}&end=${endDate}`
  //     )
  //       .then((res) => {
  //         console.log("Order response", res.data);

  //         setData(res.data);
  //         setIsLoaded(true);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [isDateValid]);
  const chartWidget = (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[500],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 400,
                }}
              >
                <Chart />
              </Paper>
            </Grid>
            <Grid
              sx={{ marginTop: 5, mt: 4, mb: 4 }}
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: "10vh" }}
            >
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 180,
                }}
              >
                <Deposits />
              </Paper>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
  return (
    <SalesManagerPanel pageIndex={1} widget={chartWidget}></SalesManagerPanel>
  );
};

export default MainChart;
