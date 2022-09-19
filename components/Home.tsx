import type { NextPage } from "next"
import TwoColsLayout from "../Layout/TwoColsLayout"
import { Wrapper } from '../Layout/index'
import { Profile, RightCard, LeftLayout } from './index'

const HomePage: NextPage = () => {
	return (
		<Wrapper>
			<Profile />
			<TwoColsLayout leftCol={<LeftLayout />} rightCol={<RightCard />} />
		</Wrapper>
	)
}

export default HomePage
