import TimeCapsuleButton from "./TimeCapsuleButton";

const About = () => {
  return (
    <div>
      <div className="aboutPage">
        <div>
          <h1>About Glimpse</h1>
        </div>
        <p className="glimpse">"We do not remember days, we remember moments."</p>
        <p>
          Some memories deserve to be held a little longer. Some thoughts belong to the future. <span className="glimpse">Glimpse</span> is a time capsule for your heart—a place where you can revisit the past, cherish the present, and whisper to the days ahead.
        </p>
        <p>
          Step into the eras that shaped us—the movies that made us dream, the music that moved our souls, and the books that stayed with us long after we turned the last page. Each decade is its own little planet, waiting for you to explore. 
        </p>
        <p>
          But <span className="glimpse">Glimpse</span> isn’t just about looking back. It’s about looking forward, too. With just a click, you can send a message to your future self—a love letter, a quiet reminder, a hope you don’t want to forget. One day, when the moment is right, it will find its way back to you.
        </p>
        <p>
          Because time is a funny thing. It slips through our fingers, but with <span className="glimpse">Glimpse</span>, you’ll always have a way to hold on.
        </p>
      </div>
      <TimeCapsuleButton />
    </div>
  );
};

export default About;