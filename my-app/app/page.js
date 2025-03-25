
import HomeSearch from "@/components/Home-Search";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (


    <div className="pt-20 flex flex-col">
      {/*Hero section */}
      <section className="relative py-16 md:py-28 dotted-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-8xl mb-4 gradient-title">Find Your Dream Car with Vechial AI </h1>
            <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
              {" "}
              Advanced AI Car Search and test drive from thousands of vechiles.
            </p>
          </div>
          {/*search*/}
          <HomeSearch />
        </div>
      </section>
    </div>




  );
}
