const flattenConstructor = () => {
  return (dict: Option)=> Object.values(dict);
};

interface Option {
  a: number | string;
  b: number | string;
}

const flat1 = flattenConstructor();
const r1 = flat1({ a: 1, b: 2 });
console.log(r1);

const flat2 = flattenConstructor();
const r2 = flat2({ a: '1', b: '2' });
console.log(r2);