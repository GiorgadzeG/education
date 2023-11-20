import React from 'react';
import { useWindowSize } from './useWindowSize';
import ThemeToggle from './ThemeToggle';

const ThemeManager = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 768; // შეამოწმეთ თუ დესკტოპია

  return (
    <div>
      {isDesktop ? (
        <ThemeToggle />
      ) : (
        <p>Theme switching is only available on desktop</p>
      )}
    </div>
  );
};

export default ThemeManager;
