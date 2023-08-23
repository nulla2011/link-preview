import useSWR from "swr";

export default function useFetch(url:string)=>{
  const { data, error, isLoading } = useSWR(`https://whatslink.info/api/v1/link?url=${url}`,fetcher)
  return {
    data,
    isLoading,
    isError: error,
  }
}