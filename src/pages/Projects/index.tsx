import * as React from 'react';
import { StyledProjects } from './styles';
import Header from '../../components/Header/index';
import { Container, Section } from '../../components/Container';
import { H1 } from '../../utils/typography';

interface ProjectsProps {};

function Projects({}: React.Props<ProjectsProps>) {
  return (
    <StyledProjects>
      <Header />
      <Section>
        <Container>
          <H1>Projects</H1>
        </Container>
      </Section>
    </StyledProjects>
  );
}

export default Projects;
