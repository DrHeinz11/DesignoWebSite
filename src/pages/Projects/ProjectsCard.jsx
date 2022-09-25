import { Link, Heading, Image, Stack, Text, Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import CustomTag from "../../components/CustomTag";
import React from "react";

const ProjectsCard = ({
  title,
  route,
  technology,
  urlThumbnail,
  description,
}) => {
  return (
    <Stack
      borderRadius="xl"
      border="1px solid black"
      gap={2}
      p={4}
      textAlign="center"
      textTransform="capitalize"
    >
      <Heading>{title}</Heading>
      <Image src={urlThumbnail} alt={title} />
      <Text>{description}</Text>
      <Stack direction="column" gap={2} alignItems="flex-start">
        {technology && (
          <>
            <Text fontSize="xs">Technology</Text>
            <Stack spacing={2} direction="row" wrap={"wrap"}>
              {technology.map((element) => (
                <CustomTag
                  key={element.key}
                  technologyName={element.technologyName}
                  technologyUrl={element.technologyUrl}
                />
              ))}
            </Stack>{" "}
          </>
        )}

        <Stack w="full" direction="row" justify="center">
          <Link href={route} target="_blank" rel="noopener">
            <Button variant="solid" size="md">
              Web demo <ExternalLinkIcon ml={1} />
            </Button>
          </Link>

          <Link href={route} target="_blank" rel="noopener">
            <Button variant="outline" size="md">
              Repository <ExternalLinkIcon ml={1} />
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectsCard;
