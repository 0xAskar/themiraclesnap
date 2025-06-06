import styled, { useTheme } from 'styled-components';

import { ReactComponent as MetaMaskFox } from '../assets/metamask_fox.svg';
import { MetaMask } from './MetaMask';
import { PoweredBy } from './PoweredBy';
import { TheMiracle } from './TheMiracle';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  border-top: 1px solid ${(props) => props.theme.colors.border?.default};
`;

const PoweredByButton = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  border-radius: ${({ theme }) => theme.radii.button};
  box-shadow: ${({ theme }) => theme.shadows.button};
  background-color: ${({ theme }) => theme.colors.background?.alternative};
`;

const PoweredByContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const Footer = () => {
  const theme = useTheme();

  return (
    <FooterWrapper>
      <PoweredByButton href="https://themiracle.io/" target="_blank">
        <TheMiracle size={24}/>
        <PoweredByContainer>
          <PoweredBy color={theme.colors.text?.muted} />
          <div className="text-black font-bold">theMiracle</div>
        </PoweredByContainer>
      </PoweredByButton>
    </FooterWrapper>
  );
};
