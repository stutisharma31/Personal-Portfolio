import React, { useEffect, useRef } from 'react'
import styled, { useTheme } from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
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

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const StyledTimelineDot = styled(TimelineDot)`
  background-color: ${({ theme }) => theme.primary};
`;

const StyledTimelineConnector = styled(TimelineConnector)`
  background-color: ${({ theme }) => theme.primary};
`;

const Index = () => {
    const theme = useTheme();
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        const title = container.querySelector('.experience-title');
        const desc = container.querySelector('.experience-desc');
        const items = container.querySelectorAll('.experience-item');

        gsap.set([title, desc, ...items], { autoAlpha: 0, y: 50 });

        ScrollTrigger.batch([title, desc], {
            onEnter: (elements) => gsap.to(elements, {
                autoAlpha: 1,
                y: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out",
                overwrite: true
            }),
            start: "top 80%",
        });

        items.forEach((item, index) => {
            gsap.to(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    onEnter: () => gsap.to(item, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        overwrite: true
                    })
                }
            });
        });

    }, []);
    
    return (
        <Container id="experience" ref={containerRef}>
            <Wrapper>
                <Title className="experience-title">Roles and Contributions</Title>
                <Desc className="experience-desc">
                Shaping ideas, leading teams, and crafting solutions that bridge the gap between innovation and execution.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <TimelineItem key={index} className="experience-item">
                                <TimelineSeparator>
                                    <StyledTimelineDot />
                                    {index !== experiences.length - 1 && <StyledTimelineConnector />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Index