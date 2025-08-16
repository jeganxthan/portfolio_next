import { Banner } from "../../Banner";
import "./styles.css";

const images = [
    "./vite.png",
    "./tailwind.svg",
    "./next.svg",
    "./node.svg",
    "./express.svg",
    "./MongoDB.svg",
    "./python.svg",
    "./js.svg",
    "./ts.svg",
    "./java.svg",
    "./react.svg",
].map((image) => ({
    id: crypto.randomUUID(),
    image
}));

export default function App() {
    return (
        <div className="py-6">
            <h1 className="text-[#302e2e] font-medium text-xs p-6">SKILLS</h1>
            <div className="App grayscale py-8">
                <Banner images={images} speed={30000} />
            </div>
        </div>
    );
}
