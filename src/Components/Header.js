import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import HomeIcon from '@mui/icons-material/Home';
import { AppBar, Icon, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <AppBar position="relative">
        <Toolbar>
            <Icon edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <AllInclusiveIcon /> {/* Similar to cloudBees symbol*/}
            </Icon>
            <Typography variant="h5">
                cloudBees
            </Typography>
            <Icon size="large" edge="end" color="inherit" style = {{ marginLeft : "auto" }} component = {Link} to = {"/"}>
                <HomeIcon /> {/* clicking on it will take to userList page*/}
            </Icon>
        </Toolbar>
        </AppBar>
    )
}

export default Header;