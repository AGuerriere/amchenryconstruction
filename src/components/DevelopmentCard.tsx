interface DevelopmentCardProps {
  imagePath: string;
  noticeColor: string;
  noticeContent: string;
  location: string;
}

const DevelopmentCard: React.FC<DevelopmentCardProps> = ({ imagePath, noticeColor, noticeContent, location }) => {
  return (
    <div className="">
      <div
        className="h-[350px] bg-cover bg-no-repeat bg-center flex items-end"
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        <div 
        className={`w-full h-[50px] flex p-2 justify-start items-center`}
        style={{ backgroundColor: noticeColor}}>
          <p className="text-white">{noticeContent}</p>
        </div>
      </div>
      <div className="justify-center mt-8 text-2xl font-medium leading-10 text-[#24A8D9]">
        Mill Street, Ballycastle,
      </div>
      <p><span className="font-bold text-gray-900">Location: </span>{location}</p>
    </div>
  );
};

export default DevelopmentCard;