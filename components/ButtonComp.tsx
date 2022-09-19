import { Button, Image, Link } from "@chakra-ui/react"
import NextLink from "next/link"
type Props = { link: string; social: string }

const ButtonComp = ({ link, social }: Props) => {
	return (
		<Link isExternal href={link} fontWeight={400} textDecoration="none !important">
			<Button size="md" w="fit-content" bg="none" border="1px solid" borderColor="brand.border_color" gap={2} p="10px 20px" _hover={{}}>
				<Image src={`/assets/icons/${social}.svg`} />
				{social}
			</Button>
		</Link>
	)
}

export default ButtonComp
