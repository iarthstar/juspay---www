import { StatsOne, CTAOne, Footer, Header, Hero, HeroFive, HeroFour, HeroOne, HeroThree, HeroTwo, TestimonialsOne } from "@/lib/ui";

const Home = () => {
  return (
    <>
    {/* HEADER */}
    <Header />

    {/* MAIN */}
    <main className="flex flex-col">
      {/* HERO SECTION */}
      <HeroFive />



      
      {/* SECTION 2 */}
      <StatsOne />

      {/* SECTION 3 */}
      <TestimonialsOne />

      {/* SECTION 4 */}

      {/* SECTION 5 */}

    </main>

    {/* FOOTER */}
    <CTAOne />
    <Footer />
    </>
  )
}


export default Home;