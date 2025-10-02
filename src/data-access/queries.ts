import { useQuery } from "@tanstack/react-query"
import { getSmartphones, getSmartphonesWithError } from "./smartphone-restful-api-dev"

export const useGetSmartphones = () => {
  return useQuery({
    queryKey: ['smartphones'],
    queryFn: getSmartphones,
    staleTime: 1000 * 5
  })
}

export const useGetSmartphonesError = () => {
  return useQuery({
    queryKey: ['smartphones-error'],
    queryFn: getSmartphonesWithError,
    staleTime: 1000 * 5
  })
}