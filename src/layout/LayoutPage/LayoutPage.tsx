import React from 'react'
import { useLayoutPage } from './hook'

const LayoutPage: React.FC<{ children: NonNullable<React.ReactNode> }> = ({ children }) => {
  return useLayoutPage(children)
};

export default LayoutPage;
