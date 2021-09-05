import React from 'react';
import {StaticImage} from "gatsby-plugin-image";

const specialStyle = {
  color:"rgb(46,196,182)",
  fontWeight: 900,
  marginLeft: 6,
  marginRight: 6,
}

const AboutMe = () => {

  return (
    <section>
      <div className="pt-4 text-4xl md:text-5x lg:text-6xl xl:text-7xl font-serif">
        <div
          className="text-white text-center font-semibold"
          data-aos="flip-up"
          data-aos-duration="300"
          data-aos-delay="200"
          style={{ color:"rgb(46,196,182)", }}
        >
          Short Introduction
        </div>

      </div>
      <div className="grid grid-cols-6 gap-10 mt-2 px-6 lg:px-4">
        <div
          className="hidden lg:block lg:col-start-1 lg:col-span-2 place-self-center place-items-end "
          data-aos="zoom-in-left"
          data-aos-duration="700"
        >
          <StaticImage
            className="flex flex-row object-contain  m-4"
            src="../images/clipart.png"
            alt="MyProfile photo"
          />
        </div>

        <div
          className="col-start-1 col-span-6 lg:col-start-3 lg:col-span-4 xl:px-6 md:text-xl lg:text-xl xl:text-2xl text-center place-self-center font-serif xl:my-16"
          style={{ color:"white" }}
          data-aos="zoom-in-right"
          data-aos-duration="700"
          data-aos-delay="100"
        >
          <p className="p-2 md:mb-4">
            I'm <span style={specialStyle}>Naman Singh</span>, and as you might have already read.
          </p>

          <p className="p-2 md:mb-4">I am in penultimate year at
            <span style={specialStyle}>SJB Institute of Technology Bangalore</span>
              pursuing my Bachelor's in
            <span style={specialStyle}>Computer Science and Engineering</span>.
          </p>

          <p className="p-2 md:mb-4">
            This website was made to showcase all of what I can do and plan to do. Don't judge my writing based on this section though, I am still working on it.
          </p>

          <p className="p-2 md:mb-4">
            I got into development because
            <span style={specialStyle}> computers have always fascinated me</span>.
            Seeing code getting converted to things to do complex tasks like games, applications, was no less than magic to me and that's where my quest of learning and building began.
          </p>

          <p className="p-2 md:mb-4">
            I created this website so I could showcase all this and through this process, make it easier for you to connect with me. If you like what you see, head over to the contact section below and send me a text.
            <span style={specialStyle}>I would love to hear from you.</span>
          </p>
        </div>

      </div>
    </section>
  )
}

export default AboutMe