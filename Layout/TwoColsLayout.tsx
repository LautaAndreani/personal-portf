import { HStack, Stack } from "@chakra-ui/react"

type Props = { leftCol: JSX.Element; rightCol: JSX.Element }

const TwoColsLayout = ({ leftCol, rightCol }: Props) => {
	return (
		<HStack justifyContent="space-between" alignItems="flex-start" pt="3rem">
			<Stack width="50%">{leftCol}</Stack>
			<Stack width="50%">{rightCol}</Stack>
		</HStack>
	)
}

export default TwoColsLayout
