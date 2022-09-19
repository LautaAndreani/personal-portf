import { Heading, Link, Stack, Text } from "@chakra-ui/react"
import NextLink from "next/link"

type Props = { title: string; description: string; link?: string }

const Content = ({ title, description, link }: Props) => {
	if (link) {
		return (
			<Stack p=".8rem 0">
				<Heading size="md" fontWeight={500}>
					{title}
				</Heading>
				<Stack>
					<NextLink href={link} passHref>
						<Link
							w="fit-content"
							isExternal
							color="brand.text_reference"
							dangerouslySetInnerHTML={{ __html: description }}></Link>
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
			<Stack>
				<Text dangerouslySetInnerHTML={{ __html: description }}></Text>
			</Stack>
		</Stack>
	)
}

export default Content
