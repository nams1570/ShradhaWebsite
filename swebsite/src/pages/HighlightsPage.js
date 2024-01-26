import "./HighlightsPage.css"


function IntroContainer(){
    return (
        <div className="IntroContainer">
            <h1>Highlighted Works</h1>
            <p >A collection of my written work and academic projects for reference.</p>
        </div>
    );
}

function HighlightContainer({heading,cssID, description}){
    return (
        <div id={cssID} className="highlightsContainer">
            <h1>{heading}</h1>
            <p>{description}</p>
        </div>
    )
}


export default function Highlights(){
    const leftDesc = "I served as a General Assignment News Reporter and later as a Research & Ideas Reporter at The Daily Californian (one of the West Coast's oldest newspapers (est. 1871) with a print circulation of 10,000+ and a reach of 58,000+ people). My reporting encompassed local politics, research, student government, university affairs, and more.  A selection of newspaper articles are given below:";
    const rightDesc = "I worked on practical projects and research papers across a variety of domains including Economics, Finance, Political Economy, International Affairs, Trade etc during my academic career.";
    return (
        <div>
            <IntroContainer className="IntroContainer"></IntroContainer>
            <div>
                <HighlightContainer description={leftDesc} cssID="leftContainer" heading="Daily Cal"></HighlightContainer>
                <HighlightContainer description={rightDesc} cssID="rightContainer" heading="Academic Projects"></HighlightContainer>
            </div>
        </div>
    );
}