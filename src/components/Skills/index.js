import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS file

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-in-out;
`

const Skills = () => {
  const skillsRef = useRef(null)
  const skillCardsRef = useRef([])
  const skillItemsRef = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const skillsSection = skillsRef.current
    const skillCards = skillCardsRef.current
    const skillItems = skillItemsRef.current

    gsap.fromTo(skillsSection.querySelector('.skills-title'), 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: {
        trigger: skillsSection,
        start: 'top 80%',
      }}
    )

    gsap.fromTo(skillsSection.querySelector('.skills-desc'),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, scrollTrigger: {
        trigger: skillsSection,
        start: 'top 80%',
      }}
    )

    skillCards.forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50, rotationX: -10 },
        { opacity: 1, y: 0, rotationX: 0, duration: 0.8, delay: 0.1 * index, scrollTrigger: {
          trigger: card,
          start: 'top 90%',
        }}
      )

      gsap.fromTo(card.querySelectorAll('.skill-item'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.2 + 0.1 * index, scrollTrigger: {
          trigger: card,
          start: 'top 90%',
        }}
      )
    })

    // Hover animations for skill items
    skillItems.forEach((itemGroup) => {
      if (itemGroup && itemGroup.length) {
        itemGroup.forEach((item) => {
          if (item) {
            item.addEventListener('mouseenter', () => {
              gsap.to(item, {
                scale: 1.1,
                boxShadow: '0 0 15px rgba(133, 76, 230, 0.5)',
                duration: 0.3
              })
              const img = item.querySelector('img');
              if (img) {
                gsap.to(img, {
                  rotate: 360,
                  duration: 0.5
                })
              }
            })

            item.addEventListener('mouseleave', () => {
              gsap.to(item, {
                scale: 1,
                boxShadow: 'none',
                duration: 0.3
              })
              const img = item.querySelector('img');
              if (img) {
                gsap.to(img, {
                  rotate: 0,
                  duration: 0.5
                })
              }
            })
          }
        })
      }
    })

  }, [])

  return (
    <Container id="skills" ref={skillsRef}>
      <Wrapper>
        <Title className="skills-title">Skills</Title>
        <Desc className="skills-desc">Skills that fuel creativity and drive innovation</Desc>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill key={index} ref={el => skillCardsRef.current[index] = el}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, itemIndex) => (
                  <SkillItem 
                    key={itemIndex} 
                    className="skill-item"
                    ref={el => {
                      if (!skillItemsRef.current[index]) {
                        skillItemsRef.current[index] = []
                      }
                      skillItemsRef.current[index][itemIndex] = el
                    }}
                  >
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills