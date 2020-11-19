import * as React from 'react';
import { StyledFooter } from './styles';
import { H6 } from '../../utils/typography';
import { FlexContainer, Section } from '../Container/index';
import Button from '../Button';

interface FooterProps {};

const address = `caweissen`;
const domain = 'gmail.com';

function Footer({}:FooterProps) {
  const footerButton = React.useRef<HTMLSpanElement>(null);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(`${address}@${domain}`)
    if (footerButton.current) {
      footerButton.current.innerText = 'Copied!';

      setTimeout(() => {
        if (footerButton.current) {
          footerButton.current.innerText = `${address}@${domain}`
        }
      }, 1500);
    }
  }

  return (
    <StyledFooter>
      <Section color={'black'}>
        <FlexContainer direction="column" alignEnd>
          <Button color={'white'} round onClick={copyEmail}>
            <span ref={footerButton}>{address}@{domain}</span>
          </Button>
        </FlexContainer>
        <img src="/assets/img/polyhead.png" alt="Polygon version of Chris Weissenberger's head" />
      </Section>
    </StyledFooter>
  );
}

export default Footer;
