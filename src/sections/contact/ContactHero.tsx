import { styled, useTheme } from '@mui/material/styles';
import { Typography, Card, Box, Divider, Grid, Link, Avatar, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { m } from 'framer-motion';
import { varFade } from 'src/components/animate';
import contact_hero from 'project-config.json';
import useResponsive from 'src/hooks/useResponsive';

// ---------------- Styled Components ----------------
const MainRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: { height: '100vh' },
}));

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/assets/background/overlay_2.svg),url(/assets/images/contact/hero1.jpg)',
  padding: theme.spacing(2, 1, 0, 1),
  height: 'auto',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(8, 0, 0, 0),
    height: `calc(100vh - 200px)`,
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(8, 0, 0, 0),
    height: `calc(100vh - 300px)`,
  },
}));

const StyledContent = styled(Box)(({ theme }) => ({
  zIndex: 2,
  width: '100%',
  borderRadius: '12px',
  [theme.breakpoints.down('md')]: { padding: theme.spacing(1), margin: theme.spacing(0, 0, 4, 0) },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3),
    width: '85%',
    position: 'absolute',
    transform: `translate(-50%, -25%)`,
    left: '50%',
    top: '50%',
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '12px',
  padding: theme.spacing(2),
  background: `linear-gradient(135deg, ${theme.palette.common.white} 0%, #f8f9fa 100%)`,
  border: `0px`,
  boxShadow: '0 8px 32px rgba(0, 73, 144, 0.15)',
  [theme.breakpoints.up('md')]: {
    border: `1px solid #e0e0e0`,
    padding: theme.spacing(4, 3),
  },
}));

// ---------------- Category Map ----------------
const categoryMap = {
  mobile: { color: '#004990', icon: <PhoneIcon fontSize="large" /> },
  email: { color: '#004990', icon: <EmailIcon fontSize="large" /> },
  address: { color: '#004990', icon: <LocationOnIcon fontSize="large" /> },
};

const getCategoryKey = (cat) => {
  if (!cat) return '';
  const key = cat.trim().toLowerCase();
  if (key === 'phone') return 'mobile';
  if (key === 'office') return 'address';
  return key;
};

// ---------------- Main Component ----------------
export default function ContactHero() {
  return (
    <MainRoot>
      <StyledRoot>
        <HeroFloatCard />
      </StyledRoot>
    </MainRoot>
  );
}

function HeroFloatCard() {
  const { hero } = contact_hero.contact;
  const theme = useTheme();
  const isMobile = useResponsive('down', 'md');

  // Only take first 3 items
  const displayedHero = hero.slice(0, 3);

  const renderLink = (item) => {
    const category = getCategoryKey(item.category);
    if (category === 'email') return `mailto:${item.link}`;
    if (category === 'mobile') return `tel:${item.link}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.link)}`;
  };

  return (
    <StyledContent>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <m.div variants={varFade().inRight}>
        <Typography 
  variant="h2" 
  fontWeight="800" 
  sx={{ 
    position: 'relative',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    textShadow: '0 2px 10px rgba(255,255,255,0.3)',
    backdropFilter: 'blur(2px)',
    mt: 25
  }}
>
            Searching for solutions made simple?
          </Typography>
         <Typography 
  variant="h4" 
  fontWeight="800" 
  sx={{ 
    position: 'relative',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    textShadow: '0 2px 10px rgba(255,255,255,0.3)',
    backdropFilter: 'blur(2px)',
   
  }}
>
            We're here to make it easy for you
          </Typography>

          <Divider
            sx={{
              border: `2px solid #fe2000`,
              width: '120px',
              margin: '0 auto',
              mt: 3,
              borderRadius: '2px',
            }}
          />
        </m.div>
      </Box>

      <StyledCard sx={{ marginTop: 10 }}>
        <Grid container spacing={3} justifyContent="center">
          {displayedHero.map((item, index) => {
            const key = getCategoryKey(item.category);
            const catData = categoryMap[key] || {};
            return (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <StyledCard 
                  sx={{ 
                    textAlign: 'center', 
                    py: 3, 
                    height: '100%',
                    background: 'white',
                    border: `2px solid transparent`,
                    backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #004990 0%, #fe2000 100%)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 12px 40px rgba(254, 32, 0, 0.15)',
                    }
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: 'white',
                      width: 70,
                      height: 70,
                      margin: '0 auto',
                      mb: 2,
                      color: '#004990',
                      border: `2px solid #fe2000`,
                      boxShadow: '0 4px 12px rgba(0, 73, 144, 0.2)',
                    }}
                  >
                    {catData.icon || null}
                  </Avatar>

                  <Typography
                    variant={isMobile ? 'h6' : 'h6'}
                    fontWeight="bold"
                    fontFamily="'Roboto Slab', serif"
                    marginBottom={isMobile ? 1 : 2}
                    color={'#004990'}
                    sx={{ fontSize: '1.1rem' }}
                  >
                    {item.description}
                  </Typography>

                  <Button
                    component={Link}
                    href={renderLink(item)}
                    underline="none"
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#fe2000',
                      fontSize: '1rem',
                      textTransform: 'none',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      '&:hover': {
                        backgroundColor: 'rgba(254, 32, 0, 0.08)',
                        color: '#d81b00',
                      }
                    }}
                    target="_blank"
                  >
                    {item.link}
                  </Button>
                </StyledCard>
              </Grid>
            );
          })}
        </Grid>
        
        {/* Additional decorative element */}
        <Box sx={{ textAlign: 'center', mt: -3 }}>
          <Typography 
            variant="body2" 
            color="#004990"
            sx={{ fontStyle: 'italic' }}
          >
            Get in touch with us today
          </Typography>
        </Box>
      </StyledCard>
    </StyledContent>
  );
}