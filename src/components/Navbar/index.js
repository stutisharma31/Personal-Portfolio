import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import './../Animations.css'


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" className="nav-icon" />
             <Span>STUTI</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {

            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems className='nav-items'>
          {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item, index) => (
            <NavLink key={item} href={`#${item.toLowerCase()}`} className="nav-item" style={{animationDelay: `${index * 0.1}s`}}>
              {item}
            </NavLink>
          ))}
        </NavItems>
        
        <ButtonContainer className="nav-item" style={{animationDelay: '0.6s'}}>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {/* <ButtonContainer className="nav-item" style={{animationDelay: '0.7s'}}>
          <GitHubButton href={Bio.youtube} target="_blank">Youtube Profile</GitHubButton>
        </ButtonContainer> */}


        
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <MobileLink href='#contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>

    
  )
}

export default Navbar