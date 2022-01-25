import { IHolding } from 'types/interfaces';
import axios from 'axios';
import { useQuery } from 'react-query';

interface ICurrentHoldingsReturn {
    currentHoldings: IHolding[];
    isLoading: boolean;
}

const fetchCurrentHoldings = () => axios.get('http://167.172.146.148:3000/wallets/test').then(({data}) => data.payload)

const useCurrentHoldings = (): ICurrentHoldingsReturn => {
    const { data, isLoading } = useQuery(['currentHoldings'], fetchCurrentHoldings)
    return { currentHoldings: data?.currentHoldings || [], isLoading}
}

export default useCurrentHoldings;