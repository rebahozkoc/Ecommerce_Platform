import ProfilePageContainer from "./profilePageContainer";
import { Typography, Card, Stack, Box } from "@mui/material";
import { getCookie } from "../recoils/atoms";
const UpdateInformationPage = () => {
  const informationWidget = (
    <Card>
      <Stack direction="row">
        <Typography variant="h6">User Email:</Typography>
        <Box sx={{ m: 1 }}></Box>
        <Typography variant="body1">{getCookie("name")}</Typography>
      </Stack>
    </Card>
  );

  return (
    <ProfilePageContainer
      pageIndex={2}
      widget={informationWidget}
    ></ProfilePageContainer>
  );
};

export default UpdateInformationPage;
