import { Tag, TagLabel, Image } from "@chakra-ui/react";

const CustomTag = ({ technologyName, technologyUrl }) => {
  return (
    <>
      <Tag
        margin="0 !important"
        variant={!technologyUrl && "subtle"}
        colorScheme={!technologyUrl && "orange"}
        size="lg"
        p={1}
        spacing="1"
      >
        {technologyUrl && (
          <Image
            src={technologyUrl}
            bg="transparent"
            boxSize="24px"
            borderRadius="0"
            objectFit={"contain"}
            alt={technologyName}
          />
        )}
        <TagLabel>{technologyName}</TagLabel>
      </Tag>
    </>
  );
};

export default CustomTag;
