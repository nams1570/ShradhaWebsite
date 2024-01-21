import "./AboutPage.css"
import { React, useState } from 'react';
// Need about me box. img and paragraph and heading

function ImageCarousel({images}){
    const [index,setIndex] =useState(0);
    function nextImage()
    {
        setIndex((index+1) % images.length)
    }
    function prevImage()
    {
        setIndex((index - 1 + images.length) % images.length)
    }
    return (
        <div class="container">
            <button class="prev-button" onClick={prevImage}>&lt;</button>
            <img class = "carousel-image" src = {images[index]}></img>
            <button class="next-button" onClick={nextImage}>&gt;</button>
        </div>
    );
}

export default function AboutMe({images}){
    return (
        <>
            <ImageCarousel images={images}></ImageCarousel>
            <div class = "container">
                <h1>WHO AM I?</h1>
                <img class= "spic" src="/shradha.jpg" alt="" ></img>
                <p> I'm a goal-driven and team-centered problem solver and strategic thinker. I marry both qualitative and quantitative insights in order to maximize the impact of my work. Moreover, I have experience establishing and leading global teams (across 4 countries and 18+ team members) as well as overseeing cross-functional projects that have touched billions of users. I achieve this practically through leveraging strong leadership, data analysis, research, communication, and project management (agile, scrum) skills and techniques.
    On a personal note, I am a proud UC Berkeley and UChicago graduate (Go Bears! Go Maroons!),  Karateka and amateur librarian (well, trying to be one). </p>
            </div>
        </>
    );
}