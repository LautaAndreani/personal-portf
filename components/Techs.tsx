import { Badge, HStack } from "@chakra-ui/react";
import content from "../utils/content.json";
import { Title } from "./index";

const Techs = () => {
  return (
    <>
      <Title title="Tecnologías destacadas" />
      <HStack letterSpacing={1} flexWrap="wrap">
        {content.mostUsedTechs.map((tech, i) => (
          <Badge
            key={i}
            fontWeight={500}
            p="8px 10px"
            borderRadius="md"
            variant="subtle"
            color={`brand.color_${tech.toLowerCase()}`}
            bg={`brand.bg_${tech.toLowerCase()}`}
            m={{ sm: ".5rem .2rem !important" }}
            sx={{
              "@media screen and (max-width:1200px)": {
                margin: ".5rem .2rem !important",
              },
            }}
          >
            {tech}
          </Badge>
        ))}
      </HStack>
    </>
  );
};

export default Techs;
