interface IProps {
  title: string;
}

export const SmartphoneCard = ({title}: IProps) => {
  return (
    <div className="border-2 border-black p-4 rounded-md border-t-8 border-t-brown">
      <h3 className="text-lg leading-none font-sansation">{title}</h3>
    </div>
  );
}