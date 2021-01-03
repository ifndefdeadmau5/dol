import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <FirstSection />
      <SecondSection />
    </div>
  );
}

export default App;
