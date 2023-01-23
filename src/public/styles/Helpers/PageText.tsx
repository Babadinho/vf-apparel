import React from 'react';

interface Props {
  className?: string;
  fontSize?: string;
  color?: string;
  children: React.ReactNode;
}

/*
  This component renders a span element with the abilityto customize 
  the font size, color and className via props
 */

export const PageText = ({ className, children }: Props) => {
  return <span className={className}>{children}</span>;
};
