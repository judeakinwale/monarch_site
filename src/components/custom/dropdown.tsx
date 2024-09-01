import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";

interface IDropdownProps {
  trigger?: React.ComponentType<any>;
  className?: string;
  label?: string | React.ComponentType<any>;
  items?: IDropdownItem[] | IDropdownItem[][];
}

interface IDropdownItem {
  label?: string;
  icon?: React.ComponentType<any>;
  shortcut?: string;
  element?: React.ComponentType<any>;
  url?: string;
  subItems?: IDropdownItem[];
  isLabel?: boolean;
  isSeparator?: boolean;
  isCustom?: boolean;
  disabled?: boolean;
}

const CustomDropdown = ({
  trigger,
  className,
  label = "open",
  items = [],
}: IDropdownProps) => {
  trigger ||= (
    <Button className={className} variant="outline">
      {label}
    </Button>
  );

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          {items.map((item, index) => {
            if (item?.isCustom) return item?.element;
            if (item?.isSeparator) return <DropdownMenuSeparator />;
            if (item?.isLabel) {
              return (
                <>
                  <DropdownMenuLabel>{item?.label}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                </>
              );
            }

            if (Array.isArray(item)) {
              return (
                <DropdownMenuGroup key={index}>
                  {/* <DropdownMenuSeparator /> */}
                  {item?.map((groupItem, groupIndex) => {
                    console.log({ groupIndex, len: item?.length - 2 });
                    return (
                      <>
                        <DropdownMenuItemComponent item={groupItem} />
                        {groupIndex >= item.length - 1 && (
                          <DropdownMenuSeparator />
                        )}
                      </>
                    );
                  })}
                </DropdownMenuGroup>
              );
            }

            return <DropdownMenuItemComponent item={item} />;
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

// Helper component to render dropdown item
const DropdownMenuItemComponent = ({ item }: { item: IDropdownItem }) => {
  const navigate = useNavigate();
  const onClickFn = () => {
    if (item?.url) navigate(item?.url);
  };
  if (item.subItems) {
    return (
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          {item.icon && <item.icon className="mr-2 h-4 w-4" />}
          <span>{item.label}</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            {item.subItems.map((subItem, index) => (
              <DropdownMenuItemComponent key={index} item={subItem} />
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    );
  }

  return (
    <DropdownMenuItem disabled={item.disabled} onClick={onClickFn}>
      {item.icon && <item.icon className="mr-2 h-4 w-4" />}
      <span>{item.label}</span>
      {item.shortcut && (
        <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
      )}
    </DropdownMenuItem>
  );
};

export default CustomDropdown;
