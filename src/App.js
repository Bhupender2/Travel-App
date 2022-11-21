import Navbar from "./COMPONENTS/Navbar.jsx";
import Crousels from "./COMPONENTS/Crousels.jsx";
import Card from "./COMPONENTS/Card.jsx";
import Footer from "./COMPONENTS/Footer.jsx";
import Ques_section from "./COMPONENTS/Ques_section.jsx";
import video_mp4 from "./Videos/video_mp4.mp4"

function App() {
  return (
    <>
      <Navbar/>
      <Crousels/>
      <Card/>
      <div className="h-[50vh] my-[5rem] opacity-95">
      <video src={video_mp4} loop autoPlay muted className="h-full w-full object-cover"/>
      </div>
      <Ques_section/>
      <Footer/>
    </>
  );
}

export default App;
