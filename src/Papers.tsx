import { useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import CountrySelector from './list';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';

const Spac = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    margin: '3rem 30rem',
  },
  [theme.breakpoints.only('md')]: {
    margin: '3rem 20rem',
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '1rem',
  },
}));

const Spacs = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: 300,
    textAlign: 'center',
  },
}));

export default function SimplePaper() {
  const [value, setValue] = useState('');

  const changeHandler = (value: string) => {
    console.log(value);
    setValue(value);
  };

  const disabler = () => {
    if (value.length > 5) {
      return false;
    }
    return true;
  };

  const redirectFunc = () => {
    let redStr= `https://wa.me/${value}`
    console.log('I was clicked');
    // return <Navigate to={redStr} replace/>
    window.location.href=redStr;
  };

  return (
    <Spac>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 500,
            height: 550,
          },
        }}
      >
        <Paper elevation={2}>
          <Spacs>
            <Box sx={{ textAlign: 'center', pt: 2, px: 4, lineHeight: 10 }}>
              <Typography variant="h4" component="h2">
                Instructions
              </Typography>
              <Typography variant="h6">
                Watsapp Redirect is a service that uses the <b>wa.me</b> route
                provided by watsapp<br></br>It adds the provided number and
                country code in the correct format and allows you to chat without saving the phone number.
              </Typography>
            </Box>
            <Box sx={{ px: '1.2rem', pt: '2rem' }}>
              <CountrySelector value={value} valChange={changeHandler} />
              <Button
                variant="contained"
                disabled={disabler()}
                sx={{ mt: 3, ml: 2, background: '#009688' }}
                onClick={redirectFunc}
              >
                Start Chat
              </Button>
            </Box>
          </Spacs>
        </Paper>
      </Box>
    </Spac>
  );
}