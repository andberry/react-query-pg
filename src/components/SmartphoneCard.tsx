interface IProps {
  title: string;
}

export const SmartphoneCard = ({title}: IProps) => {
  return (
    <div className="border-2 border-emerald-500 p-4 rounded-md">
      <h3 className="text-lg font-medium leading-none">{title}</h3>
    </div>
  );
}