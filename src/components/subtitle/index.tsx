import React from 'react';

interface SubtitleProps {
    subtitle: string;
}

const Subtitle = ({ subtitle }: SubtitleProps) => {
  return (
    <h3>{subtitle}</h3>
  );
}

export { Subtitle };