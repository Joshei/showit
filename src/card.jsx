import "./card-styles.css";
import { Link } from "react-router-dom";
const cards = [
  {
    id: 1,
    title: "Character Jumps Game",
    name: "Josh Eir",
    info: "the info goes here the info goes here",
    imageUrl: require("./assets/image.jpg"),
    link: "Code-listing1",
  },

  {
    id: 2,
    title: "Character Jumps Game",
    name: "Josh Eir",
    info: "the info goes here",
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
    <div>
      <div>
        {cards.map((card) => (
          <div>
            <div className="title">{card.title}</div>
            <div className="main">
              <img src={card.imageUrl} />

              <div className="linkOnSide2">
                <div className="linkOnSide">
                  <div className="card-info">{card.info}</div>
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
