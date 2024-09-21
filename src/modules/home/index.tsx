import React from "react";
import Layout from "@/layout";
import CustomDropdown from "@/components/custom/dropdown";
import { useNavigate } from "react-router-dom";

// // image imports
// import img1 from "@/assets/shoes/01.jpg";
// import img2 from "@/assets/shoes/02.jpg";
// import img3 from "@/assets/shoes/03.jpg";
// import img4 from "@/assets/shoes/04.jpg";
// import img5 from "@/assets/shoes/05.jpg";
// import img6 from "@/assets/shoes/06.jpg";
// import img7 from "@/assets/shoes/07.jpg";
// import img8 from "@/assets/shoes/08.jpg";
// import img9 from "@/assets/shoes/09.jpg";
import { ChevronRight, Ticket } from "lucide-react";
import { ProductCard, SectionCard } from "@/components/custom";

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

const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex flex-col gap-4 p-4">
        <div className="grid grid-cols-6 gap-4 p-4">
          <div className="min-h-24 border rounded shadow "></div>
          <div className="min-h-24 w-full border rounded shadow col-span-4">
            <img className="w-full" src={img9} alt="featured" />
          </div>
          <div className="min-h-24 border rounded shadow "></div>
        </div>
        <div className="grid grid-cols-6 gap-4 p-4">
          <SectionCard image={img1} label="Clearance Sale" />
          <SectionCard image={img2} label="Clearance Sale" />
          <SectionCard image={img3} label="Clearance Sale" />
          <SectionCard image={img4} label="Clearance Sale" />
          <SectionCard image={img5} label="Clearance Sale" />
          <SectionCard image={img6} label="Clearance Sale" />
        </div>
        <div className="grid grid-cols-3 gap-4 p-4 shadow">
          <div className="col-span-3 text-xl">Sponsored Products</div>
          <SectionCard image={img7} />
          <SectionCard image={img8} />
          <SectionCard image={img9} />
        </div>
        <div className="grid grid-cols-6 gap-4 p-4">
          <div className="col-span-6 flex justify-between items-center bg-red-500 text-white px-4 py-2 rounded text-xl">
            <span className="flex items-center">
              <Ticket className="pt-0.5 mr-2" /> Flash Sale
            </span>
            <span>Time Left: 10h:12m:10s</span>
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
      </div>
    </Layout>
  );
};

export default Home;
