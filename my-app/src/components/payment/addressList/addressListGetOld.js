import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import themeOptions from '../../theme';

export default function addressListGetOld(props) {
  return (
    <Card sx={{width: 350, minHeight: 100, display: "block", borderRadius:4, bgcolor:themeOptions.palette.secondary.light, m:1}}>
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
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
