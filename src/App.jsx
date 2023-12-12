import Snowfall from "react-snowfall";
import Content from "./components/Content";
function App() {
  return (
    <main>
      <Content />
      <Snowfall snowflakeCount={300} wind={[4, 3]} />
    </main>
  );
}

export default App;
