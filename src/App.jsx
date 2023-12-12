import Snowfall from "react-snowfall";
import Content from "./components/Content";
function App() {
  return (
    <div className="w-full h-full overflow-hidden">
      <Content />
      <Snowfall snowflakeCount={300} wind={[4, 3]} />
    </div>
  );
}

export default App;
