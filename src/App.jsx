import Header from "./components/Header";
import Identity from "./components/Identity";
import Biodata from "./components/Biodata";
import HighLight from "./components/HighLight";

const App = () => {
  return (
    <div className="card">
      <div className="top">
        <Header />
        <Identity />
      </div>
      <div className="bottom">
        <Biodata />
        <HighLight />
      </div>
    </div>
  );
};

export default App;
