import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography } from '@mui/material';
// utils
import { textGradient } from '../../utils/cssStyles';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  background: 'linear-gradient(135deg, #f0f7ff 0%, #f8fbff 50%, #e6f2ff 100%)',
  overflow: 'hidden',
}));

const StyledWrap = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(14),
    paddingBottom: theme.spacing(14),
  },
}));

const StyledContent = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 600,
  margin: 'auto',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    margin: 0,
  },
}));

const HighlightText = styled('span')(({ theme }) => ({
  ...textGradient(`120deg, #004990 0%, #4d7eb3 100%`),
}));

const ContentCard = styled('div')(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.8)',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  boxShadow: '0 4px 20px rgba(0, 73, 144, 0.08)',
  border: '1px solid rgba(0, 73, 144, 0.1)',
  backdropFilter: 'blur(10px)',
}));

// ----------------------------------------------------------------------

export default function HomeForRetailer() {
  return (
    <StyledRoot>
      <StyledWrap>
        <Container component={MotionViewport}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <StyledContent>
                {/* Mission */}
                <m.div variants={varFade().inLeft}>
                  <ContentCard>
                    <Typography variant="h3" gutterBottom sx={{ mb: 3, fontWeight: 700 }}>
                      <HighlightText>Mission</HighlightText>
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 2, color: '#2c3e50', textAlign: "justify", lineHeight: 1.6 }}>
                      To empower businesses and individuals with secure, seamless, and innovative digital payment solutions, simplifying financial transactions while ensuring trust, accessibility, and efficiency across India.
                    </Typography>
                  </ContentCard>
                </m.div>

                {/* Vision */}
                <m.div variants={varFade().inLeft}>
                  <ContentCard>
                    <Typography variant="h3" gutterBottom sx={{ mb: 3, fontWeight: 700 }}>
                      <HighlightText>Vision</HighlightText>
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 2, color: '#2c3e50', textAlign: "justify", lineHeight: 1.6 }}>
                      To be India's most trusted and fastest-growing digital fintech ecosystem, driving financial inclusion by making payments, banking, and essential services accessible to every corner of the country.
                    </Typography>
                  </ContentCard>
                </m.div>

                {/* Values as Paragraph */}
                <m.div variants={varFade().inLeft}>
                  <ContentCard>
                    <Typography variant="h3" gutterBottom sx={{ mb: 3, fontWeight: 700 }}>
                      <HighlightText>Values</HighlightText>
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 2, color: '#2c3e50', textAlign: "justify", lineHeight: 1.6 }}>
                      Our values guide everything we do: integrity in every transaction, innovation in creating cutting-edge solutions, customer-centricity by keeping users at the heart of our services, inclusion to make financial services accessible to all, and excellence in delivering high-quality solutions consistently.
                    </Typography>
                  </ContentCard>
                </m.div>
              </StyledContent>
            </Grid>

            <Grid item xs={12} md={6}>
              <m.div
                variants={varFade().inRight}
                style={{
                  background: 'linear-gradient(135deg, #e6f2ff 0%, #f0f7ff 50%, #ffffff 100%)',
                  borderRadius: '20px',
                  padding: '20px',
                  boxShadow: '0 8px 32px rgba(0, 73, 144, 0.12)',
                  border: '1px solid rgba(0, 73, 144, 0.1)',
                }}
              >
                <m.img
                  src="/assets/illustrations/mission-vision.jpg"
                  alt="Mission Vision"
                  style={{ 
                    width: '100%', 
                    maxWidth: 500, 
                    display: 'block', 
                    margin: 'auto',
                    borderRadius: '12px',
                  }}
                />
              </m.div>
            </Grid>
          </Grid>
        </Container>
      </StyledWrap>
      <TriangleShape anchor="bottom" />
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

function TriangleShape({ anchor = 'top' }: { anchor?: 'top' | 'bottom' }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: 1,
        height: { xs: 40, md: 64 },
        bottom: anchor === 'bottom' ? 0 : 'unset',
        top: anchor === 'top' ? 0 : 'unset',
        color: 'background.paper',
        zIndex: 0,
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 1440 64" preserveAspectRatio="none">
        <path d="M1440 0H0L1440 64V0Z" fill="currentColor" />
      </svg>
    </Box>
  );
}