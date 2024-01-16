const deviceSizes = {
  mobile: '375px',
  tablet: '1024px',
  laptop: '1440px',
};

const device = {
  mobile: `screen and (min-width: ${deviceSizes.mobile})`,
  tablet: `screen and (min-width: ${deviceSizes.tablet})`,
  laptop: `screen and (min-width: ${deviceSizes.laptop})`,
};

const theme = {
  device,
};

export default theme;
