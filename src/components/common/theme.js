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
export const COLOR = {
  // 색상 코드를 정해놓고 필요한 곳에서 import 해서 사용하기
  black: '#323232',
  gray: '#A6A6A6',
  white: '#fff',
  mainGreen: '#D0DB40', // 메인 배경색
  lightGreen: '#E8EF98',
};
