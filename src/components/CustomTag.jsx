import { Tag, TagLabel, Image } from "@chakra-ui/react";

const CustomTag = ({ technologyName, technologyUrl }) => {
  return (
    <>
      <Tag margin="0 !important" size="md" p={1} spacing="1">
        <Image
          src={technologyUrl}
          bg="transparent"
          boxSize="24px"
          borderRadius="0"
          objectFit={"contain"}
          alt={technologyName}
        />
        <TagLabel>{technologyName}</TagLabel>
      </Tag>
    </>
  );
};

export default CustomTag;
