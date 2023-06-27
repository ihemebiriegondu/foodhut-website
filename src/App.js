import FifthSection from "./components/fifthSection";
import ForthSection from "./components/forthSection";
import Header from "./components/header";
import SecondSection from "./components/secondSection";
import ThirdSection from "./components/thirdSection";

function App() {
  return (
    <div className="scroll-smooth overflow-hidden">
      <Header />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
    </div>
  );
}

export default App;
