import "./App.css";
import ToolsList from "./ToolsList";
import NewTools from "./NewTools";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
    <NewTools></NewTools>
      <ToolsList></ToolsList>
      <Footer></Footer>
    </>
  );
}