import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function OutlinedCard(props) {
  const isOpen = props.isOpen;
  const card = (
    <React.Fragment>
      <CardContent sx={{maxWidth: 400, minHeight: 120, }}>
  
        <Typography variant="h6" component="div" fontWeight= {550} color="primary.main">
        {props.title}
        </Typography>
        <Typography sx={{ mb: 1}}>
          {props.description}
        </Typography>
        
      </CardContent>
      <CardActions>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{}}>
      <Card variant="outlined"  sx={{bgcolor: isOpen ? "#FFFFFF" :"#EAECEC", border:0, borderRadius:0}}>{card}</Card>
      
    </Box>
  );
}