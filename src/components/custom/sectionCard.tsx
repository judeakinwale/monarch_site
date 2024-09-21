import React from "react";
import { useNavigate } from "react-router-dom";

interface ISectionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  image?: string;
  label?: string;
  url?: string;
}
const SectionCard = ({
  className,
  image,
  label,
  url,
  ...props
}: ISectionCardProps) => {
  const navigate = useNavigate();
  const onClickFn = () => {
    if (url) navigate(url);
  };
  return (
    <div
      className={`${className} flex flex-col min-h-20 justify-between items-center rounded transition ease-in-out hover:shadow hover:scale-105 overflow-hidden`}
      {...props}
      onClick={onClickFn}
    >
      <div className="w-full">
        {image && <img className="w-full" src={image} />}
      </div>
      {!!label && <div className="text-center p-2">{label}</div>}
    </div>
  );
};

export default SectionCard;
