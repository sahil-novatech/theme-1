
import Layout from "@/components/layout/Layout"
import BestProperties2 from "@/components/sections/BestProperties2"
import FlatCities2 from "@/components/sections/FlatCities2"
import FlatExperts1 from "@/components/sections/FlatExperts1"
import FlatTestimonial2 from "@/components/sections/FlatTestimonial2"
import PerfectHome1 from "@/components/sections/PerfectHome1"
import Slider2 from "@/components/sections/Slider2"
import WorkWithUs1 from "@/components/sections/WorkWithUs1"

export default function Home2() {

	return (
		<>

			<Layout  headerStyle={2} footerStyle={1} mainContentCls="default" footerCls="style-full style-fourth">
				<Slider2 />
				<WorkWithUs1 />
				<FlatCities2 />
				<PerfectHome1 />
				<FlatTestimonial2 />
				<BestProperties2 />
				<FlatExperts1 />
			</Layout>
		</>
	)
}