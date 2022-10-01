import { Button, Image, Img, Link } from "@chakra-ui/react"
type Props = { link: string; social: string; alt: string }

const ButtonComp = ({ link, social, alt }: Props) => {
	return (
		<Link isExternal href={link} fontWeight={400} textDecoration="none !important">
			<Button size="md" w="fit-content" bg="none" border="1px solid" borderColor="brand.border_color" gap={2} p="10px 20px" _hover={{}}>
				<Image src={`/assets/icons/${social.toLocaleLowerCase()}.svg`} alt={alt} boxSize="20px" />
				{social}
			</Button>
		</Link>
	)
}

export default ButtonComp
