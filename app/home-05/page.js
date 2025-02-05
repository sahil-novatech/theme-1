
import Layout from "@/components/layout/Layout"
import AccountBar2 from "@/components/sections/AccountBar2"
import ChooseUs2 from "@/components/sections/ChooseUs2"
import FeaturedCategories2 from "@/components/sections/FeaturedCategories2"
import FeaturedProperties1 from "@/components/sections/FeaturedProperties1"
import FlatNews3 from "@/components/sections/FlatNews3"
import FlatTestimonial4 from "@/components/sections/FlatTestimonial4"
import LuxuryHome3 from "@/components/sections/LuxuryHome3"
import PerfectHome4 from "@/components/sections/PerfectHome4"
import PropertiesCities from "@/components/sections/PropertiesCities"
import Slider5 from "@/components/sections/Slider5"

export default function Home5() {

	return (
		<>

			<Layout  headerStyle={5} footerStyle={1} mainContentCls="default px-110" footerCls="bg-white">
				<Slider5 />
				<PropertiesCities />
				<FeaturedProperties1 />
				<ChooseUs2 />
				<PerfectHome4 />
				<FeaturedCategories2 />
				<LuxuryHome3 />
				<FlatTestimonial4 />
				<FlatNews3 />
				<AccountBar2 />
			</Layout>
		</>
	)
}