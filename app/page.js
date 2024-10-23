import FrontComp from "@/components/Sections/FrontComp";
import ServicesComp from "@/components/Sections/ServicesComp";
import CustomPlanComp from "@/components/Sections/CustomPlanComp";
import Testimonials from "@/components/Sections/Testimonials";
import Pricing from "@/components/Sections/PricingComp";

export default function Home() {
  return (
    <>
      <FrontComp />
      <ServicesComp />
      <Testimonials />
      <Pricing />
      <CustomPlanComp />
    </>
  );
}
