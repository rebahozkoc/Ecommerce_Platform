import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import themeOptions from '../../theme';
import { Box, CardActionArea } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Stack } from '@mui/material';
export default function addressListGetOld(props) {
  if (props.isNew){
    return (
<Card sx={{width: props.isProfile ? 220: 350, minHeight: 100, display: "block", borderRadius:4, bgcolor:themeOptions.palette.secondary.dark, m:1}}>
      <CardContent sx={{pb:0, mb:0}}>
        <CardActionArea id={props.id} onClick={props.onClick} >
        <Typography variant="h6" component="div" sx={{ mb: 1 }} align="center">
         {props.title}
        </Typography>

        <Stack direction="row" alignItems="center" justifyContent="center"> 
        <AddIcon style={{ fontSize: 90 }} ></AddIcon>
        </Stack>  </CardActionArea>
      </CardContent>

    </Card>
    );
  }
  else{
  return (
    <Card sx={{width: props.isProfile ? 220: 350, minHeight: 100, display: "block", borderRadius:4, bgcolor:themeOptions.palette.secondary.light, m:1}}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{ mb: 1 }}>
         {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
          <br />
        
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{display: { md: "block" }}}>
        {props.isProfile ? (
              <Button id={props.id} size="small" color="primary" onClick={props.onClick}>
                Edit
              </Button>
            ) : (
              <></>
            )}
        <Button size="small">Delete</Button></Box>
        
      </CardActions>
    </Card>
  );
};
}
