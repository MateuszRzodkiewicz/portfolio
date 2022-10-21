import "../css/navigation.css";
function Naviagtion() {
  return (
    <div id="Menu" className="NavigationDesktop">
      <div className="linkContainer">
        <a href="#About">O mnie</a>
      </div>
      <div className="linkContainer">
        <a href="#Stack">Stock technologiczny</a>
      </div>
      <div className="linkContainer">
        <a href="#Project">Projekty</a>
      </div>
      <div className="linkContainer">
        <a href="#Concact">Kontakt</a>
      </div>
    </div>
  );
}

export default Naviagtion;
