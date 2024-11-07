import { Navbar } from './Navbar';
import Carousel from './Carousel';

function App() {
  return (
    <div>
      <Navbar />
      {/* Il carousel deve essere posizionato immediatamente dopo la Navbar */}
      <Carousel />
      {/* Altri contenuti della tua pagina */}
    </div>
  );
}

export default App;
