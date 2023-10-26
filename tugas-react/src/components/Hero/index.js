import hero from '../../images/medical.png';

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="text">
          <div className="head">
            <h3>Tugas React</h3>
            <p>NPM Saya - Nama Saya</p>
          </div>
          <div className="body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
            <button style={{cursor: 'pointer'}}>About</button>
          </div>
        </div>
        <div className="pict">
          <img src={hero} />
        </div>
      </div>
    </>
  );
}

export default Hero;
