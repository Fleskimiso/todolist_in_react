import React from "react";
import Rainbow from '../HOC/Rainbow'
const Home = () =>
{
    return(
        <div className="container">
            <h4 className="center">Home</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic praesentium provident maxime, cumque magni atque dolore, eveniet voluptatem quam libero explicabo earum asperiores rem. Temporibus eius possimus accusantium rerum in!</p>
        </div>
    )   
}
export default Rainbow(Home);