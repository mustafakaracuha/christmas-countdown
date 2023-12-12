import Snowfall from "react-snowfall";
import CountDown from "./components/CountDown";
function App() {
  return (
    <>
      <CountDown />
      <Snowfall snowflakeCount={300} wind={[4, 3]} />
    </>
  );
}

export default App;
