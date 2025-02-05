
import Layout from "@/components/layout/Layout"
import BestProperties3 from "@/components/sections/BestProperties3"
import EstateAgent from "@/components/sections/EstateAgent"
import FeaturedProperties3 from "@/components/sections/FeaturedProperties3"
import FlatCities6 from "@/components/sections/FlatCities6"
import FlatHomes3 from "@/components/sections/FlatHomes3"
import FlatNews6 from "@/components/sections/FlatNews6"
import FlatPartner2 from "@/components/sections/FlatPartner2"
import FlatTestimonial9 from "@/components/sections/FlatTestimonial9"
import Parallax3 from "@/components/sections/Parallax3"
import Slider10 from "@/components/sections/Slider10"
import WorkWithUs5 from "@/components/sections/WorkWithUs5"

export default function Home10() {

	return (
		<>

			<Layout  headerStyle={10} footerStyle={6} mainContentCls="default">
				<Slider10 />
				<FlatCities6 />
				<FeaturedProperties3 />
				<WorkWithUs5 />
				<Parallax3 />
				<FlatHomes3 />
				<FlatTestimonial9 />
				<FlatPartner2 />
				<BestProperties3 />
				<EstateAgent />
				<FlatNews6 />
			</Layout>
		</>
	)
}