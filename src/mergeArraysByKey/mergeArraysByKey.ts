interface ObjectA {
  id: number;
  name: string;
  age: number;
}

interface ObjectB {
  id: number;
  name: string;
  email: string;
  registered: boolean;
}

type Result = ObjectA & ObjectB;

type PropsTypes = {
  arrayA: ObjectA[];
  arrayB: ObjectB[];
  key: string;
};

export const mergeArraysByKey = ({
  arrayA,
  arrayB,
  key,
}: PropsTypes): Result[] => {
  const map = new Map();
  const join: Result[] = [];

  arrayA.forEach((item) => map.set(item[key], item));

  arrayB.forEach((rightItem, index) => {
    const leftItem = map.get(rightItem[key]);

    if (!leftItem) return;

    join.push({ ...leftItem, ...rightItem, id: index + 1 });
  });

  return join;
};
