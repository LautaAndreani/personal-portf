import { Flex, Heading, Link, Stack, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import { Content } from "../types/types"
import DotAnimation from "./DotAnimation"

type ContentProps = { info: Content }

const Content = ({ info: { title, description, link, content_key } }: ContentProps) => {
	if (link) {
		return (
			<Stack p=".8rem 0">
				<Heading size="md" fontWeight={500}>
					{title}
				</Heading>
				<Stack>
					<NextLink href={link} passHref>
						<Link w="fit-content" isExternal color="brand.text_reference" dangerouslySetInnerHTML={{ __html: description }}></Link>
					</NextLink>
				</Stack>
			</Stack>
		)
	}

	return (
		<Stack p=".8rem 0">
			<Heading size="md" fontWeight={500}>
				{title}
			</Heading>
			<Flex alignItems="center" gap="2">
				{content_key === "actual_job" && <DotAnimation />}
				<Text dangerouslySetInnerHTML={{ __html: description }}></Text>
			</Flex>
		</Stack>
	)
}

export default Content
