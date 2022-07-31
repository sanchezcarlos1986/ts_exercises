const isOpen = (character: string): boolean =>
  ["(", "{", "["].includes(character);

const closes = (characterA: string, characterB: string) => {
  const pairs: Record<string, string> = { "(": ")", "{": "}", "[": "]" };

  return pairs[characterA] === characterB;
};

export const openCloseCharacters = (characters: string): boolean => {
  const stack: string[] = [];

  characters.split("").map((character) => {
    if (isOpen(character)) {
      stack.push(character);
    } else {
      let topChar = stack.pop() || "";

      if (!closes(topChar, character)) return false;
    }
  });

  return !stack.length;
};
