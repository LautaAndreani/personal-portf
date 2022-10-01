import { Box, keyframes } from "@chakra-ui/react"

const pulse = keyframes`
0% {
    box-shadow: #E5F876 0 0 0 0
}
75% {
    box-shadow: #E5F876 0 0 0 3px
}
`
const animation = `${pulse} 2s linear infinite `

const DotAnimation = () => <Box as="span" width="7px" height="7px" borderRadius="100%" bg="brand.actual_company" animation={animation}></Box>

export default DotAnimation
