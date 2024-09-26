import { render } from '../../render';
import '@fontsource-variable/m-plus-1';
import { Footer } from '../components/footer';
import '../styles/main.css';

const App = () => {
  return (
    <div id="container">
      <Footer />
    </div>
  );
};

render(<App />);
