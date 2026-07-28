import React from 'react';
import { Card, CardContent, Typography, Button, Box, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const ProfileCard = ({ profile }) => {
  return (
    <Card
      sx={{
        background: 'rgba(30, 41, 59, 0.4)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '16px',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 12px 24px -10px rgba(168, 85, 247, 0.3)',
          borderColor: 'rgba(168, 85, 247, 0.3)',
        },
      }}
    >
      <Box sx={{ position: 'relative', pt: '45%', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}>
        <Avatar
          src={profile.image}
          alt={profile.name}
          sx={{
            width: 80,
            height: 80,
            border: '4px solid #0f172a',
            position: 'absolute',
            bottom: -40,
            left: 20,
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
          }}
        />
      </Box>
      
      <CardContent sx={{ pt: 6, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontWeight: 700,
            fontFamily: "'Outfit', sans-serif",
            color: '#f3f4f6',
            lineHeight: 1.2,
          }}
        >
          {profile.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#a78bfa',
            fontWeight: 500,
            fontFamily: "'Outfit', sans-serif",
            mb: 2,
          }}
        >
          {profile.description}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#9ca3af',
            fontFamily: "'Outfit', sans-serif",
            lineHeight: 1.5,
            mb: 3,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            flexGrow: 1,
          }}
        >
          {profile.summary}
        </Typography>
        
        <Button
          component={Link}
          to={`/profiles/${profile.id}`}
          variant="contained"
          fullWidth
          sx={{
            background: 'linear-gradient(45deg, #a855f7, #6366f1)',
            borderRadius: '10px',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '13px',
            fontFamily: "'Outfit', sans-serif",
            boxShadow: 'none',
            mt: 'auto',
            '&:hover': {
              background: 'linear-gradient(45deg, #c084fc, #818cf8)',
              boxShadow: '0 4px 12px rgba(168, 85, 247, 0.4)',
            },
          }}
        >
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
