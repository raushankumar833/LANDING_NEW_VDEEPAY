import { Stack, Typography, TextField, Button, Container, Grid, Box, Card, Paper } from '@mui/material';
import { m } from 'framer-motion';
import { MotionViewport, varFade, varBounce } from 'src/components/animate';

const ContactForm = () => (
  <Container
    sx={{
      py: 8,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Background decorative elements */}
    <Box
      sx={{
        position: 'absolute',
        top: -100,
        right: -100,
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(186, 104, 200, 0.1) 0%, rgba(156, 39, 176, 0.05) 100%)',
        zIndex: 0,
      }}
    />
    
    <Grid container spacing={4} alignItems="center">
      {/* Left side: Image */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <m.div variants={varFade().inLeft}>
          <Card
            sx={{
              width: '100%',
              maxWidth: 600,
              height: 'auto',
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(156, 39, 176, 0.15)',
              border: '1px solid rgba(186, 104, 200, 0.2)',
            }}
          >
            <Box
              component="img"
              src="../assets/illustrations/cntact_us1.jpg"
              alt="Contact Illustration"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Card>
        </m.div>
      </Grid>

      {/* Right side: Form */}
      <Grid item xs={12} md={6}>
        <m.div variants={varFade().inRight}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              background: 'linear-gradient(145deg, #ffffff 0%, #fafafa 100%)',
              borderRadius: 4,
              border: '1px solid rgba(186, 104, 200, 0.1)',
              boxShadow: '0 10px 30px rgba(156, 39, 176, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: 'linear-gradient(90deg, #ba68c8, #6a1b9a)',
              }
            }}
          >
            <Stack spacing={3}>
              <m.div variants={varFade().inDown}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    color: '#2d1b69',
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    lineHeight: 1.2,
                  }}
                >
                  Get in Touch
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'text.secondary',
                    mt: 1,
                    fontSize: '1.1rem',
                  }}
                >
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </Typography>
              </m.div>

              <Stack spacing={3} sx={{ mt: 2 }}>
                {['Name', 'Email', 'Subject'].map((label) => (
                  <m.div key={label} variants={varFade().inUp}>
                    <TextField
                      fullWidth
                      label={label}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          backgroundColor: '#f8f9fa',
                          '& fieldset': { 
                            borderColor: 'rgba(186, 104, 200, 0.3)',
                            borderWidth: 2,
                          },
                          '&:hover fieldset': { 
                            borderColor: 'rgba(186, 104, 200, 0.6)',
                          },
                          '&.Mui-focused fieldset': { 
                            borderColor: '#ba68c8',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'text.secondary',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#ba68c8',
                        },
                      }}
                    />
                  </m.div>
                ))}

                <m.div variants={varFade().inUp}>
                  <TextField
                    fullWidth
                    label="Your Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: '#f8f9fa',
                        '& fieldset': { 
                          borderColor: 'rgba(186, 104, 200, 0.3)',
                          borderWidth: 2,
                        },
                        '&:hover fieldset': { 
                          borderColor: 'rgba(186, 104, 200, 0.6)',
                        },
                        '&.Mui-focused fieldset': { 
                          borderColor: '#ba68c8',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'text.secondary',
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#ba68c8',
                      },
                    }}
                  />
                </m.div>
              </Stack>

              <m.div variants={varBounce().in}>
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(135deg, #ba68c8 0%, #9c27b0 100%)',
                    mt: 2,
                    py: 1.5,
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    borderRadius: 2,
                    boxShadow: '0 4px 15px rgba(156, 39, 176, 0.3)',
                    transition: 'all 0.3s ease',
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #ab47bc 0%, #8e24aa 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(156, 39, 176, 0.4)',
                    },
                  }}
                >
                  Send Message
                </Button>
              </m.div>
            </Stack>
          </Paper>
        </m.div>
      </Grid>
    </Grid>
  </Container>
);

export default ContactForm;