const theme = {
  name: 'light',
  logo: {
    img: 'url(./img/logo.png)',
    color: '#9c36b5',
    color_2: '#be4bdb',
  },
  font: {
    fontFamily: 'poppins',
    primaryText: '#495057',
    secondaryText: '#343a40',
    tertiaryText: '#9c36b5',
    fontWeight: 300,
  },
  color: {
    backgroundColor: '#f8f9fa',
    switch: '#e9ecef',
    icon: '#750d8f',
  },
  modal: {
    primaryColor: '#f1f3f5',
    secondaryColor: '#dee2e6'
  }
}
const invertTheme = {
  name: 'dark',
  logo: {
    img: 'url(./img/logo_2.png)',
    color: '#f8f9fa',
  },
  font: {
    fontFamily: 'poppins',
    primaryText: '#f8f9fa',
    secondaryText: '#ced4da',
    tertiaryText: '#b555cc',
    fontWeight: 200,
  },
  color: {
    backgroundColor: '#212529',
    switch: 'teal',
    icon: '#e6eaee',
  },
  modal: {
    primaryColor: '#343a40',
    secondaryColor: '#495057'
  }
}

export const Theme = { theme, invertTheme }