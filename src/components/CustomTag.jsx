import { Tag, Avatar, TagLabel } from "@chakra-ui/react";

const CustomTag = ({ technologyName, technologyUrl }) => {
  return (
    <>
      <Tag size="md" p={1} spacing="1">
        <Avatar
          src={technologyUrl}
          bg="transparent"
          boxSize="24px"
          borderRadius="0"
          objectFit={"fill"}
          name={technologyName}
        />
        <TagLabel>{technologyName}</TagLabel>
      </Tag>
    </>
  );
};

export default CustomTag;
