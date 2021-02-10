//Unions

type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

type stringOrNumber = any;


function getLength(obj: string | string[]) {
  return obj.length;
}