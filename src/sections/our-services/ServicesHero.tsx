import { alpha, styled, useTheme } from '@mui/material/styles';
import { Typography, Box, Divider, Button, Stack } from '@mui/material';
import { m } from 'framer-motion';
import { varFade } from 'src/components/animate';
import Iconify from 'src/components/iconify';
import useResponsive from 'src/hooks/useResponsive';
import project_data from 'project-config.json';

const MainRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    height: 'max-content',
  },
}));

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(2, 1, 2, 1),
  background: `linear-gradient(135deg, #004990 0%, #fe2000 100%)`, // Changed to #004990 and #fe2000
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(8, 0, 8, 0),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `radial-gradient(circle at top right, rgba(255,255,255,0.15), transparent 70%)`,
    zIndex: 1,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    background: `radial-gradient(circle at bottom left, rgba(255,255,255,0.15), transparent 70%)`,
    zIndex: 1,
  },
}));

const StyledContent = styled(Box)(({ theme }) => ({
  zIndex: 2,
  width: '100%',
  borderRadius: '2px',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1),
    margin: theme.spacing(0, 0, 4, 0),
  },
  [theme.breakpoints.up('md')]: {},
}));

// ----------------------------------------------------------------------

export default function ServicesHero() {
  return (
    <MainRoot>
      <StyledRoot>
        <HeroFloatCard />
      </StyledRoot>
    </MainRoot>
  );
}

function HeroFloatCard() {
  const theme = useTheme();
  const {
    ourservices: { hero },
  } = project_data;
  const isMobile = useResponsive('down', 'md');

  return (
    <StyledContent>
      <m.div variants={varFade().inRight}>
        <Typography
          variant={isMobile ? 'h6' : 'h4'}
          fontWeight={isMobile ? 'normal' : 'bold'}
          color="#ffffff" // Changed to white for better contrast
          sx={{
            mb: 1,
            textTransform: 'uppercase',
          }}
        >
          {hero?.sub_title}
        </Typography>
        <Typography
          variant={isMobile ? 'h3' : 'h2'}
          fontWeight="bold"
          color="#ffffff" // Changed to white for better contrast
        >
          {hero?.title}
        </Typography>
        <Typography
          variant={isMobile ? 'caption' : 'h6'}
          fontWeight="normal"
          color="#ffffff" // Changed to white for better contrast
          sx={{
            width: { xs: '100%', md: '60%' },
            margin: '32px auto',
            px: { xs: 0, md: 5 },
            lineHeight: { md: '2rem' },
          }}
        >
          {hero?.intro}
        </Typography>
        <Divider
          sx={{
            border: `1px solid ${theme.palette.common.white}`, // Changed to white
            display: 'block',
            width: '100px',
            margin: '0 auto',
            mt: 2,
          }}
        />
      </m.div>
      <Stack
        flexDirection={isMobile ? 'row' : 'row'}
        alignItems="center"
        justifyContent="center"
        mt={isMobile ? 2 : 4}
      >
        <Stack>{loginbutton}</Stack>
        <Stack ml={isMobile ? 3 : 3}>{contactusbutton}</Stack>
      </Stack>
    </StyledContent>
  );
}

const contactusbutton = (
  <m.div variants={varFade().inUp}>
    <Button
      size="large"
      variant="outlined"
      sx={{
        color: '#ffffff', // Changed to white
        borderColor: '#ffffff', // Added white border
        borderRadius: '2px',
        '&:hover': {
          borderColor: '#ffffff',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
      }}
      endIcon={<Iconify icon="ic:round-arrow-right-alt" />}
    >
      Contact Us
    </Button>
  </m.div>
);

const loginbutton = (
  <m.div variants={varFade().inUp}>
    <Button
      size="large"
      variant="contained"
      rel="noopener"
      onClick={() => window.location.href = 'https://app.VDEEPAY.com/qrLogin'}
      sx={{
        backgroundColor: '#0f083f', // Changed to #004990
        borderRadius: '2px',
        '&:hover': {
          backgroundColor: '#003366', // Darker shade for hover
        },
      }}
      endIcon={<Iconify icon="ic:round-arrow-right-alt" />}
    >
      Login now
    </Button>
  </m.div>
);