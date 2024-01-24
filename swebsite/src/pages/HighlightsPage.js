import "./HighlightsPage.css"


function IntroContainer(){
    return (
        <div className="IntroContainer">
            <h1 class="IntroName">Highlighted Works</h1>
            <p class="IntroText">A collection of my written work and academic projects for reference.</p>
        </div>
    );
}

export default function Highlights(){
    return (
        <div>
            <IntroContainer></IntroContainer>
        </div>
    );
}