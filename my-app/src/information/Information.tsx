import {Link, useNavigate, useParams} from "react-router-dom";
import {getRepos, getUserData} from "../api/github-api";
import React, {useState} from "react";
import {Avatar, Box, Button, Card, CircularProgress, Typography} from "@mui/material";
import './Information.css';

interface userData {
  login: string,
  avatar_url: string;
}

export const Information = () => {
  const {user} = useParams();
  const navigate = useNavigate();
  const [repos, setRepos] = useState<{ name: string }[]>([]);
  const [orgs, setOrgs] = useState<{ user: userData, orgs: userData[] }>({user: {login: "", avatar_url: ""}, orgs: []});
  React.useEffect(() => {
    const fetchData = async () => {
      const response: { name: string }[] = await getRepos(user as string).catch(() => {
        navigate('/error');
      });
      const organisations: { orgs: any; user: any } | void = await getUserData(user as string).catch(() => {
        navigate('/error');
      }) as { orgs: userData, user: userData[] };
      setRepos(response);
      setOrgs(organisations);
    };
    fetchData();
  }, [user, navigate]);
  if (repos.length === 0 && orgs.user.login.length === 0 && orgs.orgs.length === 0) {
    return (
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
        <CircularProgress/>
      </Box>);
  }
  return (
    <Box className="Info-box">
      <Box className="Info-box-header">
        <Box className="Info-box-user">
          <Avatar src={orgs.user.avatar_url}/>
          <Typography sx={{margin: "4.5rem 2rem 4rem 0"}}>{orgs.user.login}</Typography>
        </Box>
        <Link to="/">
          <Button variant="contained" sx={{margin: "4rem 8rem 4rem"}}>Back</Button>
        </Link>
      </Box>
      <Box className="Info-box-data">
        <div>
          <div className="User-info-header">User repositories:</div>
          {repos.map((value, index) => {
            return (
              <Card key={index} sx={{backgroundColor: "#62727b"}}>
                {value.name}
              </Card>);
          })}
          {repos.length === 0 && <Typography>No repositories</Typography>}
        </div>
        <div>
          <div className="User-info-header">User organisations:</div>
          {orgs.orgs.map((value) => {
            return (
              <Card key={value.login} sx={{backgroundColor: "#62727b"}}>
                {value.login}
              </Card>);
          })}
          {orgs.orgs.length === 0 && <Typography>No organisations</Typography>}
        </div>
      </Box>
    </Box>
  );
};