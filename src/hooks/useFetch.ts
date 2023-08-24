import useSWR from 'swr';
import Axios from 'axios';

const fetcher = (link: string) => Axios.get(link).then((res) => res.data);
export default function useFetch(url: string) {
  const { data, error, isLoading } = useSWR(
    url ? `https://whatslink.info/api/v1/link?url=${url}` : null,
    fetcher,
    { revalidateIfStale: false, revalidateOnFocus: false }
  );
  return {
    data,
    isLoading,
    error,
  };
}
