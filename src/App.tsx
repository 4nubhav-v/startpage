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

function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col bg-gb-bg text-gb-fg">
        <Header />
        <div className="p-4 m-4">
          <div className="flex flex-col items-center justify-between mt-4">
            <div className=" relative w-4xl h-24 flex justify-center items-center mt-5">
              <h1 className="text-6xl font-bold bg-linear-to-r from-gb-fg to-gb-green bg-clip-text text-transparent text-shadow-2xl p-4 text-center">
                Welcome Anubhav &lt;3
              </h1>
              <div className="absolute w-20 h-20 left-20 bg-gb-fg/30 rounded-full blur-3xl animate-fade-in"></div>
              <div className="absolute w-20 h-20 right-20 bg-gb-green/30 rounded-full blur-3xl animate-fade-in"></div>
            </div>
            <div className="w-1/2">
              <Form />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 m-4 pt-8">
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
