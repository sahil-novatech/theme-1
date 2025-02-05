
import Layout from "@/components/layout/Layout"
import FlatCities3 from "@/components/sections/FlatCities3"
import FlatCounter1 from "@/components/sections/FlatCounter1"
import FlatDiscover1 from "@/components/sections/FlatDiscover1"
import FlatExplore from "@/components/sections/FlatExplore"
import LuxuryHome2 from "@/components/sections/LuxuryHome2"
import Parallax1 from "@/components/sections/Parallax1"
import PerfectHome2 from "@/components/sections/PerfectHome2"
import RecentProperties1 from "@/components/sections/RecentProperties1"
import RecentProperties4 from "@/components/sections/RecentProperties4"
import Slider3 from "@/components/sections/Slider3"

export default function Home3() {

	return (
		<>

			<Layout  headerStyle={3} footerStyle={2} mainContentCls="default">
				<Slider3 />
				<FlatExplore />
				<FlatCounter1 />
				<FlatDiscover1 />
				<FlatCities3 />
				<RecentProperties1 />
				<RecentProperties4 />
				<PerfectHome2 />
				<Parallax1 />
				<LuxuryHome2 />
			</Layout>
		</>
	)
}