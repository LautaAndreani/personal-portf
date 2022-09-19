import { Button, Image, Link } from "@chakra-ui/react"
import NextLink from "next/link"
type Props = { link: string; social: string }

const ButtonComp = ({ link, social }: Props) => {
	return (
		<Button size="md" w="fit-content" bg="none" border="1px solid" borderColor="brand.border_color" gap={2} p="10px 20px" _hover={{}}>
			<Image src={`/assets/icons/${social}.svg`} />
			<NextLink href={link} passHref>
				<Link isExternal textDecoration="none" fontWeight={400}>
					{social}
				</Link>
			</NextLink>
		</Button>
	)
}

export default ButtonComp
