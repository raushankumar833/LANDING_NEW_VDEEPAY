import { styled, useTheme } from '@mui/material/styles';
import { Typography, Box, Divider, Button, Stack, Container } from '@mui/material';
import { m } from 'framer-motion';
import { varFade } from 'src/components/animate';
import Iconify from 'src/components/iconify';
import useResponsive from 'src/hooks/useResponsive';
import project_data from 'project-config.json';

const MainRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    height: 'max-content',
  },
}));

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(4, 2, 0, 2),
  height: 'auto',
  background: 'linear-gradient(135deg, #004990 0%, #002b5c 50%, #0066cc 100%)',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(12, 0, 0, 0),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
  },
}));

const FloatingShape = styled('div')(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.1)',
  animation: 'float 6s ease-in-out infinite',
  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-20px)' },
  },
}));

const StyledContent = styled(Container)(({ theme }) => ({
  zIndex: 2,
  position: 'relative',
  textAlign: 'center',
  padding: theme.spacing(4, 2),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
}));

const StyledImage = styled(Box)(({ theme }) => ({
  zIndex: 2,
  width: '100%',
  borderRadius: '20px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  margin: '40px auto',
  boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    borderRadius: '12px',
    margin: '20px auto',
  },
}));

const HeroFooter = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(6),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
  },
}));

// ----------------------------------------------------------------------

export default function PartnerHero() {
  return (
    <MainRoot>
      <StyledRoot>
        {/* Floating background shapes */}
        <FloatingShape sx={{ width: 80, height: 80, top: '10%', left: '5%', animationDelay: '0s' }} />
        <FloatingShape sx={{ width: 120, height: 120, top: '20%', right: '8%', animationDelay: '2s' }} />
        <FloatingShape sx={{ width: 60, height: 60, bottom: '30%', left: '8%', animationDelay: '4s' }} />
        
        <HeroFloatCard />
      </StyledRoot>
    </MainRoot>
  );
}

function HeroFloatCard() {
  const theme = useTheme();
  const {
    ourpartner: { hero },
  } = project_data;
  const isMobile = useResponsive('down', 'md');
  
  return (
    <StyledContent maxWidth="lg">
      <m.div variants={varFade().inRight}>
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          fontWeight="600"
          color="#ffffff"
          sx={{
            mb: 2,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            opacity: 0.9,
          }}
        >
          {hero?.sub_title}
        </Typography>
        
        <Typography
          variant={isMobile ? 'h3' : 'h1'}
          fontWeight="bold"
          color="#ffffff"
          sx={{
            textShadow: '0 4px 20px rgba(0,0,0,0.1)',
            mb: 3,
          }}
        >
          {hero?.title}
        </Typography>
        
        <Typography
          variant={isMobile ? 'body1' : 'h6'}
          fontWeight="normal"
          color="#ffffff"
          sx={{
            width: { xs: '100%', md: '70%' },
            margin: '40px auto',
            px: { xs: 0, md: 4 },
            lineHeight: { md: '2rem' },
            opacity: 0.9,
            fontSize: { md: '1.1rem' },
          }}
        >
          {hero?.intro}
        </Typography>
        
        <Divider
          sx={{
            border: `2px solid rgba(255,255,255,0.3)`,
            display: 'block',
            width: '120px',
            margin: '0 auto',
            my: 4,
          }}
        />
      </m.div>
      
      <Stack
        flexDirection={isMobile ? 'column' : 'row'}
        alignItems="center"
        justifyContent="center"
        spacing={isMobile ? 3 : 4}
        mt={isMobile ? 2 : 6}
      >
        <Stack>{ourpartnersbutton}</Stack>
        <Stack>{contactusbutton}</Stack>
      </Stack>
      
      <ImageSection />
      <HeroFooterSection />
    </StyledContent>
  );
}

function ImageSection() {
  const {
    ourpartner: { hero },
  } = project_data;
  return (
    <StyledImage>
      <m.img
        variants={varFade().inUp}
        width="660"
        height="330"
        fetchPriority="high"
        src={hero?.partner_main}
        alt="partner_main"
        style={{
          width: '100%',
          maxWidth: 660,
          height: 'auto',
          borderRadius: '20px',
        }}
      />
    </StyledImage>
  );
}

function HeroFooterSection() {
  const {
    ourpartner: { hero },
  } = project_data;
  return (
    <HeroFooter>
      <m.img
        variants={varFade().inUp}
        width="1280"
        height="130"
        src={hero?.partner_city}
        alt="work city"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </HeroFooter>
  );
}

const contactusbutton = (
  <m.div variants={varFade().inUp}>
    <Button
      size="large"
      variant="outlined"
      sx={{
        color: '#ffffff',
        borderColor: 'rgba(255,255,255,0.7)',
        borderRadius: '50px',
        px: 4,
        py: 1.5,
        fontSize: '1rem',
        fontWeight: '600',
        backdropFilter: 'blur(10px)',
        background: 'rgba(255,255,255,0.1)',
        '&:hover': {
          borderColor: '#ffffff',
          background: 'rgba(255,255,255,0.2)',
          transform: 'translateY(-2px)',
          boxShadow: '0 10px 30px rgba(255,255,255,0.2)',
        },
        transition: 'all 0.3s ease',
      }}
      endIcon={<Iconify icon="ic:round-arrow-right-alt" />}
    >
      Contact Us
    </Button>
  </m.div>
);

const ourpartnersbutton = (
  <m.div variants={varFade().inUp}>
    <Button
      size="large"
      variant="contained"
      sx={{
        background: 'linear-gradient(45deg, #ffffff, #f8f9fa)',
        color: '#004990',
        borderRadius: '50px',
        px: 4,
        py: 1.5,
        fontSize: '1rem',
        fontWeight: '600',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        '&:hover': {
          background: 'linear-gradient(45deg, #f8f9fa, #ffffff)',
          transform: 'translateY(-2px)',
          boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
        },
        transition: 'all 0.3s ease',
      }}
      endIcon={<Iconify icon="ic:round-arrow-right-alt" />}
    >
      Become a Partner
    </Button>
  </m.div>
);