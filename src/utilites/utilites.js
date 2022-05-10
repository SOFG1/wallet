import BigNumber from "bignumber.js";


export const convertToWei = (price) => {
  return "0x" + Number(price * 1e18).toString(16);
};

export const convertToHex = (value) => {
console.log(123)
}

export function sanitizeHex(hex) {
  hex = hex.substring(0, 2) === "0x" ? hex.substring(2) : hex;
  if (hex === "") {
    return "";
  }
  hex = hex.length % 2 !== 0 ? "0" + hex : hex;
  return "0x" + hex;
}

export function convertStringToHex(value) {
  return new BigNumber(`${value}`).toString(16);
}

export function convertAmountToRawNumber(value , decimals = 18) {
  return new BigNumber(`${value}`).times(new BigNumber("10").pow(decimals)).toString();
}