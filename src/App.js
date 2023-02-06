import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import DownloadPage from "./components/downloadPage/DownloadPage";
import "../src/App.scss";
import Profiles from "./components/profiles/Profiles";
import CallProfile from "./components/call/CallProfile";
import Questions from "./components/questions/Questions";
function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <DownloadPage />
      <Profiles />
      <CallProfile />
      <Questions />
    </div>
  );
}

export default App;
