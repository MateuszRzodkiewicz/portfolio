import "../css/about.css";
import avatar from "../pictures/avatar.png";
function About() {
  return (
    <div id="About" className="AboutMe">
      <section className="flexContianer">
        <div className="containerForMeImg">
          <img className="avatar" src={avatar} alt="avatar" />
        </div>
        <section className="textAboutMe">
          <p>
            Cześć, mam na imę Mateusz Rzodkiewicz. Mam 26 lat i jestem
            poczatkującym Frontend-Developerem. Swoją przygode z programowaniem
            zacząłem w zeszłym roku. Stało sie to całkiem przypdakiem, szukałem
            jakiegoś zajęcia po pracy które konstruktywnie wypełniło by mi wolny
            czas i tak od roku z przyjemnością oddaje sie temu zajęciu. Chciał
            bym podjąc swoja pierwszą prace na stanowisku frontend-developera
            aby lepiej poznać technologie i uczestniczyć w ciekawych projektach.
          </p>
        </section>
      </section>
    </div>
  );
}

export default About;
