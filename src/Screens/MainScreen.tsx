import { About } from "../Components/About";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { ListProducts } from "../Components/ListProducts";

export const MainScreen = () => {
  return (
    <div className="bg-gray-300 min-h-[100vh]" id="home">
    <Header/>
    <ListProducts/>
    <About/>
    <Footer/>
    </div>
  );
};