import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const darkTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#009688',
      },
    },
  });

const ResponsiveAppBar = () => {

  return (
    <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { md: 'flex' } }}
            >
                Watsapp Redirect
            </Typography>

            </Toolbar>
        </Container>
        </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
