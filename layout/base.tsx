import { ReactNode, FunctionComponent } from 'react';
import dynamic from 'next/dynamic';
import Footer from 'components/shared/footer';

type Props = {
  children?: ReactNode
};

const Header = dynamic(() => import('components/shared/header' /* webpackChunkName: "header" */));

const BaseLayout:FunctionComponent<Props> = ({ children } : Props) => (
  <>

    <Header />
    <main className="max-w-screen-lg container mx-auto px-2 md:px-8 ">
      {children}
    </main>
    <Footer />

  </>
);
BaseLayout.defaultProps = {
  children: '',
};

export default BaseLayout;
