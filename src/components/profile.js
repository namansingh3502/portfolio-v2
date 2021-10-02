import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";

const icons = [
  {
    id: "github",
    icon: <StaticImage className="h-12 w-12 mr-3 bg-white rounded" alt="github_link" src="../images/github.png"/>,
    profile: `https://github.com/namansingh3502/`
  },
  {
    id: "linkedin",
    icon: <StaticImage className="h-12 w-12 mr-3" alt="linkedin_link" src="../images/linkedin.png"/>,
    profile: `https://www.linkedin.com/in/naman-singh-215b2119b/`,
  },
  {
    id: "instagram",
    icon: <StaticImage className="h-12 w-12 mr-3" alt="instagram_link" src="../images/instagram.png"/>,
    profile: `https://www.instagram.com/naman.singh_35/`,
  },
  {
    id: "gmail",
    icon: <StaticImage className="h-14 w-14  mr-3" alt="gmail_link" src="../images/gmail.png"/>,
    profile: `mailto:namansingh0305@gmail.com`,

  },
]

const LinkButton = () => {
  return (
    <>
      {icons.map((item ) => {
        return (
          <a
            href={item.profile} key={item.id}
            data-aos="flip-left"
            data-aos-delay="200"
            data-aos-duraion="800"
          >
            {item.icon}
          </a>
        )
      }
      )}
    </>
  )
}

export default function Profile (){
  const hand = "https://raw.githubusercontent.com/aemmadi/aemmadi/master/wave.gif";

  return(
    <section className="min-h-screen flex place-self-center">
      <div className="grid grid-cols-6 md:gap-5 lg:gap-12 text-white">
        <div
          className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 md:col-start-2 md:col-span-2 lg:col-start-2 lg:col-span-2 place-self-center"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
            <StaticImage
              className="flex flex-row object-contain mx-3"
              src="../images/pic.png"
              alt="My Profile photo"
            />
        </div>
        <div className="col-start-2 col-span-5 sm:col-start-3 sm:col-span-3 md:col-start-4 md:col-span-3 text-3xl md:text-4xl lg:text-5xl xl:text-7xl self-center font-serif">
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="flex flex-row">
              <h1>
                Hello there
              </h1>
              <img className="flex flex-row object-contain place-self-center mx-4 h-7 md:h-9 lg:h-12 xl:h-16" src={hand} alt="waving hand"/>
              <h1>,</h1>
            </div>
            <div className="flex flex-row mt-5">
              <br/>
              <h1>
                I'm
                <span
                  className="extrabold m-4"
                  style={{
                    color:"rgb(46,196,182)",
                  }}
                >Naman Singh</span>
              </h1>
            </div>
          </div>
            <div className="flex flex-row mx-auto mt-8 h-10">
            <LinkButton />
            </div>
        </div>
      </div>
    </section>
  )

}