// ----------------------------------------------------------------------
import { m } from 'framer-motion';
import { styled, useTheme, alpha } from '@mui/material/styles';
import { Box, Card, Container, Typography, Stack, Button, Divider, Grid } from '@mui/material';
import { MotionViewport, varFade } from '../../components/animate';
import Iconify from 'src/components/iconify';
import useResponsive from 'src/hooks/useResponsive';
import PermissionGaurd from 'src/auth/PermissionGaurd';
import { PATH_DASHBOARD } from 'src/routes/paths';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------
 

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(12, 0),
  // ✅ New gradient style: Diagonal stripes effect
  background: `linear-gradient(135deg, 
    #fe2000 0%, 
    #fe2000 25%, 
    #ff3d1a 25%, 
    #ff3d1a 50%, 
    #ff5c33 50%, 
    #ff5c33 75%, 
    #ff7a52 75%, 
    #ff7a52 100%)`,
  backgroundSize: '400% 400%',
  position: 'relative',
  zIndex: 1,
  animation: 'shimmer 8s ease-in-out infinite',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
  '@keyframes shimmer': {
    '0%, 100%': {
      backgroundPosition: '0% 0%',
    },
    '50%': {
      backgroundPosition: '100% 100%',
    },
  },
}));

const StyledRootCard = styled(Card)(({ theme }) => ({
  zIndex: 2,
  left: '50%',
  top: '-20px',
  width: '70%',
  borderRadius: '16px',
  position: 'absolute',
  padding: theme.spacing(5),
  transform: 'translate(-50%, -50%)',
  boxShadow: `0 16px 40px ${alpha(theme.palette.primary.main, 0.4)}`,
  background: `linear-gradient(145deg, #ffffff, #f5f5f5)`,
  border: `1px solid ${alpha(theme.palette.grey[300], 0.8)}`,
  [theme.breakpoints.down('md')]: {
    top: '0px',
    left: '0px',
    width: '90%',
    position: 'relative',
    transform: 'none',
    margin: '0 auto 50px auto',
    boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.2)}`,
  },
}));

const SpotLightText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '0',
  left: '0',
  padding: theme.spacing(0.5, 2),
  fontSize: '12px',
  letterSpacing: '2px',
  color: theme.palette.common.white,
  background: `linear-gradient(90deg, #ff3d1a, #ff7a52)`,
  borderTopLeftRadius: '8px',
  borderBottomRightRadius: '12px',
  fontWeight: 600,
  boxShadow: `0 2px 8px ${alpha('#ff3d1a', 0.4)}`,
}));

const StyledDescription = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    marginTop: theme.spacing(15),
    borderRight: `2px dotted ${alpha(theme.palette.grey[900], 0.2)}`,
  },
}));

const StyledStatement = styled('div')(({ theme }) => ({
  textAlign: 'center',
  fontFamily: "'Roboto Slab', serif",
  marginTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    marginTop: theme.spacing(15),
  },
}));

// ----------------------------------------------------------------------

export default function HomeBilling() {
  const theme = useTheme();
  const isMobile = useResponsive('down', 'md');

  return (
    <>
      <PermissionGaurd permission={isMobile}>
        <BillingCardComponent />
      </PermissionGaurd>

      <StyledRoot>
        <PermissionGaurd permission={!isMobile}>
          <BillingCardComponent />
        </PermissionGaurd>

        <Container component={MotionViewport}>
          <Grid direction={{ xs: 'column', md: 'row' }} container spacing={5}>
            <Grid item xs={12} md={7}>
              <Description />
            </Grid>
            <Grid item xs={12} md={5}>
              <Statement />
            </Grid>
          </Grid>
        </Container>

        <Iconify
          icon="streamline:ai-technology-spark"
          sx={{
            width: 360,
            height: 360,
            opacity: 0.12,
            position: 'absolute',
            right: theme.spacing(-3),
            bottom: 0,
            color: alpha('#ff7a52', 0.4),
            zIndex: -1,
          }}
        />
      </StyledRoot>
    </>
  );
}

