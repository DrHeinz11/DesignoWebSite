import { Link, Heading, Image, Stack, Text, Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import React from "react";
import TecnologyArticle from "./TecnologyArticle";

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
      boxShadow="md"
      gap={2}
      bg="#fbfbfb"
      p={4}
      textAlign="center"
      textTransform="capitalize"
    >
      <Heading>{title}</Heading>
      <Image src={urlThumbnail} alt={title} />
      <Text>{description}</Text>
      <Stack direction="column" gap={2} alignItems="flex-start">
        {technology && <TecnologyArticle technology={technology} />}

        <Stack w="full" direction="row" justify="center">
          <Link href={route} target="_blank" rel="noopener">
            <Button colorScheme="orange" variant="solid" size="md">
              Web demo <ExternalLinkIcon ml={1} />
            </Button>
          </Link>

          <Link href={route} target="_blank" rel="noopener">
            <Button colorScheme="orange" variant="outline" size="md">
              Repository <ExternalLinkIcon ml={1} />
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectsCard;
