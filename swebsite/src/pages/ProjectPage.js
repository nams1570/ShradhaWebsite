
// Need container that has intro text
// Bevels for each of the projects

 function BegPrompt(){
    return (
        <div class="container">
            <h1> SELECTED PROFESSIONAL PROJECTS</h1>
            <p> Professionally, I am deeply passionate about securing the integrity of strategic products and the data they generate.
To that end, I have worked to address risks to social media platforms across a variety of domains, including but not limited to: COVID-19, Elections, Child Exploitative Imagery, Human Trafficking, Misinformation, Hate Speech, etc.
Below is a selection of professional projects I have worked on and links to media references on the same.
</p>
        </div>
    );
}

export default function Projects(){
    return (
        <div>
            <BegPrompt></BegPrompt>
        </div>
    );
}