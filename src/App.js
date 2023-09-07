import React from 'react';
import MainPage from "./MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StudentPair from "./StudentPair";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/student-pair" element={<StudentPair />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
