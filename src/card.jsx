import "./card-styles.css";
import { Link } from "react-router-dom";
const cards = [
  {
    id: 1,
    title: "Character Jumps Game",
    name: "Josh Eir",
    info: "the info goes here the info goes here the info goeinfo goes heroes here the info goes here the info goes info goes her info goes here info goes hero goes here",
    imageUrl: require("./assets/image.jpg"),
    link: "Code-listing1",
  },

  {
    id: 2,
    title: "Character Jumps Game",
    name: "Josh Eir",
    info: "the info goes here the info goes here the info goes here the info goeinfo goes heroes here the info goes here the info goes info goes her info goes here info goes hero g",
    imageUrl: require("./assets/image.jpg"),
    link: "Code-listing2",
  },

  {
    id: 3,
    title: "Character Jumps Game",
    name: "Josh Eir",
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
              <div className = "image" >
              <img src={card.imageUrl} />
              </div>
              <div className="linkOnSide2">
                
                
                <div className="linkOnSide">
                  <div>
                  <div className="card-info">{card.info}</div>
                  </div>
                  <div>
                    <Link className="top-list" to={`/${card.link}`}>
                      See the code for this project
                    </Link>
                  </div>
                </div>


              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default MainDisplay;
