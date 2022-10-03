import { Box } from "@chakra-ui/react"

type Props = { children: JSX.Element | JSX.Element[] }

const Wrapper = ({ children }: Props) => {
	return (
		<Box minH="100vh" width={{ sm: "80%", xl: "60%" }} p="0 1rem" m="0 auto">
			{children}
		</Box>
	)
}

export default Wrapper
