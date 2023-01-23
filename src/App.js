import Header from "./components/header/Header";
import BaseContainer from "./components/BaseContainer/BaseContainer";
import Intro from "./components/intro/Intro";
import DownloadPage from "./components/downloadPage/DownloadPage";
function App() {
  return (
    <div className="App">
      <BaseContainer>
        <Header />
        <Intro />
        <DownloadPage />
      </BaseContainer>
    </div>
  );
}

export default App;
