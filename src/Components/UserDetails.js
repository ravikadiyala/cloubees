import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Paper, Typography, Grid, Avatar } from '@mui/material';
import Header from "./Header";


const UserDetails = () => {
    const {login} = useParams();
    const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
        fetchMoreDetails();
    },[]);

    const fetchMoreDetails = async () => {
        const data = await fetch("https://api.github.com/users/" + login);
        const json = await data.json();
        setUserDetails(json);
    }
    const paperStyle = {
        padding: '20px',
        textAlign: 'center',
        color: 'black',
        marginTop: "20px"
      };

      const imageContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
        position: 'relative',
        marginTop: '20px'

      };
    
      const avatarStyle = {
        width: '150px',
        height: '150px',
        backgroundColor: 'lightgray',
      };

    return (
        <div style={{ flexGrow: 1, padding: '20px' }}>
        <Header />
        {
            userDetails && 
            <Grid container spacing = {1}>
                <Grid item xs={12}>
                    <div style={imageContainerStyle}>
                        <Avatar alt="User" src={userDetails.avatar_url} style={avatarStyle} />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Paper style={paperStyle}>
                    <Typography variant="h2"> {userDetails.login} </Typography>
                    <Typography variant="h5">Username: {userDetails.name}</Typography>
                    <Typography variant="h5">Company: {userDetails.company ? userDetails.company : 'GitHub'}</Typography>
                    <Typography variant="h5">followers: {userDetails.followers} </Typography>
                    <Typography variant="h5">following: {userDetails.following} </Typography>
                    <Typography variant="h5">Public Repositories: {userDetails.public_repos}</Typography>
                    <Typography variant="body1">Bio: {userDetails.bio ? userDetails.bio : 'I am a Github User, I have my Data in github api'}</Typography>
                    <Typography variant="body1">Email: {userDetails.email ? userDetails.email : 'githubuser@gmail.com'}</Typography>
                    <Typography variant="body1">Location: {userDetails.location ? userDetails.location : 'GitHub office location'}</Typography>
                    <Typography variant="body1">Website: {userDetails.html_url}</Typography>
                    <Typography variant="body1">twitter user name: {userDetails.twitter_username ? userDetails.twitter_username : "Not in twitter"}</Typography>
                    </Paper>
                </Grid>
            </Grid>
        }
 
      </div>
    )
}

export default UserDetails;