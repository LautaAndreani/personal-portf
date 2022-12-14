import { extendTheme } from "@chakra-ui/react"
//fonts
import "@vetixy/circular-std"
import "@fontsource/space-mono"

const theme = extendTheme({
	fonts: {
		body: `'CircularStd', sans-serif`,
		heading: `"Space Mono", spacemono`,
	},
	styles: {
		global: () => ({
			body: {
				bg: "brand.background",
				color: "brand.text",
			},
		}),
	},
	colors: {
		brand: {
			// global
			background: "black",
			text_reference: "#00D8FF",
			text: "#FFFFFF",
			actual_company: "#E5F876",
			border_color: "#333333",
			border: "1px solid",
			card_bg: "rgba(41, 41, 41, 0.25)",
			footer: "#C2C2C2",
			// Badge colors
			color_reactjs: "#6FB7FF",
			color_typescript: "#56CCF2",
			color_nextjs: "#E0E0E0",
			color_nodejs: "#8CFF64",
			color_javascript: "#FFEF64",
			bg_reactjs: "rgba(111, 183, 255, 0.23)",
			bg_typescript: "rgba(0, 216, 255, 0.12)",
			bg_nextjs: "rgba(235, 248, 255, 0.13)",
			bg_nodejs: "rgba(187, 255, 100, 0.13)",
			bg_javascript: "rgba(251, 215, 123, 0.24)",
		},
	},
})

export default theme
