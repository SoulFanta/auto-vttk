
import Banner from './../widgets/banner/banner';
import AdvantagesSection from './../widgets/advantage/advantage';
import FeedbackSection from './../widgets/feedback/feedback';
import FAQSection from '@/widgets/questions/questions';
import GallerySection from './../widgets/gallery/gallery';
import ContactsSection from '@/widgets/contacts/ContactSection';
import Footer from './../widgets/footer/footer';
import { Header } from '@/widgets/header/ui/header';
import { AboutSection } from '@/widgets/about/ui/aboutSection';
import { CitiesSection } from '@/widgets/departure/ui/departure';
import Calculator from '@/features/calculator';
export default function Home() {
  
  return (
   <main>
    {/* banner */}
    <Header/>
    <Banner/>
    <div className="wrapper max-w-[1200] ml-auto mr-auto ">
      {/* calc */}
      <Calculator/>
      <CitiesSection/>
      <AboutSection/>
      <AdvantagesSection/>
      <FeedbackSection/>
      <FAQSection/>
      <GallerySection/>
      <ContactsSection/>
    </div>
      <Footer/>
   </main>
  );
}
