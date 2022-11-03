import React, { useEffect, useState } from "react";
import * as m from "@mui/material";
import axios from "axios";
import "../asset/css/myProfile.css";
import "../asset/css/barbers.css";
import ace from "../asset/images/aboutbackground.jpg";

function createData(date, time) {
  return { date, time };
}

const rows = [];

const MyProfile = () => {
  const [userData, setUserData] = useState([]);
  const [userAppointments, setUserAppointments] = useState([]);
  let name = userData.firstname + " " + userData.lastname;
  let username = userData.username;

  const styles = {
    background: {
      background: `url(${ace})`,
      backgroundRepeat: "no-repeat",
      // backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
    },
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    fetchApointments();
  }, []);

  const fetchUserData = () => {
    axios
      .get("http://localhost:5500/api/profile")
      .then((res) => {
        console.log("res: ", res);
        console.log("User: " + res.data);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchApointments = () => {
    axios
      .get("http://localhost:5500/api/getappointments")
      .then((res) => {
        setUserAppointments(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={styles.background}>
      <m.Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className="myProfile-basecontainer"
        sx={{
          width: { xl: "40%", lg: "50%", md: "60%", sm: "70%", xs: "80%" },
          height: "60%",
          background: "black",
          opacity: 0.8,
          borderRadius: "10px",
        }}
      >
        <m.Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          className="myProfile-innercontainer"
          margin={"auto"}
          sx={{
            // borderRadius: "10px",
            // border: "1px solid red",
            marginTop: 0,
            borderBottom: "3px solid white",
            width: "100%",
            height: "30%",
            flex: "0 100px",
            order: 0,
          }}
        >
          <m.Typography
            variant="h3"
            sx={{
              color: "white",
            }}
          >
            {name}
          </m.Typography>
        </m.Box>
        <m.Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          className="myProfile-innercontainer"
          sx={{
            borderBottom: "3px solid white",
            marginTop: 0,
            width: "100%",
            height: "20%",
            flex: "1 10px",
            order: 0,
          }}
        >
          <m.Typography
            variant="h5"
            sx={{
              color: "white",
            }}
          >
            {username}
          </m.Typography>
        </m.Box>
        {/* Appointments are filled in this box*/}
        <m.Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          className="myProfile-innercontainer"
          margin={"auto"}
          sx={{
            borderRadius: "10px",
            marginTop: 0,
            width: "100%",
            height: "50%",
            flex: "10 10px",
          }}
        >
          <m.TableContainer component={m.Paper}>
            <m.Table aria-label="simple table" stickyHeader>
              <m.TableHead>
                <m.TableRow>
                  <m.TableCell align="left">Date</m.TableCell>
                  <m.TableCell align="right">Time</m.TableCell>
                </m.TableRow>
              </m.TableHead>
              <m.TableBody>
                {userAppointments.map((row) => (
                  <m.TableRow key={row.id}>
                    <m.TableCell component="th" scope="row">
                      {row.date}
                    </m.TableCell>
                    <m.TableCell align="right">{row.time}</m.TableCell>
                  </m.TableRow>
                ))}
              </m.TableBody>
            </m.Table>
          </m.TableContainer>
        </m.Box>
      </m.Box>
    </div>
  );
};

export default MyProfile;

/**
 * {data.map((row) => (
           <TableRow key={row.id}>
             <m.TableCell component="th" scope="row">
               {row.name}
             </m.TableCell>
             <m.TableCell align="right">{row.username}</TableCell>
             <TableCell align="right">{row.email}</TableCell>
             <TableCell align="right">{row.phone}</TableCell>
             <TableCell align="right">{row.website}</TableCell>
           </TableRow>
 */
