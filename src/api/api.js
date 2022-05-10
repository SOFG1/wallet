import axios from 'axios'

const instance = axios.create({
    baseURL: "https://ethereum-api.xyz",
    timeout: 30000, // 30 secs
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })

  export const getGasPrices = async ()=> {
      const results = await instance.get(`/gas-prices`)
      return results.data.result
  }

  export const apiGetAccountNonce = async (address, chainId) => {
    const response = await instance.get(`/account-nonce?address=${address}&chainId=${chainId}`);
    const { result } = response.data;
    return result;
  };