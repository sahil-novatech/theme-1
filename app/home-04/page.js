
import Layout from "@/components/layout/Layout"
import FeaturedCategories1 from "@/components/sections/FeaturedCategories1"
import FlatArea from "@/components/sections/FlatArea"
import FlatBrand1 from "@/components/sections/FlatBrand1"
import FlatNews2 from "@/components/sections/FlatNews2"
import FlatPartner1 from "@/components/sections/FlatPartner1"
import FlatTestimonial3 from "@/components/sections/FlatTestimonial3"
import GroupIcon from "@/components/sections/GroupIcon"
import PerfectHome3 from "@/components/sections/PerfectHome3"
import RecentProperties2 from "@/components/sections/RecentProperties2"
import Slider4 from "@/components/sections/Slider4"
import WorkWithUs2 from "@/components/sections/WorkWithUs2"

export default function Home4() {

	return (
		<>

			<Layout  headerStyle={4} footerStyle={2} mainContentCls="default" footerCls="bg-fourth">
				<Slider4 />
				<FlatBrand1 />
				<WorkWithUs2 />
				<FeaturedCategories1 />
				<RecentProperties2 />
				<PerfectHome3 />
				<FlatTestimonial3 />
				<FlatPartner1 />
				<FlatArea />
				<FlatNews2 />
				<GroupIcon />
			</Layout>
		</>
	)
}