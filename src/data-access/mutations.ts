import { useMutation } from "@tanstack/react-query"
import { createSmartphone } from "./smartphone-restful-api-dev"
import type { ISmartphoneToCreate } from "../types/types"

export const useCreateSmartphone = () => {
  return useMutation({
    mutationFn: (smartphoneToCreate: ISmartphoneToCreate) => { return createSmartphone(smartphoneToCreate)},
    onMutate: () => {console.log('useCreateSmartphone onMutate')},
    onError: () => {console.log('useCreateSmartphone onError')},
    onSuccess: () => {console.log('useCreateSmartphone onSuccess')}
  })
}