function BillingCardComponent() {
  const theme = useTheme();
  const { push } = useRouter();
  const isMobile = useResponsive('down', 'md');

  return (
    <Box component={MotionViewport}>
      <m.div variants={varFade().inDown}>
        <StyledRootCard>
          <SpotLightText>TOP BILLING</SpotLightText>

          <Stack
            sx={{
              alignItems: { md: 'center' },
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
            }}
          >
            <Stack flexDirection={'row'} alignItems="center" spacing={2} mr={2}>
              <Iconify 
                icon="solar:wallet-money-bold" 
                width={60} 
                height={60} 
                color="#fe2000"
              />
              <div>
                <Typography variant="body1" fontWeight="bold" color="#140a53">
                  {process.env.REACT_APP_PROJECT_TITLE}
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="#140a53">
                  DMT
                </Typography>
              </div>
            </Stack>

            <PermissionGaurd permission={!isMobile}>
              <Divider
                orientation="vertical"
                sx={{
                  height: '80px',
                  border: `2px dotted ${alpha(theme.palette.grey[900], 0.2)}`,
                }}
              />
            </PermissionGaurd>

            <Stack spacing={2} sx={{ mt: { xs: 2, md: 0 }, ml: 3 }}>
              <Typography variant="h6" fontWeight="400" color="#140A53">
                Effortless financial transactions made seamless with our streamlined domestic money
                transfer service.
              </Typography>

              <Button
                variant="contained"
                     onClick={() => window.location.href = 'https://app.vdeepay.com/qrLogin'}
                sx={{
                  width: '200px',
                  borderRadius: '12px',
                  fontWeight: 600,
                  textTransform: 'none',
                  // ✅ New gradient: Radial effect
                  background: `radial-gradient(circle at center, #ff5c33, #fe2000)`,
                  boxShadow: `0 4px 15px ${alpha('#fe2000', 0.3)}`,
                  '&:hover': {
                    background: `radial-gradient(circle at center, #fe2000, #ff3d1a)`,
                    boxShadow: `0 6px 20px ${alpha('#fe2000', 0.4)}`,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
                endIcon={<Iconify icon="line-md:chevron-right" />}
              >
                Try Now
              </Button>
            </Stack>

            <PermissionGaurd permission={!isMobile}>
              <Iconify
                icon="streamline:ai-technology-spark"
                sx={{
                  width: 120,
                  height: 120,
                  opacity: 0.1,
                  color: alpha('#ff5c33', 0.5),
                }}
              />
            </PermissionGaurd>
          </Stack>
        </StyledRootCard>
      </m.div>
    </Box>
  );
}

function Description() {
  const theme = useTheme();
  const { push } = useRouter();

  return (
    <StyledDescription>
      <m.div variants={varFade().inLeft}>
        <Typography variant="h6" fontWeight="500" color="#fff" mb={1}>
          Simplify Payments, Maximize Growth
        </Typography>

        <Typography variant="h2" fontWeight="700" color="#fff" mb={2}>
          {process.env.REACT_APP_PROJECT_TITLE}
        </Typography>

        <Typography variant="subtitle1" fontWeight="500" color="#fff" mb={2}>
          Combined solutions for all services
        </Typography>

        <Typography variant="h6" fontWeight="400" mt={2} color="#fff" mb={4}>
          Experience financial empowerment in one unified platform – where convenience meets
          comprehensive solutions, redefining your financial journey effortlessly.
        </Typography>

        <Button
          variant="contained"
                onClick={() => window.location.href = 'https://app.vdeepay.com/qrLogin'}
          sx={{
            mt: 6,
            p: 2,
            width: '220px',
            borderRadius: '12px',
            fontSize: '18px',
            fontWeight: 600,
            textTransform: 'none',
            // ✅ New gradient: Multi-color with smooth transition
            background: `linear-gradient(135deg, 
              #fe2000 0%, 
              #ff3d1a 25%, 
              #ff5c33 50%, 
              #ff7a52 75%, 
              #ff9970 100%)`,
            boxShadow: `0 6px 20px ${alpha('#fe2000', 0.4)}`,
            '&:hover': {
              background: `linear-gradient(135deg, 
                #ff9970 0%, 
                #ff7a52 25%, 
                #ff5c33 50%, 
                #ff3d1a 75%, 
                #fe2000 100%)`,
              boxShadow: `0 8px 25px ${alpha('#fe2000', 0.5)}`,
              transform: 'translateY(-3px)',
            },
            transition: 'all 0.3s ease',
            backgroundSize: '200% 200%',
            animation: 'shimmerButton 3s ease infinite',
            '@keyframes shimmerButton': {
              '0%, 100%': {
                backgroundPosition: '0% 50%',
              },
              '50%': {
                backgroundPosition: '100% 50%',
              },
            },
          }}
          endIcon={<Iconify icon="line-md:chevron-right" />}
        >
          Try {process.env.REACT_APP_PROJECT_TITLE}
        </Button>
      </m.div>
    </StyledDescription>
  );
}

function Statement() {
  return (
    <StyledStatement>
      <m.div variants={varFade().inRight}>
        <Iconify 
          icon="el:quote-alt" 
          width={40} 
          sx={{ color: '#fff' }} 
        />
        <Typography variant="h4" fontWeight="500" marginTop={2} color="yellow">
          Whether you're a local retailer, or a thriving enterprise, our platform is tailored to
          elevate your business operations – a seamless solution for every shop size.
        </Typography>
      </m.div>
    </StyledStatement>
  );
}