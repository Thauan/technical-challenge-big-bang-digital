import React from 'react';
import { Sidebar } from 'components/sidebar';
import 'assets/stylesheets/home.scss';
import Heading from 'components/heading';
import { ListNews } from 'components/list-news';

const Home: React.FC = () => {

  return (
    <main>
        <div className="container h-full">
            <Sidebar />
            <div className="content">
              <Heading 
                title="Painel"
                subtitle="As últimas atualizações de hoje"
              />
              <ListNews />
            </div>
        </div>
    </main>
  );
}

export { Home };