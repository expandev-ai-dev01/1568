import { HeroBanner } from './_impl/HeroBanner';
import { AboutSection } from './_impl/AboutSection';
import { FeaturedDishes } from './_impl/FeaturedDishes';
import { CallToAction } from './_impl/CallToAction';

/**
 * @page HomePage
 * @summary Página inicial do restaurante italiano com banner rotativo,
 * seção sobre o restaurante, pratos em destaque e chamadas para ação.
 * @domain home
 * @type page-component
 * @category home-management
 *
 * @routing
 * - Path: /
 * - Params: none
 * - Query: none
 * - Guards: none (public page)
 *
 * @layout
 * - Layout: RootLayout
 * - Sections: HeroBanner, AboutSection, FeaturedDishes, CallToAction
 * - Navigation: Header and Footer from RootLayout
 *
 * @data
 * - Sources: Static content (future: CMS integration)
 * - Loading: Component-level loading states
 * - Caching: none (static content)
 *
 * @userFlows
 * - Primary: View restaurant overview and navigate to other sections
 * - Secondary: Click on featured dishes or call-to-action buttons
 */
export const HomePage = () => {
  return (
    <div className="home-page">
      <HeroBanner />
      <AboutSection />
      <FeaturedDishes />
      <CallToAction />
    </div>
  );
};

export default HomePage;
