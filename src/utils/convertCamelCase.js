const convertToCamelCase = (string) => {
  if (string)
    return string
      .toLowerCase()
      .split('_')
      .map((item, index) =>
        index > 0 ? item.charAt(0).toUpperCase() + item.substr(1) : item,
      )
      .join('');

  return '';
};

export { convertToCamelCase };
