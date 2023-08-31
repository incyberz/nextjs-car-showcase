import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  // console.log(allCars);
  let carNo: number = 0;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div id="discover" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-bold">Car Catalogue</h1>
          <p>Explore the best car for You!</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {isDataEmpty ? (
          <div className="home__error-container">
            <h2 className="text-black text-xl">Oopss, no results.</h2>
            <p>{allCars?.message}</p>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => {
                carNo++;
                return <CarCard key={carNo} car={car} />;
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
