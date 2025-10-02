import { useGetSmartphonesError } from "../data-access/queries";
import { SmartphoneCard } from "./SmartphoneCard";
import { ImSpinner8 as IconSpinner } from "react-icons/im";
import { MdError as IconError } from "react-icons/md";


export const SmartphonesGridError = () => {
  const smartphonesQuery = useGetSmartphonesError();
  
  return (
    <div className="relative min-h-64">
      {(smartphonesQuery.isFetching) && (
        <div className="absolute inset-0 flex items-center justify-center text-5xl">
          <IconSpinner className="animate-spin text-emerald-600" />
        </div>
      )}
      {smartphonesQuery.isError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <IconError className="text-red-700 text-4xl" />
          <p className="text-lg">Error fetching Smartphones list</p>
        </div>
      )}
      {smartphonesQuery.data && !smartphonesQuery.isFetching && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {smartphonesQuery.data.map((item) => <SmartphoneCard key={item.id} title={item.name} />)}
        </div>
      )}
    </div>
  );
}