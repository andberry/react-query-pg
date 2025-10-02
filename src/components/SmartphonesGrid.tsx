import { useGetSmartphones } from "../data-access/queries";
import { ControlBar } from "./ControlBar";
import { SmartphoneCard } from "./SmartphoneCard";
import { ImSpinner8 as IconSpinner } from "react-icons/im";
import { MdError as IconError } from "react-icons/md";



export const SmartphonesGrid = () => {
  const smartphonesQuery = useGetSmartphones();
  
  return (
    <div className=" mt-6">
      <h2 className='uppercase text-3xl font-black pt-2 pb-6'>Grid View</h2>
      <ControlBar />
      <div className="relative min-h-80 mt-6">
        {(smartphonesQuery.isFetching) && (
          <div className="absolute inset-0 flex items-center justify-center text-5xl">
            <IconSpinner className="animate-spin text-emerald-600" />
          </div>
        )}
        {smartphonesQuery.isError && (
          <div className="absolute inset-0 flex items-center justify-center text-5xl">
            <IconError className="text-red-700" />
          </div>
        )}
        {smartphonesQuery.data && !smartphonesQuery.isFetching && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {smartphonesQuery.data.map((item) => <SmartphoneCard key={item.id} title={item.name} />)}
          </div>
        )}
      </div>
    </div>
  );
}