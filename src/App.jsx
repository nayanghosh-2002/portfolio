import './App.css';
import AppLayout from './components/UI/AppLayout';
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <AppLayout />
      </main>
      <Footer />
    </div>
  );
}

export default App;
