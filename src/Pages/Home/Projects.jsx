import data from "../../data/index.json";


export default function Projects (){
    return (
        <section className="portfolio--section" id="Projects">
      <div className="portfolio--container-box">

        
          <h2 className="Certi--section--heading">Projects</h2>
          <h4 className="subtitle">I have worked on a wide range of projects. 
          <p>From web apps to android apps. Here are some of my projects.</p></h4>

        </div>
      <div className="portfolio--section--container">
        {data?.projects?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <a className="text-sm portfolio--link" href={item.link}>View in Github
               
                <svg
                  xmlns=""
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    )
}