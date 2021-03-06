import React, { useEffect, useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { applicationData } from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const ApplicationList = () => {
  const classes = useStyles();

  const [applications, setApplications] = useState([]);
    useEffect(() => {
        GetApplications()
  }, [])
  
  const GetApplications = () => {
      
      setApplications(applicationData)
  }

  const ViewApplication = id => {
    window.location = '/view-application/'+id
  }

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">    
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Morgage Applications
              </Typography>
            </Box>
          </Box>
          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ApplicationID</TableCell>
                <TableCell align="left">Application Type</TableCell>
                <TableCell align="left">Applicant</TableCell>
                <TableCell align="left">National ID</TableCell>
                <TableCell align="left">Nationality</TableCell>
                <TableCell align="left">Avatar</TableCell>
                <TableCell align="left">Date of Submission</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {applications.map((application) => (
                <TableRow key={application.applicationDetails.applicationId}>
                  <TableCell align="right">{application.applicationDetails.applicationId}</TableCell>
                  <TableCell align="left">{application.applicationDetails.applicationType}</TableCell>
                  <TableCell align="left">{application.personalDetails.surname +' '+application.personalDetails.otherNames}</TableCell>
                  <TableCell align="left">{application.personalDetails.idNumber}</TableCell>
                  <TableCell align="left">{application.personalDetails.nationality}</TableCell>
                  <TableCell align="left">
                    <Box display="flex" justifyContent="center">
                      <Avatar src={application.avatar} />
                    </Box>
                  </TableCell>
                  <TableCell align="left">{application.applicationDetails.submissionDatetime}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => ViewApplication(application.id)}>View</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
      </Container>
    </div>
    
  );
}

export default ApplicationList;