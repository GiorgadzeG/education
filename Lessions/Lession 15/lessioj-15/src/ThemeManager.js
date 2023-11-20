// ThemeManager.js
import React from 'react';
import { useWindowSize } from './useWindowSize';
import { useLocalStorage } from './useLocalStorage';
import ThemeToggle from './ThemeToggle';

const ThemeManager = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 768; // შეამოწმეთ თუ დესკტოპია
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const bodyStyle = {
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
    color: theme === 'dark' ? '#fff' : '#333',
    transition: 'background-color 0.3s, color 0.3s',
    height: '100vh', // ყოველი გამოყენებული სიგანეში ფონის ფერი იცვლება
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={bodyStyle}>
      <h1>Best background color changer</h1>
      {isDesktop ? (
        <ThemeToggle onToggle={toggleTheme} />
      ) : (
        <p>Theme switching is only available on desktop</p>
      )}
    </div>
  );
};

export default ThemeManager;
