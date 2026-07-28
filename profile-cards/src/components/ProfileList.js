import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, CircularProgress } from '@mui/material';
import ProfileCard from './ProfileCard';

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/profiles')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch profiles');
        }
        return response.json();
      })
      .then(data => {
        setProfiles(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
        <CircularProgress color="primary" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3} justifyContent="center" style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto', padding: '16px' }}>
      {profiles.map(profile => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={profile.id}>
          <ProfileCard profile={profile} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProfileList;
