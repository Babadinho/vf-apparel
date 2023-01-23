import React from 'react';

interface Props {
  className?: string;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  maxWidth?: string;
  margin?: string;
  children: React.ReactNode;
}

/**
 * This component serves as a general wrapper for items that are to be displayed in a grid.
 * It allows for customizable display, flex direction, alignment, max width, and margin properties.
 */

export const ItemWrapper: React.FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
