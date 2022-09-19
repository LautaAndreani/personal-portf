import { Box, HStack, Stack, Text } from "@chakra-ui/react"
import content from "../utils/content.json"
import ButtonComp from "./ButtonComp"
import Experience from "./Experience"
import Personal from "./Personal"
import Project from "./Project"
import Techs from "./Techs"
import Title from "./Title"

const LeftLayout = () => {
	return (
		<Box width="90%">
			<Personal />
			<Stack mt="2rem">
				<Text className="about-me" dangerouslySetInnerHTML={{ __html: content.aboutMe }}></Text>
				<Project />
				<Techs />
				<Title title="Experiencia" />
				<HStack>
					{content.experience.map((job, i) => (
						<Experience company={job.company} position={job.position} date={job.description} key={i} />
					))}
				</HStack>
				<Title title="Mis redes" />
				<HStack p="1rem 0">
					{content.socials.map(social => <ButtonComp link={social.link} social={social.social}/> )}
				</HStack>
			</Stack>
		</Box>
	)
}

export default LeftLayout
