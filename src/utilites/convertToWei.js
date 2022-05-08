export const convertToWei = (price)=> {
    return "0x" + Number(price * 1e18).toString(16);
  }