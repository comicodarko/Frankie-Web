import Menu from "./components/Menu";
import GlobalProvider from "./Contex";
import Movies from "./pages/movies";

export default function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Menu />
        <Movies />
      </div>
    </GlobalProvider>
  );
}