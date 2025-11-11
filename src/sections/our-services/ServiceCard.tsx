import { SxProps, styled, useTheme } from '@mui/material/styles';
import { Typography, Button, Stack, Card, Grid } from '@mui/material';
import { m } from 'framer-motion';
import { varFade } from 'src/components/animate';
import Iconify from 'src/components/iconify';
import useResponsive from 'src/hooks/useResponsive';
import project_data from 'project-config.json';
import { useRouter } from 'next/router';

interface StyledCardProps {
  theme?: SxProps;
  bgcolor?: string;
}

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    margin: theme.spacing(6, 0),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  padding: theme.spacing(1),
  background: 'linear-gradient(135deg, #fff 0%, #f8faff 100%)',
  border: '1px solid rgba(255,255,255,0.8)',
  transition: 'all 0.4s ease',
  boxShadow: '0 4px 20px rgba(20, 10, 83, 0.08)',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(20, 10, 83, 0.15)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
  },
}));

const StyledInnerCard = styled(Card)<StyledCardProps>(({ theme, bgcolor }) => ({
  borderRadius: '12px',
  position: 'relative',
  padding: theme.spacing(3),
  background: bgcolor || 'linear-gradient(135deg, #f5f7ff 0%, #e3e9ff 100%)',
  border: '0px',
  boxShadow: 'none',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  py: 0.5,
  px: 2,
  top: 12,
  right: 12,
  fontSize: '11px',
  borderRadius: '20px',
  fontWeight: 'bold',
  position: 'absolute',
  textTransform: 'uppercase',
  background: 'linear-gradient(45deg, #667eea, #764ba2)',
  color: '#fff',
  boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)',
  '&:hover': {
    background: 'linear-gradient(45deg, #5a6fd8, #6a4190)',
  },
}));

export default function ServicesCard() {
  const isMobile = useResponsive('down', 'md');
  const { services } = project_data;
  const { push } = useRouter();
  const textColor = '#1a1a2e';

  return (
    <StyledRoot>
      {services?.length > 0 &&
        services.map((service, index) => (
          <Grid
            key={index}
            direction={{ xs: 'column', md: 'row' }}
            container
            spacing={4}
            mb={8}
          >
            <Grid item xs={12}>
              <Stack spacing={2} alignItems="center" textAlign="center">
                <CardTitle title={service.title} color={textColor} />
                <CardSubTitle title={service.sub_title} color={textColor} />
              </Stack>
            </Grid>

            {service?.list?.length > 0 &&
              service.list.map((list, index) => (
                <Grid key={index} item xs={12} sm={12} md={6} lg={4}>
                  <StyledCard>
                    <StyledInnerCard bgcolor={list.bgcolor}>
                      {list.extra && <StyledButton>{list.extra}</StyledButton>}

                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 20
                      }}>
                        <Iconify 
                          icon={list.icon} 
                          width={28} 
                          height={28} 
                          style={{ color: '#fff' }} 
                        />
                      </div>

                      <Typography
                        variant={isMobile ? 'h6' : 'h5'}
                        fontWeight="bold"
                        fontFamily="'Inter', sans-serif"
                        marginBottom={isMobile ? 1 : 2}
                        color={textColor}
                      >
                        {list.title}
                      </Typography>

                      <Typography 
                        variant="body1" 
                        mb={3} 
                        textAlign="justify" 
                        color={textColor}
                        sx={{ opacity: 0.8, lineHeight: 1.6 }}
                      >
                        {list.intro}
                      </Typography>

                      <m.div variants={varFade().inUp}>
                        <Button
                          size="medium"
                          variant="contained"
                                onClick={() => window.location.href = 'https://app.vdeepay.com/qrLogin'}
                          sx={{
                            background: 'linear-gradient(45deg, #1a1a2e, #16213e)',
                            borderRadius: '8px',
                            textTransform: 'capitalize',
                            fontWeight: '600',
                            padding: '10px 24px',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #16213e, #0f3460)',
                              boxShadow: '0 6px 20px rgba(22, 33, 62, 0.4)',
                            },
                          }}
                          endIcon={<Iconify icon="ic:round-arrow-right-alt" />}
                        >
                          Try Now
                        </Button>
                      </m.div>
                    </StyledInnerCard>
                  </StyledCard>
                </Grid>
              ))}
          </Grid>
        ))}
    </StyledRoot>
  );
}

function CardTitle({ title = '', color }: { title: string; color: string }) {
  return (
    <m.div variants={varFade().inRight}>
      <Typography 
        variant="h2" 
        fontWeight="bold" 
        color={color}
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {title}
      </Typography>
    </m.div>
  );
}

function CardSubTitle({ title = '', color }: { title: string; color: string }) {
  return (
    <m.div variants={varFade().inRight}>
      <Typography 
        variant="h6" 
        fontWeight="500" 
        color={color}
        sx={{ opacity: 0.8 }}
      >
        {title}
      </Typography>
    </m.div>
  );
}