import React from 'react';
import { Box, Grid, Card, Typography, CardContent } from '@mui/material';
import SpeakerIcon from '@mui/icons-material/Campaign';
import NewspaperIcon from '@mui/icons-material/Article';
import TvIcon from '@mui/icons-material/Tv';
import SocialIcon from '@mui/icons-material/Public';

const mediaData = [
  {
    icon: <NewspaperIcon fontSize="large" color="primary" />,
    title: 'National Newspapers',
    description: 'Published insights & award features in top national dailies.',
  },
  {
    icon: <SpeakerIcon fontSize="large" color="secondary" />,
    title: 'Magazines',
    description: 'Profiles of attendees & thought leaders.',
  },
  {
    icon: <TvIcon fontSize="large" color="success" />,
    title: 'TV & Podcasts',
    description: 'Exclusive interviews & event coverage across media.',
  },
  {
    icon: <SocialIcon fontSize="large" color="error" />,
    title: 'Social Media Buzz',
    description: 'Viral engagement with #BEFConclave2025.',
  },
];

const MediaExposure = () => {
  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 8 }, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        🔊 Media & PR Exposure
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
        💥 Your Name in Headlines!
      </Typography>
      <Grid container spacing={4} mt={3}>
        {mediaData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                height: '100%',
                p: 2,
                textAlign: 'center',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
              elevation={3}
            >
              <CardContent>
                {item.icon}
                <Typography variant="h6" fontWeight="bold" mt={1}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" mt={1}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MediaExposure;
