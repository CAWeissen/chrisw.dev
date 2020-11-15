import * as React from 'react';
import type Color from '../../utils/theme';
import { StyledContainer, StyledFlexContainer, StyledSection } from './styles';

interface ContainerProps {
  children: any | any[];
  thin?: boolean;
};

interface SectionProps {
  children: any[] | any;
  color?: string;
};

function Container({thin = false, children}:ContainerProps) {
  return (
    <StyledContainer thin={thin}>
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
