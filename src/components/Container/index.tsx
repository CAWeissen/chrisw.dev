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
};

interface SectionProps {
  children: any[] | any;
  color?: string;
};

function Container({thin = false, webGL = false, children}:ContainerProps) {
  return (
    <StyledContainer thin={thin} webGL={webGL}>
      {children}
    </StyledContainer>
  );
}

function FlexContainer(props:any) {
  const {
    children,
    direction,
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
