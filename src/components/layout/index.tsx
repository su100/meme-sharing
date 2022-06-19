import React from 'react';
import styled from 'styled-components';
import { mobile } from 'styles/theme';
import Header from './Header';
import Sidebar from './SideBar';
import Footer from './Footer';

interface Props {
  children: React.ReactElement;
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <Sidebar />
    </>
  );
}

export default Layout;

const Main = styled.div`
  width: 100%;
  ${mobile} {
    width: 100vw;
  }
`;
