import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Form from "./components/Form.tsx";
import Card from "./components/card/Card.tsx";
import startpageData from "./data.ts";

function getCardmaker() {
  if (!startpageData) return null;
  const cards = startpageData.map((x) => {
    return (
      <Card
        key={x.id}
        info={{
          title: x.title,
          icon: x.icon,
          socialsInfo: x.links || [],
        }}
      />
    );
  });
  return cards;
}

function GetUser() {
  const username = localStorage.getItem("name");
  if (!username) {
    const a = prompt(
      "Ahh looks like this is your first time visting this site, Can u enter your name plz :)",
    );
    if (a) {
      localStorage.setItem("name", a);
    } else {
      localStorage.setItem("name", "Guest");
    }
  }
  return <>{username}</>;
}
function App() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col bg-gb-bg text-gb-fg relative">
        <Header />
        <div className="p-4 m-4 grow">
          <div className="flex flex-col items-center justify-between mt-4">
            <div className=" relative max-w-4xl h-24 flex justify-center items-center mt-5 lg:mt-2">
              <h1 className="text-[2rem] lg:text-6xl font-bold bg-linear-to-r from-gb-fg to-gb-green bg-clip-text text-transparent text-shadow-2xl p-4 text-center ">
                Welcome <span>{GetUser()}</span> &lt;3
              </h1>
              <div className="absolute lg:w-20 w-14 h-20 lg:left-max left-1 bg-gb-fg/30 rounded-full blur-3xl animate-fade-in"></div>
              <div className="absolute lg:w-20 w-14 h-20 lg:right-max right-1 bg-gb-green/30 rounded-full blur-3xl animate-fade-in"></div>
            </div>
            <Form />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7 p-4 m-4 pt-8 lg:m-15 lg:p-10 w-full">
              {getCardmaker()}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
