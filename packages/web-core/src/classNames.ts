export type ClassMap = { [key: string]: boolean | undefined | null };
export type ClassArray = Classes[];
export type Classes = undefined | string | string[] | ClassMap | ClassArray;

export function classNames(names: Classes): string {
  if (typeof names === "string") {
    return names || "";
  }

  let result = "";

  if (Array.isArray(names)) {
    for (let index = 0; index < names.length; index++) {
      if (typeof names[index] === "string") {
        result += " " + names[index];
        continue;
      }
      const innerResult = classNames(names[index]);
      if (innerResult !== "") {
        result += " " + innerResult;
        continue;
      }
    }
  } else {
    for (let prop in names) {
      if (names.hasOwnProperty(prop) && names[prop]) {
        result += " " + prop;
      }
    }
  }

  return result;
}
