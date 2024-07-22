import React from 'react';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MemoryIcon from '@mui/icons-material/Memory';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import GamesIcon from '@mui/icons-material/Games';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';

const Container = styled.div`
  flex: 0 0 240px; /* Adjust as needed */
  background-color: #f0f0f0; /* Example color */
  color: #333; /* Example color */
  padding: 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const LogoText = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const Separator = styled.hr`
  border: none;
  border-top: 1px solid #424242;
  margin: 20px 0;
`;

const Menu = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo src='/touseef.png' alt="Touseef" />
        <LogoText>YouTube</LogoText>
      </LogoContainer>
   <Link to='/' style={{textDecoration:"none"}}>  <NavItem icon={<HomeIcon />} label="Home" /></Link>
   
   <Link to='/' style={{textDecoration:"none",color:"inherit"}}>  <NavItem icon={<ExploreIcon />} label="Explore" /></Link>
   <Link to='/subscription' style={{textDecoration:"none",color:"inherit"}}>  <NavItem icon={<SubscriptionsIcon />} label="Subscriptions" /></Link>
      <Separator />
      <NavItem icon={<LocalLibraryIcon />} label="Library" />
      <NavItem icon={<MemoryIcon />} label="Memory" />
      <Separator />

      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="signin" style={{ marginBottom: '5px' }}>
          Sign in to subscribe, Like & comment
        </label>
        {/* Fixed Link Implementation */}
        <Link to="/Login"> {/* Replace "/signin" with your actual signin route */}
          <button
            id="signin"
            style={{
              backgroundColor: '#e62117',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            Sign In
          </button>
        </Link>
      </div>

      <Separator />
      <NavItem icon={<LibraryMusicIcon />} label="Music" />
      <NavItem icon={<SportsBaseballIcon />} label="Sports" />
      <NavItem icon={<GamesIcon />} label="Gaming" />
      <NavItem icon={<RemoveShoppingCartIcon />} label="Movies" />
      <NavItem icon={<NewspaperIcon />} label="News" />
      <NavItem icon={<LiveTvIcon />} label="Live" />
      <Separator />
      <NavItem icon={<SettingsIcon />} label="Settings" />
    </Container>
  );
};

const NavItem = ({ icon, label }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <div style={{ marginRight: '10px' }}>{icon}</div>
      <div>{label}</div>
    </div>
  );
};

const SignInSection = () => {
  return (
    <>
    </>
  );
};

export default Menu;
