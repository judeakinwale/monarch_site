import React from "react";
import { useNavigate } from "react-router-dom";

interface IProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  image?: string;
  label?: string;
  url?: string;
  price?: string;
  salePrice?: string;
  countLeft?: string;
  countTotal?: string;
}
const ProductCard = ({
  className,
  image,
  label,
  url,
  price,
  salePrice,
  countLeft,
  countTotal,
  ...props
}: IProductCardProps) => {
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
      <div className="">{image && <img src={image} />}</div>
      {!!label && <div className="text-center pt-2">{label}</div>}
      <div className="p-2">
        {
          // todo: validate text rendering
        }
        {!!price && !!salePrice && (
          <>
            <div className="text-lg">₦ {salePrice}</div>
            <div className="text-sm text-gray-500">
              <del>₦ {price}</del>
            </div>
          </>
        )}
        {!!price && !salePrice && <div className="">₦ {price}</div>}
        {countLeft && (
          <div className="text-sm">
            <small className="">{countLeft} Items left</small>
            {
              // todo: implement progress with countLeft and countTotal
              // <div className=""></div>
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
