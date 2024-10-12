import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS file


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  React.useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <Container id="projects" data-aos="zoom-in-right" data-aos-duration="1500" >
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        From web apps to AI tools, I build innovative solutions that blend creativity with cutting-edge tech. Check out some of my standout projects!
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          
          {toggle === 'android app' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ANDROID APP</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
          }
          <Divider />
          <Divider />
          {toggle === 'aiml' ?
            <ToggleButton active value="aiml" onClick={() => setToggle('aiml')}>AI/ML</ToggleButton>
            :
            <ToggleButton value="aiml" onClick={() => setToggle('aiml')}>AI/ML</ToggleButton>
          }
          <Divider />
          
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects