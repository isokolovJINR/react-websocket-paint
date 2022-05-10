
import './styles/app.scss';
import SettingBar from "./components/SettingBar";
import Toolbar from "./components/Toolbar";
import Canvas from "./components/Canvas";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Paint from "./components/Paint";

function App() {
  return (
      <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path={'/:id'} element={<Paint/>} />
                    <Route
                        path="*"
                        element={<Navigate to={`f${(+new Date()).toString(16)}`} replace />}
                    />
                </Routes>


            </div>
      </BrowserRouter>
  );
}

export default App;
