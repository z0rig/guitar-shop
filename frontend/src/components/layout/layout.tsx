import { FC, PropsWithChildren } from 'react';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className="wrapper">
    <Header />
    <main className="page-content">
      { children }
    </main>
    <Footer />
  </div>
);
