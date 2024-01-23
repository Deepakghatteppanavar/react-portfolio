import { useTypewriter } from 'react-simple-typewriter'

export default function HeroSection() {
  const [text] = useTypewriter({
    words: ['Fresher', 'MCA Graduated'],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 80,
});

const openNewTab = (url) => {
  window.open(url, '_blank');
};

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        
        <div className="hero--section--content">
          <p className="section--title">Hey, I' am</p>
          <span className="hero--section--title">

            <span className="hero--section-title--color">
              Deepak</span>{" "}<br/><p >I am
                <b className='text-c'> {text}</b>
                </p>  </span>
        
          <p className="hero--section-description">
          Motivated individual with a diverse skill set, 
          seeking a position for personal growth and to 
          contribute to a forward-thinking company's success.
           Committed to excellence in a collaborative team 
           environment. 
            <br /> 
          </p>
        </div>
    
              
               
        <button onClick={() => openNewTab('img/DeepakGG.pdf')} className="btn btn-primary">Get Resume</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
