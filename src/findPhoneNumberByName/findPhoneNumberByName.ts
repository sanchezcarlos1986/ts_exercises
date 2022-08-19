/*
-------------------------
|       |  ABC  |  DEF  |
|   1   |   2   |   3   |
-------------------------
|  GHI  |  JKL  |  MNO  |
|   4   |   5   |   6   |
-------------------------
| PQRS  |  TUV  | WXYZ  |
|   7   |   8   |   9   |
-------------------------
|       |       |       |
|   *   |   0   |   #   |
-------------------------
*/

const letters: string[] = [
  "",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tuv",
  "wxyz",
];

const phone: { [x: number]: string }[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(
  (num, i) => {
    if (!letters[i]) "";
    return { [num]: letters[i] };
  }
);

export const prefix = "1 (800)";

export const findPhoneNumberByName = (companyName: string): string => {
  const letters = companyName.split("");

  const phoneNumber = letters
    .map((letter) => {
      return phone.map((num) => {
        if (Object.values(num)[0]?.includes(letter)) {
          return Object.keys(num)[0];
        }
      });
    })
    .flat()
    .join("");

  return `${prefix} ${phoneNumber}`;
};
