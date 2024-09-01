import CustomDropdown from "@/components/custom/dropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowDown,
  ArrowDown01,
  ArrowDownIcon,
  CalendarArrowDown,
  ChevronDown,
  Heart,
  MessageCircleQuestion,
  MessageSquare,
  SearchIcon,
  ShoppingBasketIcon,
  User,
  Wallet,
} from "lucide-react";
import React from "react";
import logojpg from "@/assets/logo.jpg";

const Layout = ({
  page = undefined,
  title = undefined,
  user = undefined,
  children,
}) => {
  const accountLabel = (
    <span className="flex items-center">
      <User className="mr-2" />
      Account
      <ChevronDown className="ml-2" />
    </span>
  );

  const accountItems = [
    {
      label: "My Account",
      icon: User,
    },
    {
      label: "Orders",
      icon: Wallet,
    },
    {
      label: "Saved Items",
      icon: Heart,
    },
  ];

  const helpLabel = (
    <span className="flex items-center">
      <MessageCircleQuestion className="mr-2" />
      Help
      <ChevronDown className="ml-2" />
    </span>
  );

  const liveChatbTN = (
    <Button variant={"default"} className="flex w-full">
      <MessageSquare className="mr-2" /> LIVE CHAT
    </Button>
  );

  const helpItems = [
    { label: "Help Center" },
    { label: "Place an order" },
    { label: "Payment options" },
    { label: "Track an order" },
    { label: "Cancel an order" },
    { label: "Returns &amp; Refunds" },
    { isSeparator: true },
    { element: liveChatbTN, isCustom: true },
  ];

  return (
    <div>
      <div className="flex w-full h-6 justify-center items-center text-xs">
        Monarch Site
      </div>
      {/* nav bar */}
      <div className="flex gap-8 justify-between items-center px-8">
        <span className="w-24 rounded-full overflow-hidden">
          <img src={logojpg} className="" />
        </span>
        <span className="flex w-full items-center border border-grey-500 rounded">
          <SearchIcon className="w-8 h-12 mx-2 text-grey-700" />
          <Input className="w-full border-none" placeholder="Search" />
          <Button className="h-12">Search</Button>
        </span>
        <span>
          {user?.isAuthenticated ? (
            <Button className="h-12">Sign In </Button>
          ) : (
            <CustomDropdown
              label={accountLabel}
              className="h-12"
              items={accountItems}
            />
          )}
        </span>
        <span>
          <CustomDropdown
            label={helpLabel}
            className="h-12"
            items={helpItems}
          />
        </span>

        <span>
          <Button className="h-12">
            <ShoppingBasketIcon />
            <span className="bg-gray-300 w-4 h-4 -ml-2 -mt-4 flex justify-center items-center rounded-full border-2 border-white text-xs text-black">
              <span>3</span>
            </span>
            Cart
          </Button>
        </span>
      </div>

      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
