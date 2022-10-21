import "../css/project.css";
import coffee from "../pictures/coffee.png";
import redSkull from "../pictures/redSkull.png";

function Project() {
  return (
    <div id="Project" className="project">
      <h2>Projekty</h2>
      <section className="sectionProject">
        <div className="projectBox coffeeBox">
          <div className="coffeeProjectImg">
            <a href="https://mateuszrzodkiewicz.github.io/CoffyAndTeaShop/">
              <img
                className="projectImg coffee"
                src={coffee}
                alt="coffeeAndMore"
              />
            </a>
          </div>
          <div>
            <h3>CoffeeAndMore</h3>
            <p className="descriptionProject">
              Strona przedstawia sklep z kawa, herbatą oraz yerbamate. Została
              napisana w React z użyciem TypeScript. Znajdują sie tam takie
              elemnty jak: wyszukiwarka produktów, karuzela z produktami,
              koszyk, formulaż do wysylki z walidacją oraz zakladka z ulubionymi
              produktami.
            </p>
          </div>
        </div>

        <div className="projectBox tattooBox">
          <div className="coffeeProjectImg">
            <a href="https://mateuszrzodkiewicz.github.io/TattooStudio/">
              <img
                className="projectImg redSkull"
                src={redSkull}
                alt="redSkull"
              />
            </a>
          </div>
          <div>
            <h3>TattooStudio</h3>
            <p className="descriptionProject">
              Strona wizytówka studia tatuażu stworzona za pomocą React. W
              całości napisana bez użycia zewnętrnych bibliotek.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
