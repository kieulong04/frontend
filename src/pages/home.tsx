import { Banner, Blog, ProductList, Service, Show } from "@/components";

const HomePage = () => {
  return (
    <>

      <Banner />
      <ProductList featured={true} />
      <div className="container"> 
        <hr />
      </div>
      <Show />
      <Blog />
      <Service />

    </>
  );
};

export default HomePage;
