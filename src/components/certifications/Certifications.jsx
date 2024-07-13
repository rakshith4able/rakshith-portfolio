import { Carousel } from "antd";
import "./certifications.css";
import PJPT from "../../img/pjpt.png";
import Hackerrank from "../../img/js.png";

const Certifications = () => {
  return (
    <div className="cert">
      <div className="cert-texts">
        <h1 className="cert-title">Certifications</h1>
        <p className="cert-desc"></p>
      </div>
      <div className="cert-container">
        <Carousel autoplay>
          <div>
            <div className="cert-carousel-content-style">
              <img
                className="cert-carousel-img-style"
                src={PJPT}
                onClick={() => {
                  window.open(
                    "https://www.credential.net/e1ed5fdb-ce2f-4a3d-b4bb-f0e68b67dea1?key=1163b1a7d6fe2f04f9deca1b0f85c523785816962ff16dd1ba6df444e82be88d&record_view=true#gs.34lg0l"
                  );
                }}
                alt="PJPT certificate"
              />
            </div>
          </div>
          <div>
            <div className="cert-carousel-content-style">
              <img
                className="cert-carousel-img-style"
                src={Hackerrank}
                onClick={() => {
                  window.open(
                    "https://www.hackerrank.com/certificates/455cd8a160cf"
                  );
                }}
                alt="Hackerank Intermediate Javascript Developer Certificate"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Certifications;
