import "./Driver.css";

const Driver = () => {
  return (
    <div className="driver-container">
      <div className="driver-img-container">
        <img
          src="/carsImgs/drive.png"
          alt="img-driver"
          className="img-driver"
        />
      </div>
      <div className="driver-text-container">
        <h2 className="title-driver">
          Find your perfect car
          <span className="title-color">to try before you buy</span>
        </h2>
        <p className="text-driver">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aut
          adipisci obcaecati voluptate blanditiis porro, libero in dicta
          doloremque odit.
        </p>
        <button className="btn-driver">Browser Cars</button>
      </div>
    </div>
  );
};

export default Driver;
