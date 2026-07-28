import React, { useEffect, useState } from 'react';
import { List, ListItemButton, ListItemText, ListItemAvatar, Avatar, Typography, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch('http://localhost:5000/api/jobs')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <Box sx={{ p: 3, height: 'calc(100vh - 64px)', overflowY: 'auto' }}>
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          color: '#9ca3af',
          mb: 2,
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        Active Openings
      </Typography>
      <List sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {jobs.map(job => {
          const isActive = location.pathname === `/jobs/${job.id}`;
          return (
            <ListItemButton
              key={job.id}
              component={Link}
              to={`/jobs/${job.id}`}
              selected={isActive}
              sx={{
                borderRadius: '12px',
                p: 1.5,
                background: isActive ? 'linear-gradient(45deg, rgba(168, 85, 247, 0.15), rgba(99, 102, 241, 0.15))' : 'rgba(255, 255, 255, 0.02)',
                border: isActive ? '1px solid rgba(168, 85, 247, 0.4)' : '1px solid rgba(255, 255, 255, 0.05)',
                '&.Mui-selected': {
                  background: 'linear-gradient(45deg, rgba(168, 85, 247, 0.2), rgba(99, 102, 241, 0.2))',
                },
                '&:hover': {
                  background: isActive ? 'linear-gradient(45deg, rgba(168, 85, 247, 0.2), rgba(99, 102, 241, 0.2))' : 'rgba(255, 255, 255, 0.06)',
                  borderColor: isActive ? 'rgba(168, 85, 247, 0.6)' : 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateX(4px)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <ListItemAvatar sx={{ minWidth: 48 }}>
                <Avatar
                  src={job.companyLogo}
                  alt={job.company}
                  variant="rounded"
                  sx={{ width: 36, height: 36, border: '1px solid rgba(255,255,255,0.1)' }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={job.title}
                secondary={job.company}
                primaryTypographyProps={{
                  sx: {
                    fontWeight: 600,
                    fontSize: '14px',
                    color: '#f3f4f6',
                    fontFamily: "'Outfit', sans-serif",
                  },
                }}
                secondaryTypographyProps={{
                  sx: {
                    fontSize: '12px',
                    color: '#9ca3af',
                    fontFamily: "'Outfit', sans-serif",
                  },
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};

export default JobList;