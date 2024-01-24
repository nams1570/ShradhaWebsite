import "./ProjectPage.css"
// Need container that has intro text
// Bevels for each of the projects

 function BegPrompt(){
    return (
        <div class="intro-container">
            <h1> SELECTED PROFESSIONAL PROJECTS</h1>
            <p> Professionally, I am deeply passionate about securing the integrity of strategic products and the data they generate.
To that end, I have worked to address risks to social media platforms across a variety of domains, including but not limited to: COVID-19, Elections, Child Exploitative Imagery, Human Trafficking, Misinformation, Hate Speech, etc.
Below is a selection of professional projects I have worked on and links to media references on the same.
</p>
        </div>
    );
}

function DisplayProjects()
{
    return (
        <div class="projcontainer">
            <div class="row">
                <div class="projtext">
                <div class="projheading">COVID-19</div>
                    With the advent of the global pandemic, COVID-19 was the highest priority for integrity operations teams. 
                My efforts were focused on building sustainable products to 
                promote authoritative information (such as support modules/hubs), arrest misinformation and 
                combat pandemic-related hate speech.</div>
                <img class="projimg" src="favicon.ico" alt = ""></img>
            </div>
            <div class="row">
                <div class="projtext">
                <div class="projheading">Widely Viewed Content Report</div>
                    In conjunction with the team I oversaw as Program Manager, I worked on data collection, analysis, validation, and review for Facebook's first-ever Widely Viewed Content Report. This report provided - for the first time - a glimpse into what people see on Facebook. 
                In other words, what content is most viewed (in terms of VPVs) on the platform.</div>
                <img class="projimg" src="favicon.ico" alt = ""></img>
            </div>
            <div class="row">
                <div class="projtext">
                <div class="projheading">QANON</div>
                    Militarized Social Movements were another area of focus for me. 
                In this capacity, I was extensively invested in securing users from the promotion or dissemination of risks through trend analysis, building dashboards and support centers and collaborating with the Global Network on Extremism and Technology.
</div>
                <img class="projimg" src="favicon.ico" alt = ""></img>
            </div>
            <div class="row">
                
                <div class="projtext">
                <div class="projheading">Elections</div>
                    I have worked extensively on civic concerns, including the census and elections - from the 2020 American Presidential election to international elections in countries such as Myanmar, Ethiopia, and Mexico. 
Several of these elections were identified as high risk due to the possibility of real-world violence arising from online discourse and potential interference and misinformation.  My work emphasized combating these challenges.


                </div>
                <img class="projimg" src="favicon.ico" alt = ""></img>
            </div>
        </div>
    );
}

export default function Projects(){
    return (
        <div>
            <BegPrompt></BegPrompt>
            <DisplayProjects></DisplayProjects>
        </div>
    );
}