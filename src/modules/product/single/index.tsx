import Layout from "@/layout";
import React from "react";
import { useNavigate } from "react-router-dom";
import ReviewStars from "../ReviewStars";
import { ChevronRight, LocateIcon } from "lucide-react";
import { ProductCard } from "@/components/custom";

const Single = () => {
  const navigate = useNavigate();

  // image urls
  const img1 =
    "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=400";
  const img2 =
    "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400";
  const img3 =
    "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=400";
  const img4 =
    "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=400";
  const img5 =
    "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400";
  const img6 =
    "https://images.pexels.com/photos/40662/shoes-footwear-hiking-shoes-walking-40662.jpeg?auto=compress&cs=tinysrgb&w=400";
  const img7 =
    "https://images.pexels.com/photos/292998/pexels-photo-292998.jpeg?auto=compress&cs=tinysrgb&w=400";
  const img8 =
    "https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=400";
  const img9 =
    "https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&w=400";
  const img10 =
    "https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?auto=compress&cs=tinysrgb&w=400";

  return (
    <Layout>
      <div className="grid grid-cols-12 my-8 px-16">
        <div className="col-span-9">
          <div className="grid grid-cols-5">
            <div className="col-span-2 px-4 min-h-[200px]">
              <img src={img1} alt="" />
            </div>
            <div className="col-span-3 p-4">
              <div className="flex gap-4 items-end">
                <div className="text-4xl font-bold">NGN5,949.75</div>
                <div className="text-2xl">
                  <del>NGN12,658.61</del>
                </div>
                <div className=" text-2xl text-red-500">53% off</div>
              </div>
              <div className="text-xs text-slate-400">
                Price shown before tax
              </div>
              <div className="my-4 font-bold">
                Portable Electric Intelligent Mini Neck Massager Patch for Back
                and Shoulder Massager With Pad and Remote
              </div>
              <div className="flex gap-4 my-4">
                <ReviewStars />
                <span className="font-semibold">4.4</span>
                <span>4045 Reviews</span>
                <span>10,000+ sold</span>
              </div>
              <hr />
              <div className="my-4">
                <div className="font-semibold">
                  Variant: <span className="px-2 text-sm">With Remote</span>
                </div>
                <div className="flex gap-4 h-[80px] my-2">
                  <img
                    src={img2}
                    alt=""
                    className="w-[80px] object-contain p-1 border-2 rounded"
                  />
                  <img
                    src={img2}
                    alt=""
                    className="w-[80px] object-contain p-1 border-2 rounded"
                  />
                  <img
                    src={img2}
                    alt=""
                    className="w-[80px] object-contain p-1 border-2 rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr />

          {/* related products */}
          <div className="grid grid-cols-6 gap-4 p-4">
            <div className="col-span-6 flex justify-between items-center px-4 py-2 rounded text-xl">
              <span className="flex items-center">Related Items</span>
              <span
                className="flex items-center cursor-pointer"
                onClick={() => navigate("")}
              >
                See More <ChevronRight className="pt-0.5 ml-2" />
              </span>
            </div>

            <ProductCard
              image={img1}
              label="Shoe 1"
              price="12,000"
              salePrice="10,000"
              countLeft="121"
            />
            <ProductCard
              image={img2}
              label="Shoe 2"
              price="12,000"
              salePrice="10,000"
              countLeft="122"
            />
            <ProductCard
              image={img3}
              label="Shoe 3"
              price="12,000"
              salePrice="10,000"
              countLeft="123"
            />
            <ProductCard
              image={img4}
              label="Shoe 4"
              price="12,000"
              salePrice="10,000"
              countLeft="124"
            />
            <ProductCard
              image={img5}
              label="Shoe 5"
              price="12,000"
              salePrice="10,000"
              countLeft="125"
            />
            <ProductCard
              image={img6}
              label="Shoe 6"
              price="12,000"
              salePrice="10,000"
              countLeft="126"
            />
          </div>
          {/* related products */}

          <hr />

          {/* product details section */}
          <div className="my-8">
            <div className="flex">
              <span>
                <LocateIcon className="pr-2" />
                Customer Reviews (3122)
              </span>
              <span>
                {/* <LocateIcon className="pr-2" /> */}
                Specifications
              </span>
              <span>
                {/* <LocateIcon className="pr-2" /> */}
                Description
              </span>
              <span>
                {/* <LocateIcon className="pr-2" /> */}
                Store
              </span>
              <span>
                {/* <LocateIcon className="pr-2" /> */}
                You may also like
              </span>
            </div>
          </div>
          {/* product reviews */}
        </div>
      </div>
    </Layout>
  );
};

export default Single;
