import { m } from 'framer-motion';
import { alpha, styled } from '@mui/material/styles';
import { Grid, Button, Container, Typography, Stack, Box } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
import { bgGradient } from '../../utils/cssStyles';
import { PATH_PAGE } from '../../routes/paths';
import Iconify from '../../components/iconify';
import { MotionViewport, varFade } from '../../components/animate';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------


const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: `linear-gradient(135deg, ${alpha('#004990', 0.02)} 0%, ${alpha('#fe2000', 0.02)} 100%)`,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -100,
    right: -100,
    width: 300,
    height: 300,
    borderRadius: '50%',
    background: `radial-gradient(${alpha('#004990', 0.05)} 0%, transparent 70%)`,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -100,
    left: -100,
    width: 250,
    height: 250,
    borderRadius: '50%',
    background: `radial-gradient(${alpha('#fe2000', 0.05)} 0%, transparent 70%)`,
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(14),
    paddingBottom: theme.spacing(16),
  },
}));

const StyledDescription = styled('div')(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(5),
  position: 'relative',
  zIndex: 1,
}));

const StyledContent = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius * 3,
}));

const ServiceCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  width: 260,
  height: 275,
  borderRadius: theme.shape.borderRadius * 3,
  background: `linear-gradient(145deg, #ffffff 0%, #f8faff 100%)`,
  boxShadow: `
    0 4px 20px ${alpha('#004990', 0.08)},
    inset 1px 1px 0px ${alpha('#ffffff', 0.8)},
    inset -1px -1px 0px ${alpha('#004990', 0.05)}
  `,
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  border: `1px solid ${alpha('#004990', 0.1)}`,
  '&:hover': {
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: `
      0 25px 50px ${alpha('#004990', 0.15)},
      inset 2px 2px 0px ${alpha('#ffffff', 0.9)},
      inset -2px -2px 0px ${alpha('#004990', 0.08)}
    `,
    border: `1px solid ${alpha('#004990', 0.2)}`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    background: `linear-gradient(90deg, #004990 0%, #fe2000 50%, #004990 100%)`,
    backgroundSize: '200% 100%',
    transition: 'background-position 0.6s ease',
  },
  '&:hover::before': {
    backgroundPosition: '100% 0',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 70,
  height: 70,
  borderRadius: '20px',
  background: `linear-gradient(135deg, ${alpha('#004990', 0.1)} 0%, ${alpha('#fe2000', 0.05)} 100%)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  border: `1.5px solid ${alpha('#004990', 0.15)}`,
  boxShadow: `0 4px 12px ${alpha('#004990', 0.1)}`,
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${alpha('#004990', 0.05)} 0%, transparent 100%)`,
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover': {
    transform: 'scale(1.1) rotate(5deg)',
    boxShadow: `0 8px 25px ${alpha('#004990', 0.2)}`,
    '&::before': {
      opacity: 1,
    },
  },
}));

const ServiceNumber = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 15,
  right: 15,
  width: 30,
  height: 30,
  borderRadius: '50%',
  background: `linear-gradient(135deg, #004990 0%, #fe2000 100%)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: '12px',
  fontWeight: 'bold',
  boxShadow: `0 2px 8px ${alpha('#004990', 0.3)}`,
}));

// ----------------------------------------------------------------------

export default function HomeServices() {
  const isDesktop = useResponsive('up', 'md');
const { push } = useRouter();
  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        {/* Section Title */}
        <StyledDescription>
          <m.div variants={varFade().inDown}>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                background: 'linear-gradient(135deg, #004990 0%, #fe2000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 2,
              }}
            >
              How VDEEPAY Can Help You?
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography
              variant="h6"
              sx={{
                color: alpha('#004990', 0.8),
                maxWidth: 600,
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Discover our comprehensive suite of financial services designed to make your life easier
            </Typography>
          </m.div>
          {isDesktop && <Stack mt={5}>{exploreServicesButton}</Stack>}
        </StyledDescription>

        {/* Services Grid */}
        <StyledContent>
          <Grid container spacing={4} justifyContent="center" sx={{ py: 2 }}>
            {services.map((service, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <m.div variants={varFade().inUp}>
                  <ServiceCard>
                    <ServiceNumber>{index + 1}</ServiceNumber>
                    
                    <IconWrapper>
                      <Iconify 
                        icon={service.icon} 
                        width={32} 
                        height={32} 
                        color="#004990" 
                      />
                    </IconWrapper>

                    <Box flexGrow={1} display="flex" flexDirection="column" justifyContent="center">
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ 
                          color: '#004990', 
                          mb: 1.5,
                          background: 'linear-gradient(135deg, #004990 0%, #fe2000 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: alpha('#004990', 0.8), 
                          textAlign: "center",
                          lineHeight: 1.6,
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                  </ServiceCard>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </StyledContent>

        {/* Button for Mobile */}
        {!isDesktop && (
          <Stack mt={5} alignItems="center">
            {exploreServicesButton}
          </Stack>
        )}
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

const services = [
  {
    title: 'BBPS',
    description: 'Pay credit card, electricity, and utility bills instantly and securely.',
    icon: 'ic:round-receipt',
  },
  {
    title: 'Money Transfer',
    description: 'Transfer money across India with ease and reliability.',
    icon: 'mdi:bank-transfer',
  },
  {
    title: 'Mobile & FASTag',
    description: 'Quick recharge for mobiles and FASTags anytime, anywhere.',
    icon: 'ic:round-phone-iphone',
  },
  {
    title: 'Cash Management',
    description: 'Streamlined cash collection and management for businesses.',
    icon: 'mdi:cash-multiple',
  },
  {
    title: 'Travel Booking',
    description: 'Hassle-free booking for trains, buses, flights, and hotels.',
    icon: 'mdi:ticket-confirmation',
  },
  {
    title: 'AEPS Services',
    description: 'Secure cash withdrawal and transactions using Aadhaar.',
    icon: 'mdi:account-key',
  },
  {
    title: 'UPI Payments',
    description: 'Seamless and instant UPI transactions for everyone.',
    icon: 'mdi:qrcode-scan',
  },
  {
    title: 'Micro ATM',
    description: 'Cash withdrawal and balance inquiry at retail points.',
    icon: 'mdi:credit-card-swipe',
  },
];

// ----------------------------------------------------------------------

const exploreServicesButton = (
  <m.div variants={varFade().inUp}>
    <Button
      size="large"
      variant="contained"
      target="_blank"
      rel="noopener"
      
      href={PATH_PAGE.services}
      endIcon={<Iconify icon="ic:round-arrow-right-alt" />}
      sx={{
        background: `linear-gradient(135deg, #004990 0%, #fe2000 100%)`,
        color: 'white',
        fontWeight: 'bold',
        padding: '12px 32px',
        borderRadius: '50px',
        boxShadow: `0 8px 25px ${alpha('#004990', 0.3)}`,
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: `0 15px 35px ${alpha('#004990', 0.4)}`,
          background: `linear-gradient(135deg, #004990 0%, #fe2000 100%)`,
          '&::before': {
            transform: 'translateX(100%)',
          },
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(90deg, transparent 0%, ${alpha('#ffffff', 0.2)} 50%, transparent 100%)`,
          transform: 'translateX(-100%)',
          transition: 'transform 0.6s ease',
        },
      }}
    >
      Explore All Services
    </Button>
  </m.div>
);