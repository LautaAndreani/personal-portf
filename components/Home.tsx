import type { NextPage } from "next"
import TwoColsLayout from "../Layout/TwoColsLayout"
import { Wrapper } from "../Layout/index"
import { Profile, RightCard, LeftLayout } from "./index"
import { Projects } from "../types/types"

const HomePage: NextPage<Projects> = ({projects}) => {
	return (
		<Wrapper>
			<Profile />
			<TwoColsLayout leftCol={<LeftLayout projects={projects}/>} rightCol={<RightCard />} />
		</Wrapper>
	)
}

export default HomePage
