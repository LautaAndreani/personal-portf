import { Button, Img, Link } from "@chakra-ui/react"
type Props = { link: string; social: string }

const ButtonComp = ({ link, social }: Props) => {
	console.log("🚀 ~ file: ButtonComp.tsx ~ line 5 ~ ButtonComp ~ social", social)
	return (
		<Link isExternal href={link} fontWeight={400} textDecoration="none !important">
			<Button size="md" w="fit-content" bg="none" border="1px solid" borderColor="brand.border_color" gap={2} p="10px 20px" _hover={{}}>
				<Img src={`/assets/icons/${social.toLocaleLowerCase()}.svg`} />
				{social}
			</Button>
		</Link>
	)
}

export default ButtonComp
