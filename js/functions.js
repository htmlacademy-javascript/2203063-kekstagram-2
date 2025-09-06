const checksStringLength = (string = '', maxSymbols = 1) => (string.length <= maxSymbols);

const isPalindrome = (string='') => {
  string = string.replaseAll(' ', '').toLowerCase();

  let reversLine = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversLine += string[i];
  }

  return string === reversLine;
};
