// @mui
import { Box, Typography, Grid, Avatar, Button, Card, CardContent } from '@mui/material';

// Expanded sample data
const aboutUsData = [
  { id: '1', title: 'Integrity', description: 'We act with honesty, fairness, and transparency in everything we do.' },
  { id: '2', title: 'Innovation', description: 'We embrace creativity and seek to improve our products and services constantly.' },
  { id: '3', title: 'Customer First', description: 'We prioritize our customers\' needs and strive to exceed their expectations.' },
  { id: '4', title: 'Teamwork', description: 'Collaboration and respect are at the heart of our team culture.' },
  { id: '5', title: 'Sustainability', description: 'We are committed to responsible business practices and a greener future.' },
  { id: '6', title: 'Excellence', description: 'We pursue the highest standards in everything we do.' },
  { id: '7', title: 'Accountability', description: 'We take responsibility for our actions and outcomes.' },
  { id: '8', title: 'Empathy', description: 'We listen, understand, and support our colleagues and customers.' },
  { id: '9', title: 'Adaptability', description: 'We embrace change and adapt to challenges with agility.' },
  { id: '10', title: 'Passion', description: 'We are passionate about what we do and inspire others through our energy.' },
  { id: '11', title: 'Diversity', description: 'We celebrate differences and foster an inclusive environment.' },
  { id: '12', title: 'Trust', description: 'We build trust through consistency, transparency, and reliability.' },
];

export default function AboutValues() {
  const aboutus = aboutUsData;

  return (
    <>
      {/* Top Section with Animated Background */}
      <Box sx={{ 
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(0, 73, 144, 0.08) 0%, rgba(254, 32, 0, 0.08) 100%)',
        p: { lg: 6, xs: 4 },
        alignSelf: 'center',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(0, 73, 144, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(254, 32, 0, 0.1) 0%, transparent 50%)',
          zIndex: 0,
        }
      }}>
        <Box position="relative" zIndex={1}>
          <Typography textAlign={'center'} variant="h1" sx={{ color: '#140a53', mb: 2 }}>
            Our Values
          </Typography>
          <Typography textAlign={'center'} variant="h6" sx={{ fontWeight: '300', color: '#140a53', maxWidth: '600px', margin: '0 auto' }}>
            Our values guide everything we do: how we create our product, and how we operate as a team.
          </Typography>

          <Grid container px={{ lg: 4, md: 2 }} mt={4} spacing={3}>
            {aboutus.map((about, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    boxShadow: '0 8px 32px rgba(0, 73, 144, 0.1)',
                    transition: 'all 0.3s ease-in-out',
                    borderRadius: '16px',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 16px 48px rgba(254, 32, 0, 0.15)',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        sx={{
                          background: `linear-gradient(135deg, #004990 0%, #fe2000 100%)`,
                          boxShadow: '0 4px 12px rgba(0, 73, 144, 0.3)',
                          height: '50px',
                          width: '50px',
                          mr: 2,
                          fontSize: '1.2rem',
                          fontWeight: 'bold'
                        }}
                      >
                        {about.id}
                      </Avatar>
                      <Typography variant="h5" sx={{ 
                        fontWeight: '800', 
                        color: '#140a53',
                        background: 'linear-gradient(135deg, #004990 0%, #fe2000 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>
                        {about.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ 
                      fontWeight: '400', 
                      color: '#140a53',
                      lineHeight: 1.6
                    }}>
                      {about.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Bottom CTA Section with Modern Design */}
      <Box sx={{
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(0, 73, 144, 0.05) 0%, rgba(254, 32, 0, 0.05) 100%)',
        p: { lg: 8, xs: 4 },
        alignSelf: 'center',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'conic-gradient(from 0deg, transparent, rgba(0, 73, 144, 0.1), transparent, rgba(254, 32, 0, 0.1), transparent)',
          animation: 'rotate 10s linear infinite',
        },
        '@keyframes rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }}>
        <Box 
          sx={{
            position: 'relative',
            zIndex: 1,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            p: 6,
            boxShadow: '0 20px 60px rgba(0, 73, 144, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <Grid container alignItems="center" spacing={4}>
            <Grid item lg={8} md={7}>
              <Typography sx={{ 
                color: '#140a53', 
                variant: "h2",
                mb: 2,
                background: 'linear-gradient(135deg, #004990 0%, #fe2000 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '800'
              }}>
                Ready to Get Started?
              </Typography>
              <Typography variant="h6" sx={{ 
                fontWeight: '300', 
                color: '#140a53',
                lineHeight: 1.6
              }}>
                Download OurApp for free on the Google Play Store 
                or sign up online today and experience the difference.
              </Typography>
            </Grid>
            <Grid item lg={4} md={5} sx={{ display: 'flex', justifyContent: { md: 'end', xs: 'start' } }}>
              <Button 
                variant="contained" 
                sx={{ 
                  background: 'linear-gradient(135deg, #004990 0%, #fe2000 100%)',
                  color: '#ffffff',
                  fontSize: '1.1rem',
                  padding: '16px 40px',
                  borderRadius: '50px',
                  boxShadow: '0 8px 24px rgba(0, 73, 144, 0.4)',
                  fontWeight: '600',
                  textTransform: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    transition: 'left 0.5s',
                  },
                  '&:hover': {
                    background: 'linear-gradient(135deg, #004990 0%, #fe2000 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 32px rgba(254, 32, 0, 0.4)',
                    '&::before': {
                      left: '100%',
                    }
                  }
                }} 
                size="large"   
                    onClick={() => window.location.href = 'https://app.vdeepay.com/qrLogin'}
              >
                Start Your Journey
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}