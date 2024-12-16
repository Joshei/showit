import "./card-styles.css";
import { Link } from "react-router-dom";
const cards = [
  {
    id: 1,
    title: "Black Jack Project",
    info: "Written in JavaScript, this fun black jack card game, is for playing cards.  It is small enough to fit on a mobile device, which is nice.  Completed March 2023.",
    imageUrl: require("./assets/Blackjack_Display.bmp"),
    link: "Code-listing2",
    projectLink: "/test"
  },

  {
    id: 2,
    title: "Living the Simple Life Project",
   
    info: "This three page website is written with JavaScript and CSS.  It is completely responsive and works well with mobile-devices.  Completed September 2024.",
    imageUrl: require("./assets/2-living-simple.png"),
    link: "Code-listing2",
    projectLink: "/test"
  },

  {
    id: 3,
    

    title: "Image Gallery Project",
    info: "Although, the makeup is a bit contrived, this React site shows good use of the language.  It is written with React, Javascript, and CSS.  It features a panel that hides itself."
    imageUrl: require("./assets/1-image-gallery.png"),
    link: "Code-listing1",
    projectLink: "/test"


  },
];



const MainDisplay = () => {
  return (
    <div className = "top">
      <div>
        {cards.map((card) => (
          <div>
            <div className="title">{card.title}</div>
            <div className="main">
              
                
                  
                  <div className="card-info">{card.info}</div>
                  
                  
                  
                  <div className = "alink">
                    <div className = "first-link">
                    <Link className="top-list" to={`/${card.link}`}>
                    See the sample code for this project
                    </Link>
                    </div>
                    
                    <Link className="top-list" to={`/${card.projectLink}`}>
                    Go to project on server
                    </Link>
                  </div>
                  
               

            </div>
            <div className = "image" >
              <img src={card.imageUrl}  alt = "image"/>
              
              </div>
              
          </div>

          
        ))}
      </div>
      
    </div>
  );
};

export default MainDisplay;
