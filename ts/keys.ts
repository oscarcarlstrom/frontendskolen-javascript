interface A {
	requiredAProp: string;
	optionalAProp?: number;
}

interface B extends A {
	optionalAProp: number;
}

type SameAsAButNoOptionalProps = A & {
	[key in keyof A]-?: A[key];
};

type SameAsAButAllOptionalProps = A & {
	[key in keyof A]?: A[key];
};

interface WillNotWork extends A {
  [key in keyof A]-?: A[key];
}

interface WillWorkButNotTheSame {
  [key: keyof A];
}

const t: WillWorkButNotTheSame = {
  optionalAProp: 0,
  requiredAProp: "hei",
  no: "hei"
}

interface WillWork {
  [key: string]: any;
}

interface MyObject {
  name: string;
  value: number;
}

const getObjectValueFromKey = (obj : MyObject, key: keyof MyObject) => obj[key];

getObjectValueFromKey({name: "Oscar", value: 30}, "name");
getObjectValueFromKey({name: "Oscar", value: 30}, "dude");