import { useQueryClient } from "@tanstack/react-query"
import { useCreateSmartphone } from "../data-access/mutations";
import { smartphoneToCreate } from "../data-access/smartphone-restful-api-dev";

export const ControlBar = () => {
  const queryClient = useQueryClient();
  const createSmartphoneMutation = useCreateSmartphone()
  
  const onRefresh = () => {
    queryClient.invalidateQueries({queryKey: ['smartphones']})
    console.log('smartphones query invalidated', queryClient);
  }

  const onAddOne = () => {
    createSmartphoneMutation.mutate(smartphoneToCreate)
  }
  return (
    <div className="flex gap-4">
      <button onClick={onRefresh} className="bg-green text-white px-3 py-2 rounded-md">Refresh</button>
      <button onClick={onAddOne} className="bg-green text-white px-3 py-2 rounded-md">Add One</button>
    </div>
  )
}