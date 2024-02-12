import { useEffect, useState } from "react";
import { Container, Typography, Card, CardActionArea, CardContent, CardMedia, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "./Header";

const UserList = () => {
    const [users, setUsers] = useState([])
    const [usersInfo, setUsersInfo] = useState([])
    const getUsersList = async () => {
        const data = await fetch("https://api.github.com/users");
        const json =  await data.json();
        setUsers(json);
    }

    const getMoreInfoOfUser = async (loginName) => {
        const data = await fetch("https://api.github.com/users/" + loginName );
        const json = await data.json();
        return json;
    }

    useEffect(() => {
        getUsersList();
    }, []);

    const abcd = async () => {
        const promiseArr = users.length && users.map((user) => {
            return getMoreInfoOfUser(user.login);
        })
        const moreUserInfo = promiseArr && await Promise.all(promiseArr);
        moreUserInfo && setUsersInfo(moreUserInfo);
    }

    abcd();

    return (
        <div>
            <Header />
            <Container maxWidth="md" style={{justifyContent : "centre" , marginTop : "50px"}} >
                <Grid container spacing = {4} style = {{display : "flex" }}>
                {
                 usersInfo && usersInfo.map((user) => {
                    return (
                        <Grid item xs = {12} md = {4} sm = {6} key ={user.id} >
                        <Card sx={{ maxWidth: 345, height : "100%", }}>
                        <CardActionArea component = {Link} to = {"/userdetails/" + user?.login}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={user.avatar_url}
                            alt="user photo"
                        />
                        <CardContent style = {{flexGrow : "1"}}>
                            <Typography gutterBottom variant="h5" component="div">
                                {user.login}
                            </Typography>
                            <Typography variant="h3" color="black">
                                {user.name ? user.name : 'GitHub User'}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        </Card>
                        </Grid>

                   )
                })
            }
                </Grid>
            

            </Container>
        </div>
    )
}

export default UserList;