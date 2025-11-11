import { m } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Box, Typography, Container, Grid, Card, alpha } from '@mui/material';
import { MotionViewport, varFade } from '../../components/animate';
import Image from '../../components/image';
import project_data from 'project-config.json';
import HomeCount from '../home/HomeCount';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: '#ffffff',
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(2, 0),
  background: `linear-gradient(135deg, ${alpha('#004990', 0.02)} 0%, ${alpha('#fe2600', 0.02)} 100%)`,
  border: `1px solid ${alpha('#004990', 0.1)}`,
  borderRadius: '16px',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: '#004990',
    transform: 'scale(1.02)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '20px',
  background: 'linear-gradient(135deg, #004990, #0066cc)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  boxShadow: '0 8px 25px rgba(0, 73, 144, 0.3)',
}));

export default function WhyPartner() {
  const {
    ourpartner: { why_partner },
  } = project_data;

  return (
    <StyledRoot>
      <Container>
        {why_partner?.length > 0 &&
          why_partner.map((section, sectionIndex) => (
            <Box key={sectionIndex} component={MotionViewport}>
              {/* Header */}
              <Box textAlign="center" mb={8}>
                <m.div variants={varFade().inDown}>
                  <Typography
                    variant="h2"
                    fontWeight="700"
                    color="#004990"
                    gutterBottom
                  >
                    {section.title}
                  </Typography>
                </m.div>
                <m.div variants={varFade().inUp}>
                  <Box
                    sx={{
                      width: '100px',
                      height: '4px',
                      background: 'linear-gradient(90deg, #004990, #fe2600)',
                      borderRadius: '2px',
                      margin: '0 auto',
                    }}
                  />
                </m.div>
              </Box>

              {/* Features Grid */}
              <Grid container spacing={4}>
                {section.list.map((item, itemIndex) => (
                  <Grid item xs={12} key={itemIndex}>
                    <m.div variants={varFade().inUp}>
                      <FeatureCard>
                        <Grid container spacing={4} alignItems="center">
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Typography
                                variant="h4"
                                fontWeight="600"
                                color="#004990"
                                gutterBottom
                              >
                                {item.title}
                              </Typography>
                              <Typography
                                variant="body1"
                                color="#004990"
                                sx={{ opacity: 0.8, lineHeight: 1.7 }}
                              >
                                {item.intro}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box display="flex" justifyContent="center">
                              <Image
                                src={item.icon}
                                alt={item.title}
                                sx={{
                                  borderRadius: '12px',
                                  width: '100%',
                                  maxWidth: '400px',
                                  height: 'auto',
                                  boxShadow: '0 10px 30px rgba(0, 73, 144, 0.1)',
                                }}
                              />
                            </Box>
                          </Grid>
                        </Grid>
                      </FeatureCard>
                    </m.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
      </Container>

      <HomeCount />
    </StyledRoot>
  );
}