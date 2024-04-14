import './App.css'
import JudoStoryInFrance from "@pages/Public/JudoStoryInFrance.jsx";
import MartialArtsStoryInJapon from "@pages/Public/MartialArtsStoryInJapon.jsx";
import Technique from "@pages/Public/Technique.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "@pages/Public/Home.jsx";
import NotFound from "@/_utils/NotFound.jsx";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>

                    <Route path="/home" element={<Home/>}/>
                    <Route path="/martial" element={<MartialArtsStoryInJapon/>}/>
                    <Route path="/story" element={<JudoStoryInFrance/>}/>
                    <Route path="/technique" element={<Technique/>}/>

                    <Route path="*" element={<NotFound/>}/>

                </Routes>

            </BrowserRouter>

        </div>

    )
}

export default App
