import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import Alert from './components/layout/Alert';
import User from './pages/User';

const App = () => {
  return (
    <>
      <GithubProvider>
        <AlertProvider>
          <BrowserRouter>
            <>
              <Navbar />
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
              {/* <Footer /> */}
            </>
          </BrowserRouter>
        </AlertProvider>
      </GithubProvider>
    </>
  );
};

export default App;
