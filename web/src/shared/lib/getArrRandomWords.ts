export const getArrRandomWords = (words: string[], count: number) => {
  const result = [];

  for (let i = 0; i < count; i++)
    result.push(words[Math.floor(Math.random() * words.length)]);

  return result;
};

export const getCharsFromArrWords = (wordsArray: string[]): string[] => {
  return wordsArray.join(' ').split('');
};
