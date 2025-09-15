import NextLink from 'next/link';
import { Box, Grid, Link, Stack, Container, Typography, IconButton } from '@mui/material';
import { PATH_PAGE } from '../../routes/paths';
import Logo from '../../components/logo';
import Iconify from '../../components/iconify';

// Social icons array with brand colors
const _socials = [
  { name: 'Facebook', icon: 'eva:facebook-fill', href: 'https://facebook.com', color: '#4267B2' },
  { name: 'Twitter', icon: 'eva:twitter-fill', href: 'https://twitter.com', color: '#00ACEE' },
  { name: 'Instagram', icon: 'eva:instagram-fill', href: 'https://instagram.com', color: '#C13584' },
  { name: 'LinkedIn', icon: 'eva:linkedin-fill', href: 'https://linkedin.com', color: '#005983' },
];

// Footer links
const LINKS = [
  {
    headline: `${process.env.REACT_APP_PROJECT_TITLE}`,
    children: [
      { name: 'About us', href: PATH_PAGE.about },
      { name: 'Contact us', href: PATH_PAGE.contact },
      { name: 'FAQs', href: PATH_PAGE.faqs },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Conditions', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  {
    headline: 'Contact',
    children: [
      { name: 'support@PSPKA.com', href: 'mailto:support@PSPKA.com' },
      { name: 'Plot No.5, Second Floor, Pocket-5, Rohini Sector 24, New Delhi 110085', href: '#' },
    ],
  },
];

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
        overflow: 'hidden',
        py: 3,
        mt: 2,
      }}
    >
      {/* Logo watermark */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.05,
          zIndex: 0,
          width: { xs: '80%', md: '40%' },
          pointerEvents: 'none',
        }}
      >
        <Logo sx={{ width: '100%', height: 'auto' }} />
      </Box>

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          {/* Logo */}
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Logo sx={{ mx: { xs: 'auto', md: 'inherit' }, zIndex: 2, position: 'relative' }} />
          </Grid>

          {/* Disclaimer and social icons */}
          <Grid item xs={12} md={4} sx={{ mb: { xs: 3, md: 0 } }}>
            <Typography
              variant="body1"
              sx={{ pr: { md: 4 }, fontWeight: 500 }}
            >
              Disclaimer: Any dispute arising under these terms and conditions shall be subject to
              the jurisdiction of the courts of Delhi.
            </Typography>

            <Stack
              spacing={1}
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 2 }}
            >
              {_socials.map((social) => (
                <IconButton
                  key={social.name}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: social.color, // use brand color as default
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'scale(1.2)',
                    },
                  }}
                >
                  <Iconify icon={social.icon} width={24} height={24} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Links */}
          <Grid item xs={12} md={7}>
            <Stack spacing={7} justifyContent="space-between" direction={{ xs: 'column', md: 'row' }}>
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={1}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                >
                  <Typography
                    component="div"
                    variant="subtitle1"
                    sx={{ fontWeight: 600 }}
                  >
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <NextLink key={link.name} href={link.href} passHref>
                      <Link color="inherit" variant="body1" sx={{ fontSize: '0.95rem' }}>
                        {link.name}
                      </Link>
                    </NextLink>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography
          variant="caption"
          component="div"
          sx={{ mt: 4, textAlign: { xs: 'center', md: 'left' }, fontSize: '0.85rem' }}
        >
          © {date}. All rights reserved
        </Typography>
      </Container>
    </Box>
  );
}
