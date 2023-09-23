import { ZERO_ADDRESS } from '../constants';
import { CHAIN_ID } from '../constants';
import { useWalletClient } from 'wagmi';

const useEthersWalletClient = () => {
  const { data, isLoading } = useWalletClient({ chainId: CHAIN_ID });

  const ethersWalletClient = {
    getAddress: async () => {
      return (await data?.account.address) || ZERO_ADDRESS;
    },
    signMessage: async (message) => {
      const signature = await data?.signMessage({ message });
      return signature || '';
    }
  };

  // This destructuring is used to exclude signMessage from the data object
  const { signMessage, ...rest } = data || {};

  const mergedWalletClient = {
    data: {
      ...ethersWalletClient,
      ...rest
    }
  };

  return { data: mergedWalletClient.data, isLoading };
};

export default useEthersWalletClient;
