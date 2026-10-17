import Footer from "./Footer";
import Header from "./Header";
import Form from "./Form.tsx";
import CardGroup from "./card/CardGroup.tsx";
import BeamRayLight from "../assets/svgs/BeamRayLight.svg";
import BeamRayDark from "../assets/svgs/BeamRayDark.svg";
import Heading from "./Heading.tsx";

function Container() {
  return (
    <>
      <div className="bg-gb-bg/45 text-gb-fg selection:bg-gb-fg selection:text-gb-green relative flex min-h-screen w-screen flex-col overflow-hidden transition-all">
        <Header />
        <div className="absolute -z-1 hidden h-full opacity-60 blur-2xl md:-left-10 md:block lg:left-65 dark:opacity-25 dark:blur-3xl">
          <div className="hidden dark:block">
            <img src={BeamRayLight} alt="Light Beam Ray at Dark Mode" />
          </div>
          <div className="block dark:hidden">
            <img src={BeamRayDark} alt="Dark Beam Ray at Light Mode" />
          </div>
        </div>
        <div className="m-4 grow p-4">
          <main className="mx-auto mt-36 flex max-w-7xl flex-col items-center justify-between">
            <div className="relative mt-5 flex h-24 max-w-4xl items-center justify-center lg:mt-2">
              <Heading />
            </div>
            <Form />
            <CardGroup />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Container;
