import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') || '';

  const handleSearchChange = (event) => {
    const value = event.target.value;
    if (value) {
      navigate(`/?search=${encodeURIComponent(value)}`);
    } else {
      navigate('/');
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'rgba(3, 7, 18, 0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: '64px', px: { xs: 2, sm: 4 } }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            fontWeight: 800,
            textDecoration: 'none',
            background: 'linear-gradient(45deg, #a855f7, #6366f1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.5px',
          }}
        >
          Talent Market
        </Typography>

        <Box
          sx={{
            position: 'relative',
            borderRadius: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderColor: 'rgba(168, 85, 247, 0.4)',
            },
            transition: 'all 0.3s ease',
            width: '100%',
            maxWidth: '360px',
            display: 'flex',
            alignItems: 'center',
            px: 2,
            py: 0.5,
          }}
        >
          <SearchIcon sx={{ color: 'rgba(255, 255, 255, 0.4)', mr: 1, fontSize: 20 }} />
          <InputBase
            placeholder="Search talent, skills or roles..."
            value={query}
            onChange={handleSearchChange}
            sx={{
              color: '#f3f4f6',
              width: '100%',
              fontSize: '14px',
              fontFamily: "'Outfit', sans-serif",
              '& .MuiInputBase-input': {
                py: 0.5,
              },
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
