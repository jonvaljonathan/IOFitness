import PropTypes from 'prop-types';
import Link from 'next/link';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styleToolbar from './SharedStyles';

// Header component that is displayed on all pages

function Header({ user, hideHeader }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      style={{
        overflow: 'hidden',
        position: 'relative',
        display: 'block',
        top: hideHeader ? '-64px' : '0px',
        transition: 'top 0.5s ease-in',
      }}
    >
      <Toolbar style={styleToolbar}>
        <Grid container direction="row" justifyContent="space-around">
          <Grid item xs={9} style={{ textAlign: 'right' }}>
            {user ? (
              <div>
                <Button
                  id="menu-button"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  Menu
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} id="my-account-button">
                    <Link href="/my-account" as="/my-account">
                      <a style={{ color: '#FFF' }}> My Account</a>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose} id="build-program-button">
                    <Link href="/build-program" as="/build-program">
                      <a style={{ color: '#FFF' }}>Build Program</a>
                    </Link>
                  </MenuItem>
                  <MenuItem id="workout-button">
                    <Link href="/train" as="/train">
                      <a style={{ color: '#FFF' }}>Train</a>
                    </Link>
                  </MenuItem>
                  <MenuItem id="logout-button">
                    <Link href="/api/auth/logout">
                      <a style={{ color: '#FFF' }}>Logout</a>
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <Link href="/api/auth/login">
                <a style={{ margin: '0px 20px 0px auto' }}>Log in</a>
              </Link>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    displayName: PropTypes.string,
    isAdmin: PropTypes.bool,
    isGithubConnected: PropTypes.bool,
  }),
  hideHeader: PropTypes.bool,
};

Header.defaultProps = {
  user: null,
  hideHeader: false,
};

export default Header;
