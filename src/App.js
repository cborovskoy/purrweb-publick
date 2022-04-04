import './App.css';
import Header from "./components/Header/Header";
import FirstScreen from "./screens/1_FirstScreen/FirstScreen";
import ContactsAndLogin from "./screens/2_ContactsAndLogin/ContactsAndLogin";
import OurMission from "./screens/3_OurMission/OurMission";
import IDScanner from "./screens/4_IDScanner/IDScanner";
import React from "react";
import BIToolIntegration from "./screens/5_BIToolIntegration/BIToolIntegration";
import QrCode from "./screens/6_QRCode/QRCode";
import GenerateQR from "./screens/7_GenerateQR/GenerateQR";
import EasierOrdering from "./screens/8_EasierOrdering/EasierOrdering";
import Notab from "./screens/9_Notab/Notab";
import Background from "./components/Background/Background";
import CookieAlert from "./components/CookieAlert/CookieAlert";
import GetInTouch from "./screens/10_GetInTouch/GetInTouch";
import DownloadOurApp from "./screens/11_DownloadOurApp/DownloadOurApp";
import Footer from "./screens/12_Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Background/>
            <CookieAlert/>

            <div className="content">
                <FirstScreen/>
                <ContactsAndLogin/>
                <OurMission/>
                <IDScanner/>
                <BIToolIntegration/>
                <QrCode/>
                <GenerateQR/>
                <EasierOrdering/>
                <Notab/>
                <GetInTouch/>
                <DownloadOurApp/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
