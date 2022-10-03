import { Flex, Stack } from "@chakra-ui/react"

type Props = { leftCol: JSX.Element; rightCol: JSX.Element }

const TwoColsLayout = ({ leftCol, rightCol }: Props) => {
	return (
		<Flex justifyContent="space-between" alignItems="flex-start" pt="3rem">
			<Stack width={{ sm: "100%", xl: "50%" }}>{leftCol}</Stack>
			<Stack
				width="50%"
				sx={{
					"@media screen and (max-width:1200px)": {
						display: "none",
					},
				}}>
				{rightCol}
			</Stack>
		</Flex>
	)
}

export default TwoColsLayout
