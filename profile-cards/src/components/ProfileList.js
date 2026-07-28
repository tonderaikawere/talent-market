import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, CircularProgress } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import ProfileCard from './ProfileCard';

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

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

  const filteredProfiles = profiles.filter(profile => {
    const term = searchTerm.toLowerCase();
    return (
      profile.name.toLowerCase().includes(term) ||
      profile.description.toLowerCase().includes(term) ||
      profile.summary.toLowerCase().includes(term)
    );
  });

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
        <Typography color="error" sx={{ fontFamily: "'Outfit', sans-serif" }}>Error: {error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, height: 'calc(100vh - 64px)', overflowY: 'auto' }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          fontFamily: "'Outfit', sans-serif",
          mb: 3,
          color: '#f3f4f6',
        }}
      >
        {searchTerm ? `Search Results for "${searchTerm}"` : 'Recommended Talent'}
      </Typography>

      {filteredProfiles.length > 0 ? (
        <Grid container spacing={3}>
          {filteredProfiles.map(profile => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={profile.id}>
              <ProfileCard profile={profile} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" sx={{ color: '#9ca3af', fontFamily: "'Outfit', sans-serif", mb: 1 }}>
            No talent found
          </Typography>
          <Typography variant="body2" sx={{ color: '#6b7280', fontFamily: "'Outfit', sans-serif" }}>
            Try adjusting your search terms or keywords.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ProfileList;
