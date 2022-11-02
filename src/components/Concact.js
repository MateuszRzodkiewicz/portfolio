import "../css/concact.css";

function Concact() {
  return (
    <div className="widthSectionConcact">
      <h2 className="h2Concact">Dane Do Kontaktu</h2>
      <div id="Concact">
        <div className="flexGrowConcact">
          <p className="concactP">
            E-mail: <span>mateusz.rzodkiewicz8@gmail.com</span>
          </p>
          <p className="concactP">
            Telefon: <span>512-719-736</span>
          </p>
        </div>
        <div className="flexGrowConcact">
          <p className="concactP">
            Linkedin:
            <a href="https://www.linkedin.com/in/matuesz-rzodkiewicz-5b5375241/">
              https://www.linkedin.com/in/matuesz-rzodkiewicz-5b5375241/
            </a>
          </p>
          <p className="concactP">
            GitHub:
            <a href="https://github.com/MateuszRzodkiewicz?tab=repositories">
              https://github.com/MateuszRzodkiewicz?tab=repositories
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Concact;
