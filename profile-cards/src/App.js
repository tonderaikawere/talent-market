import React from 'react';
import { Grid, Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfileList from './components/ProfileList';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import ProfileDetails from './components/ProfileDetails';

const App = () => {
  return (
    <Router>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Grid container spacing={0} sx={{ marginTop: '64px', flexGrow: 1 }}>
          <Grid item xs={12} md={3} sx={{ borderRight: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(3, 7, 18, 0.2)' }}>
            <JobList />
          </Grid>
          <Grid item xs={12} md={9}>
            <Routes>
              <Route path="/" element={<ProfileList />} />
              <Route path="/jobs/:id" element={<JobDetails />} />
              <Route path="/profiles/:id" element={<ProfileDetails />} />
            </Routes>
          </Grid>
        </Grid>
      </Box>
    </Router>
  );
};

export default App;
