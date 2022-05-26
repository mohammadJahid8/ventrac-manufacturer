import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faAnglesRight,
  faEnvelope,
  faGraduationCap,
  faLink,
  faLocationDot,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MyPortfolio = () => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
          <div>
            <blockquote>
              <p className="mt-6 text-xl leading-relaxed text-black">
                “Hi, Myself Mohammad Jahid. I am a Passionate web developer with
                0 years of experience. I am Self-motivated team player seeking a
                position as a lead web developer with Next Generation Web
                Development where I can apply my advanced knowledge of web
                design with my leadership abilities to meet client needs and
                exceed their expectations.”
              </p>
            </blockquote>
            <p>Till now i have learned-</p>
            <p>
              <FontAwesomeIcon icon={faAngleRight} />
              HTML
            </p>
            <p>
              <FontAwesomeIcon icon={faAngleRight} />
              CSS
            </p>
            <p>
              <FontAwesomeIcon icon={faAngleRight} />
              BOOTSTRAP
            </p>
            <p>
              <FontAwesomeIcon icon={faAngleRight} />
              TAILWIND
            </p>
            <p>
              <FontAwesomeIcon icon={faAngleRight} />
              JAVASCRIPT
            </p>
            <p>
              <FontAwesomeIcon icon={faAngleRight} />
              REACT
            </p>
            <p>
              <FontAwesomeIcon icon={faAngleRight} />
              MONGODB
            </p>

            <p className="mt-6 text-base font-semibold text-black">
              Mohammad Jahid
            </p>
            <p className="mt-1 text-base text-gray-600">Front end developer</p>
          </div>

          <div>
            <div className="overflow-hidden bg-white">
              <div class="avatar flex justify-center pt-6 pb-2">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    alt=""
                  />
                </div>
              </div>

              <div class="card w-96 bg-base-100">
                <div class="card-body">
                  <h1 className="text-xl font-semibold ">Mohammad Jahid</h1>
                  <div className="flex items-center mt-4 text-gray-700 ">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h1 className="px-2 text-sm">
                      Email:mohammadjahid0007@gmail.com
                    </h1>
                  </div>
                  <div className="flex items-center mt-4 text-gray-700 ">
                    <FontAwesomeIcon icon={faGraduationCap} />
                    <h1 className="px-2 text-sm">
                      Education:Diploma in CSE from National Institute of
                      Technology
                    </h1>
                  </div>

                  <div className="flex items-center mt-4 text-gray-700 ">
                    <FontAwesomeIcon icon={faLink} />
                    <h1 className="px-2 text-sm">My Projects:</h1>
                  </div>
                  <ul>
                    <p>
                      <a
                        className="text-blue-600 hover:underline"
                        href="https://assignment-12-9e0cc.web.app/?fbclid=IwAR0ETfVsOaWYkXvpP6A-LcXwWveCoogsdKj1m9MgwkNf17RPH0niOdEtN2A"
                      >
                        Ventrac
                      </a>
                    </p>
                    <p>
                      <a
                        className="text-blue-600 hover:underline"
                        href="https://assignment-11-85553.web.app/?fbclid=IwAR2k56gpKUyfDqb3grgHrqhxGjaCRCjtM4XbK0w2LDi3X-TD-6zbcER7kfY"
                      >
                        Best Electronics
                      </a>
                    </p>
                    <p>
                      <a
                        className="text-blue-600 hover:underline"
                        href="https://flourishing-creponne-d381f1.netlify.app/?fbclid=IwAR2IaULUKF-GEK2S49n8-C_YSX3VpkByjHd0ojZcTpgsdLI0WRn-ha7BtRA"
                      >
                        Classic Candles
                      </a>
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
