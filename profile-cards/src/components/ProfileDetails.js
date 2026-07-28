import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Container, Box, Paper, IconButton, Button, Link as MuiLink, Avatar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import ArticleIcon from '@mui/icons-material/Article';

const ProfileDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/profiles/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch profile details. Please try again later.');
        }
        return response.json();
      })
      .then(data => {
        setProfile(data);
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

  if (loading) return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Typography sx={{ fontFamily: "'Outfit', sans-serif", color: '#9ca3af' }}>Loading Profile...</Typography>
    </Container>
  );
  if (error) return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Typography color="error" sx={{ fontFamily: "'Outfit', sans-serif" }}>{error}</Typography>
    </Container>
  );

  return (
    <Container sx={{ py: 6, display: 'flex', justifyContent: 'center' }}>
      {profile ? (
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
              src={profile.image}
              alt={`${profile.name} image`}
              sx={{
                width: 140,
                height: 140,
                border: '4px solid rgba(168, 85, 247, 0.3)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
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
              {profile.name}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                color: '#a78bfa',
                fontWeight: 600,
                fontFamily: "'Outfit', sans-serif",
                mb: 3,
              }}
            >
              {profile.description}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#d1d5db',
                fontFamily: "'Outfit', sans-serif",
                lineHeight: 1.6,
                maxWidth: '550px',
                mb: 4,
              }}
            >
              {profile.summary}
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button
                component={MuiLink}
                href={profile.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                startIcon={<LanguageIcon />}
                sx={{
                  color: '#f3f4f6',
                  borderColor: 'rgba(255,255,255,0.1)',
                  textTransform: 'none',
                  fontFamily: "'Outfit', sans-serif",
                  borderRadius: '10px',
                  px: 3,
                  '&:hover': {
                    borderColor: '#a855f7',
                    backgroundColor: 'rgba(168, 85, 247, 0.08)',
                  },
                }}
              >
                Portfolio
              </Button>
              <Button
                component={MuiLink}
                href={profile.cvLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                startIcon={<ArticleIcon />}
                sx={{
                  color: '#f3f4f6',
                  borderColor: 'rgba(255,255,255,0.1)',
                  textTransform: 'none',
                  fontFamily: "'Outfit', sans-serif",
                  borderRadius: '10px',
                  px: 3,
                  '&:hover': {
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.08)',
                  },
                }}
              >
                Resume / CV
              </Button>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: '#9ca3af',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                mb: 2,
              }}
            >
              Connect with {profile.name.split(' ')[0]}
            </Typography>

            <Box display="flex" justifyContent="center" gap="16px">
              <IconButton
                component={MuiLink}
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#9ca3af',
                  '&:hover': { color: '#0077b5', backgroundColor: 'rgba(0, 119, 181, 0.1)' },
                }}
              >
                <LinkedInIcon sx={{ fontSize: 28 }} />
              </IconButton>
              <IconButton
                component={MuiLink}
                href={profile.twitter}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#9ca3af',
                  '&:hover': { color: '#1da1f2', backgroundColor: 'rgba(29, 161, 242, 0.1)' },
                }}
              >
                <TwitterIcon sx={{ fontSize: 28 }} />
              </IconButton>
              <IconButton
                component={MuiLink}
                href={profile.facebook}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#9ca3af',
                  '&:hover': { color: '#1877f2', backgroundColor: 'rgba(24, 119, 242, 0.1)' },
                }}
              >
                <FacebookIcon sx={{ fontSize: 28 }} />
              </IconButton>
            </Box>
          </Box>
        </Paper>
      ) : (
        <Typography variant="h6" color="textSecondary">Profile not found</Typography>
      )}
    </Container>
  );
};

export default ProfileDetails;
