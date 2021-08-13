/*
https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
sets all components to border-box, the new box sizing format that makes the width of the component 
include the padding and bordergit  

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
*/
import theme from '../lib/theme';

const styleBigAvatar = {
  width: '80px',
  height: '80px',
  margin: '0px auto 15px',
};

const styleSelectInput = {
  font: '15px Muli',
  color: '#222',
  fontWeight: '300',
  width: '100%',
  paddingBottom: 10,
  minWidth: '90%',
  textAlign: 'left',
};

const styleRaisedButton = {
  margin: 4,
  font: '20px Muli',
  padding: '10px 30px 10px 30px',
  size: 'small',
  borderRadius: '10px',
  borderColor: 'white',
  border: '1px solid',
};

const styleSubmitButton = {
  margin: '8px 0 8px 0',
  font: '20px Muli',
  padding: '10px 30px 10px 30px',
  size: 'small',
  borderRadius: '10px',
  borderColor: 'white',
  border: '1px solid',
  backgroundColor: '#02C769',
};

const styleInfoButton = {
  backgroundColor: theme.palette.button.default.info,
  borderColor: 'black',
  ...styleRaisedButton,
};

const styleTimerControlButton = {
  margin: 4,
  fontSize: 'large',
  padding: '10px 30px 10px 30px',
  borderRadius: '2px',
};

const styleToolbar = {
  background: theme.palette.background.paper,
  height: '64px',
  paddingRight: '20px',
};

const styleGoogleLoginButton = {
  borderRadius: '2px',
  textTransform: 'none',
  font: '16px Muli',
  fontWeight: '400',
  letterSpacing: '0.01em',
  color: 'white',
  backgroundColor: '#DF4930',
};

const styleTextField = {
  font: '15px Muli',
  color: '#222',
  fontWeight: '300',
  width: '100%',
};

const styleForm = {
  margin: 'auto',
};

const styleGrid = {
  margin: '0px auto',
  font: '16px Muli',
  color: '#222',
  fontWeight: '300',
  lineHeight: '1.5em',
  align: 'center',
};

const stylePaper = {
  width: '100%',
  padding: 100,
  backgroundColor: 'white',
};

const styleTitle = { margin: '45px auto', fontSize: '44px', fontWeight: '400' };

module.exports = {
  styleSubmitButton,
  styleTitle,
  styleBigAvatar,
  styleRaisedButton,
  styleToolbar,
  styleGoogleLoginButton,
  styleTextField,
  styleForm,
  styleGrid,
  styleSelectInput,
  stylePaper,
  styleInfoButton,
  styleTimerControlButton,
  styleSubmitButton,
};
