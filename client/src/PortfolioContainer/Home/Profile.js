import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>

        <div className='profile-details'>

          <div className='colz'>
            <div className='colz-icon'>

              <a href="https://www.facebook.com/king.kevinkonvict">
                <i className='fa fa-facebook-square'></i>
              </a>

              <a href="#">
                <i className='fa fa-instagram'></i>
              </a>

              <a href="https://github.com/kevinkalenga">
                <i className="fa-brands fa-github"></i>
              </a>

              <a href="#">
                <i className='fa fa-twitter'></i>
              </a>

            </div>
          </div>


          <div className='profile-details-name'>
            <span className='primary-text'>
              {" "}
              Bonjour, je m'appelle{" "}
              <span className='highlighted-text'>
                Kevin
              </span>
            </span>
          </div>


          <div className='profile-details-role'>
            <span className='primary-text'>

              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Développeur enthousiaste 💻",
                    1000,
                    "Développeur FullStack 🚀",
                    1000,
                    "MERN Stack Dev ⚛️",
                    1000,
                    "Laravel/Symfony 🐘",
                    1000,
                    "React/Redux ⚛️🔄",
                    1000,
                    "Java/Angular ☕🅰️",
                    1000,
                    "Aws/Devops 🐳⚙️",
                    1000,
                  ]}
                />
              </h1>

              <span className='profile-role-tagline'>
                Aptitude à développer des applications avec des opérations front-end et back-end.
              </span>

            </span>
          </div>


          <div className='profile-options'>

            <button className='btn primary-btn'>
              {" "}
              Embauchez-Moi{" "}
            </button>

            <a
              href='https://ton-bucket.s3.amazonaws.com/kevin-cv.pdf'
              download
            >
              <button className="btn highlighted-btn">
                Obtenir un CV
              </button>
            </a>

          </div>

        </div>


        <div className='profile-picture'>
          <div className='profile-picture-background'>

          </div>
        </div>

      </div>
    </div>
  )
}