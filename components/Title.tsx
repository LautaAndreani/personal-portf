import { Heading } from "@chakra-ui/react"

type Props = { title: string }

const Title = ({ title }: Props) => {
	return (
		<Heading fontWeight={500} fontSize="24px" p="20px 0">
			{title}
		</Heading>
	)
}

export default Title
