import React from 'react';
import { Subtitle } from 'components/subtitle';
import { Title } from 'components/title';
import 'assets/stylesheets/heading.scss';

interface HeadingProps {
    title: string;
    subtitle: string;
};

const Heading = ({ title, subtitle}: HeadingProps) => {
  return (
    <div className='heading'>
        <Title title={title} />
        <Subtitle subtitle={subtitle} />
    </div>
  );
}

export default Heading;