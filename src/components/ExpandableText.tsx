import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

export const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};
