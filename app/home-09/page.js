
import Layout from "@/components/layout/Layout"
import AccountBar5 from "@/components/sections/AccountBar5"
import ExclusiveProperties from "@/components/sections/ExclusiveProperties"
import FeaturedCategories5 from "@/components/sections/FeaturedCategories5"
import FeaturedProperties2 from "@/components/sections/FeaturedProperties2"
import FlatCounter3 from "@/components/sections/FlatCounter3"
import FlatNews5 from "@/components/sections/FlatNews5"
import FlatTestimonial8 from "@/components/sections/FlatTestimonial8"
import LuxuryHome7 from "@/components/sections/LuxuryHome7"
import PopularReal from "@/components/sections/PopularReal"
import Slider9 from "@/components/sections/Slider9"
import WorkWithUs4 from "@/components/sections/WorkWithUs4"

export default function Home9() {

	return (
		<>

			<Layout  headerStyle={8} footerStyle={5} mainContentCls="default px-20">
				<Slider9 />
				<div className="space-20" />
				<FeaturedCategories5 />
				<WorkWithUs4 />
				<FlatCounter3 />
				<FeaturedProperties2 />
				<LuxuryHome7 />
				<FlatTestimonial8 />
				<ExclusiveProperties />
				<PopularReal />
				<FlatNews5 />
				<AccountBar5 />
			</Layout>
		</>
	)
}