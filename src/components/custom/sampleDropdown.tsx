// import {
//   Cloud,
//   CreditCard,
//   Github,
//   Keyboard,
//   LifeBuoy,
//   LogOut,
//   Mail,
//   MessageSquare,
//   Plus,
//   PlusCircle,
//   Settings,
//   User,
//   UserPlus,
//   Users,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuPortal,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuSub,
//   DropdownMenuSubContent,
//   DropdownMenuSubTrigger,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// // Define the type for the dropdown item
// interface DropdownItem {
//   label: string;
//   icon?: React.ComponentType<any>;
//   shortcut?: string;
//   subItems?: DropdownItem[];
//   disabled?: boolean;
// }

// // Define the props for the component
// interface DropdownMenuDemoProps {
//   items: DropdownItem[];
// }

// export function DropdownMenuDemo({ items }: DropdownMenuDemoProps) {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline">Open</Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56">
//         {items.map((item, index) => (
//           <DropdownMenuGroup key={index}>
//             <DropdownMenuItemComponent item={item} />
//             {index < items.length - 1 && <DropdownMenuSeparator />}
//           </DropdownMenuGroup>
//         ))}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

// // Helper component to render dropdown item
// function DropdownMenuItemComponent({ item }: { item: DropdownItem }) {
//   if (item.subItems) {
//     return (
//       <DropdownMenuSub>
//         <DropdownMenuSubTrigger>
//           {item.icon && <item.icon className="mr-2 h-4 w-4" />}
//           <span>{item.label}</span>
//         </DropdownMenuSubTrigger>
//         <DropdownMenuPortal>
//           <DropdownMenuSubContent>
//             {item.subItems.map((subItem, index) => (
//               <DropdownMenuItemComponent key={index} item={subItem} />
//             ))}
//           </DropdownMenuSubContent>
//         </DropdownMenuPortal>
//       </DropdownMenuSub>
//     );
//   }

//   return (
//     <DropdownMenuItem disabled={item.disabled}>
//       {item.icon && <item.icon className="mr-2 h-4 w-4" />}
//       <span>{item.label}</span>
//       {item.shortcut && (
//         <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
//       )}
//     </DropdownMenuItem>
//   );
// }
