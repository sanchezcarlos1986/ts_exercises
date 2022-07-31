export const setPassword = (string: string): string => {
  const words = string.toLowerCase().split(" ");

  const firstLetters = words.map((word) => word.charAt(0));

  return firstLetters.join("");
};
