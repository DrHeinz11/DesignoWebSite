import { Link, Heading, Image, Stack, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
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
  const [detailsToggle, setDetailsToggle] = useState(false);
  const handleDetails = () => setDetailsToggle((prev) => !prev);
  return (
    <Stack
      borderRadius="xl"
      boxShadow="md"
      gap={1}
      bg="#fbfbfb"
      p={4}
      textAlign="center"
      textTransform="capitalize"
    >
      <Heading fontSize="2xl">{title}</Heading>
      <Image src={urlThumbnail} alt={title} />

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
      <Button variant="ghost" colorScheme="orange" onClick={handleDetails}>
        + Details
      </Button>
      <Stack direction="column" gap={2} alignItems="flex-start">
        {detailsToggle && technology && (
          <>
            <TecnologyArticle technology={technology} />
            <Text textTransform="none" textAlign="start">
              {description}
            </Text>
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default ProjectsCard;
