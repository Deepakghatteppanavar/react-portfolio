import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
         <h2 className="skills--section--heading">My Skills</h2>
      </div>
      <h4 className="subtitle">Here are Some of My skills on which i have been worked</h4>


      <div className="skills--section--container">
        {data?.skills_frontend?.map((item, index) => (
            
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
