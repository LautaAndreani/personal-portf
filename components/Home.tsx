import type { NextPage } from "next"
import TwoColsLayout from "../Layout/TwoColsLayout"
import Wrapper from "../Layout/Wrapper"
import LeftLayout from "./LeftLayout"
import Profile from "./Profile"
import RightCard from "./RigthCard"

const HomePage: NextPage = () => {
	return (
		<Wrapper>
			<Profile />
			<TwoColsLayout leftCol={<LeftLayout />} rightCol={<RightCard />} />
		</Wrapper>
	)
}

export default HomePage
