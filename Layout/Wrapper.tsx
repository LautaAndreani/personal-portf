import { Box } from "@chakra-ui/react"

type Props = { children: JSX.Element | JSX.Element[] }

const Wrapper = ({ children }: Props) => {
	return (
		<Box minH="100vh" width="60%" m="0 auto">
			{children}
		</Box>
	)
}

export default Wrapper
