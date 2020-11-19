import * as React from 'react';
import { StyledContainer, StyledFlexContainer, StyledSection } from './styles';

interface ContainerProps {
  children: any | any[];
  thin?: boolean;
  webGL?: boolean;
};

interface FlexContainerProps {
  children: any | any[];
  direction?: 'row'|'column';
  thin?: boolean;
  webGL?: boolean;
  alignCenter?: boolean;
  alignStart?: boolean;
  alignEnd?: boolean;
  justifyAround?: boolean;
  justifyBetween?: boolean;
  justifyCenter?: boolean;
  justifyStart?: boolean;
  justifyEnd?: boolean;
};

interface SectionProps {
  children: any[] | any;
  color?: string;
  doubled?: boolean;
};

function Container({thin = false, webGL = false, children}:ContainerProps) {
  return (
    <StyledContainer thin={thin} webGL={webGL}>
      {children}
    </StyledContainer>
  );
}

function FlexContainer(props:FlexContainerProps) {
  const {
    children,
    direction = 'row',
    ...flexContainerProps
  } = props;

  return (
    <StyledFlexContainer dir={direction} {...flexContainerProps}>
      {children}
    </StyledFlexContainer>
  );
}

function Section(props:SectionProps) {
  const {
    color,
    children,
    ...sectionProps
  } = props;
  return (
    <StyledSection {...sectionProps} bg={color}>
      {children}
    </StyledSection>
  );
}

export { Container, FlexContainer, Section };
