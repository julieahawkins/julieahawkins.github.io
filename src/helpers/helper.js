export const setThemeClass = (theme, className) => {
  const newClass = theme === 'dark'
    ? `${className} dark`
    : `${className}`;

  return newClass;
};