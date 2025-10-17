import Header from "./Header.tsx";
import CoreComponent from "./CoreComponent.tsx";
import TubButton from "./TubButton.tsx";

const MainPage = () => {
    return (
        <div className="scroll-smooth">
          <Header/>
            <CoreComponent/>
            <TubButton/>
        </div>
    )
}

export default MainPage
