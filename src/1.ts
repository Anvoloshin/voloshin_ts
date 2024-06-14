const flattenConstructor = <T>() : ReturnFunctionType<T>  => {
  return (dict: Option<T>) : T[] => Object.values(dict);
};

type ReturnFunctionType<T> = (dict: Option<T>) => T[];

interface Option<T> {
  [key: string]: T;
 }

const flat1 = flattenConstructor<number>();
const r1 = flat1({ a: 1, b: 2 });
console.log(r1);

const flat2 = flattenConstructor<string>();
const r2 = flat2({ a: '1', b: '2' });
console.log(r2);