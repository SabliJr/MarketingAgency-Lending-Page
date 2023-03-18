import "./index.css";

//Components
import TheHeader from "./Components/Header/Navbar";
import TheHelp from "./Components/TheHelp/Pitch";
import VideoSec from "./Components/Video/VideoSec";
import Testimonials from "./Components/testimonials/Testimonials";
import NewsLetter from "./Components/NewsLetter/EmailSub";
import TheFooter from "./Components/Footer/TheFooter";

const App = () => {
  return (
    <div className='App'>
      <TheHeader />
      <TheHelp />
      <VideoSec />
      <Testimonials />
      <NewsLetter />
      <TheFooter />
    </div>
  );
};

export default App;
