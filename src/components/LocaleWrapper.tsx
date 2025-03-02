
import React from 'react';
import { LocaleProvider } from '../context/LocaleContext';

interface LocaleWrapperProps {
  children: React.ReactNode;
}

const LocaleWrapper = ({ children }: LocaleWrapperProps) => {
  return <LocaleProvider>{children}</LocaleProvider>;
};

export default LocaleWrapper;
