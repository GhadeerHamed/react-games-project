import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/all";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string;
}

export const SortSelector = ({
  onSelectSortOrder,
  selectedSortOrder,
}: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release Date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const sortName = sortOrders.find(
    (order) => order.value === selectedSortOrder,
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {sortName?.label}
      </MenuButton>
      <MenuList>
        {sortOrders.map((item) => (
          <MenuItem
            onClick={() => onSelectSortOrder(item.value)}
            key={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
