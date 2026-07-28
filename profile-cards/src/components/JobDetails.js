import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Container, Box, Paper, IconButton, Button, Snackbar, Alert, Avatar, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/jobs/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch job details. Please try again later.');
        }
        return response.json();
      })
      .then(data => {
        setJob(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleApplyClick = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  if (loading) return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Typography sx={{ fontFamily: "'Outfit', sans-serif", color: '#9ca3af' }}>Loading Job Details...</Typography>
    </Container>
  );
  if (error) return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Typography color="error" sx={{ fontFamily: "'Outfit', sans-serif" }}>{error}</Typography>
    </Container>
  );

  return (
    <Container sx={{ py: 6, display: 'flex', justifyContent: 'center' }}>
      {job ? (
        <Paper
          elevation={0}
          sx={{
            padding: { xs: 3, md: 5 },
            maxWidth: '700px',
            width: '100%',
            background: 'rgba(30, 41, 59, 0.4)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            position: 'relative',
          }}
        >
          <IconButton
            onClick={handleBackClick}
            sx={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              color: '#9ca3af',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              '&:hover': {
                backgroundColor: 'rgba(168, 85, 247, 0.2)',
                color: '#c084fc',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', mt: 4 }}>
            <Avatar
              src={job.companyLogo}
              alt={`${job.company} logo`}
              variant="rounded"
              sx={{
                width: 100,
                height: 100,
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                mb: 3,
              }}
            />

            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 800,
                fontFamily: "'Outfit', sans-serif",
                color: '#f3f4f6',
                mb: 1,
              }}
            >
              {job.title}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: '#a78bfa',
                fontWeight: 600,
                fontFamily: "'Outfit', sans-serif",
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 3,
              }}
            >
              <BusinessIcon sx={{ fontSize: 20 }} /> {job.company}
            </Typography>

            <Divider sx={{ width: '100%', borderColor: 'rgba(255,255,255,0.08)', my: 2 }} />

            <Box sx={{ width: '100%', textAlign: 'left', mt: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#f3f4f6', mb: 1, fontFamily: "'Outfit', sans-serif" }}>
                Job Summary
              </Typography>
              <Typography variant="body1" sx={{ color: '#d1d5db', mb: 3, fontFamily: "'Outfit', sans-serif", lineHeight: 1.6 }}>
                {job.summary}
              </Typography>

              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#f3f4f6', mb: 1, fontFamily: "'Outfit', sans-serif" }}>
                Description
              </Typography>
              <Typography variant="body1" sx={{ color: '#d1d5db', mb: 3, fontFamily: "'Outfit', sans-serif", lineHeight: 1.6 }}>
                {job.description}
              </Typography>

              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#f3f4f6', mb: 1, fontFamily: "'Outfit', sans-serif" }}>
                Requirements
              </Typography>
              <Typography variant="body1" sx={{ color: '#d1d5db', mb: 4, fontFamily: "'Outfit', sans-serif", lineHeight: 1.6 }}>
                {job.requirements}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 3,
                  p: 3,
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  mb: 4,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flex: 1 }}>
                  <AttachMoneyIcon sx={{ color: '#10b981', fontSize: 28 }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: '#9ca3af', display: 'block', textTransform: 'uppercase' }}>
                      Salary Range
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#f3f4f6', fontWeight: 600, fontFamily: "'Outfit', sans-serif" }}>
                      {job.salary}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flex: 1 }}>
                  <EmailIcon sx={{ color: '#3b82f6', fontSize: 28 }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: '#9ca3af', display: 'block', textTransform: 'uppercase' }}>
                      Contact Email
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#f3f4f6', fontWeight: 600, fontFamily: "'Outfit', sans-serif" }}>
                      {job.contact}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Button
              variant="contained"
              onClick={handleApplyClick}
              sx={{
                background: 'linear-gradient(45deg, #a855f7, #6366f1)',
                borderRadius: '12px',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '15px',
                fontFamily: "'Outfit', sans-serif",
                px: 5,
                py: 1.2,
                boxShadow: 'none',
                '&:hover': {
                  background: 'linear-gradient(45deg, #c084fc, #818cf8)',
                  boxShadow: '0 4px 16px rgba(168, 85, 247, 0.4)',
                },
              }}
            >
              Apply for this Job
            </Button>

            <Snackbar
              open={openSnackbar}
              autoHideDuration={4000}
              onClose={handleCloseSnackbar}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
              <Alert
                onClose={handleCloseSnackbar}
                severity="success"
                sx={{
                  width: '100%',
                  borderRadius: '12px',
                  fontFamily: "'Outfit', sans-serif",
                  backgroundColor: '#065f46',
                  color: '#ecfdf5',
                  '& .MuiAlert-icon': {
                    color: '#34d399',
                  },
                }}
              >
                Application submitted successfully!
              </Alert>
            </Snackbar>
          </Box>
        </Paper>
      ) : (
        <Typography variant="h6" color="textSecondary">Job not found</Typography>
      )}
    </Container>
  );
};

export default JobDetails;
