import * as React from 'react';
import type Color from '../../utils/theme';
import { StyledContainer, StyledFlexContainer, StyledSection } from './styles';

interface ContainerProps {
  children: any[];
  direction?: string;
};

interface SectionProps {
  children: any[] | any;
  color?: string;
};

function Container({children}: React.Props<ContainerProps>) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
}

function FlexContainer(props:any) {
  return (
    <StyledFlexContainer dir={props.direction}>
      {props.children}
    </StyledFlexContainer>
  );
}

function Section(props:SectionProps) {
  const {
    color,
    children
  } = props;
  return (
    <StyledSection bg={color}>
      {children}
    </StyledSection>
  );
}

export { Container, FlexContainer, Section };
