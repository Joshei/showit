import "./card-styles.css";
import { Link } from "react-router-dom";
const cards = [
  {
    id: 1,
    title: "Mobile First Project",
    
    info: "the info goes here the info goes here the info goeinfo goes heroes here the info goes here the info goes info goes her info goes here info goes hero goes here",
    imageUrl: require("./assets/1-mobile-first.png"),
    link: "Code-listing1",

  },

  {
    id: 2,
    title: "Image Gallery Project",
   
    info: "the info goes here the info goes here the info goes here the info goeinfo goes heroes here the info goes here the info goes info goes her info goes here info goes hero g",
    imageUrl: require("./assets/2-image-gallery.png"),
    link: "Code-listing2",
  },

  {
    id: 3,
    title: "Text Editor Project",
    
    info: "the info goes here",
    imageUrl: require("./assets/image.jpg"),
    link: "Code-listing2",
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
                    <Link className="top-list" to={`/${card.link}`}>
                    See the sample code for this project
                    </Link>
                  </div>
                  
               

            </div>
            <div className = "image" >
              <img src={card.imageUrl} />
              
              </div>
              
          </div>

          
        ))}
      </div>
      
    </div>
  );
};

export default MainDisplay;
