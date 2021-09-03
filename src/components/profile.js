import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";

const icons = [
  {
    id: "github",
    icon: `https://img.shields.io/badge/-black?style=flat-square&logo=github&logoColor=white`,
    profile: `https://github.com/namansingh3502/`,
    tag: "github_link"
  },
  {
    id: "linkedin",
    icon: `https://img.shields.io/badge/-blue?style=flat-square&logo=Linkedin&logoColor=white`,
    profile: `https://www.linkedin.com/in/naman-singh-215b2119b/`,
    tag: "linkedin_link"
  },
  {
    id: "instagram",
    icon: `https://img.shields.io/badge/-purple?style=flat-square&logo=instagram&logoColor=white`,
    profile: `https://www.instagram.com/naman.singh_35/`,
    tag: "instagram_link"
  },
  {
    id: "gmail",
    icon: `https://img.shields.io/badge/-c14438?style=flat-square&logo=Gmail&logoColor=white`,
    profile: `mailto:namansingh0305@gmail.com`,
    tag: "gmail_link"
  },
]

const LinkButton = () => {

  return (
    <>
      {icons.map((item ) => {
        return (
          <a href={item.profile} key={item.id}>
            <img className="h-12 align-middle mr-6" src={item.icon} alt={item.tag} />
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
        <div className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 md:col-start-2 md:col-span-2 lg:col-start-2 lg:col-span-2 place-self-center">
            <StaticImage
              className="flex flex-row object-contain mx-3"
              src="../images/pic.png"
              alt="My Profile photo"
            />
        </div>
        <div className="col-start-2 col-span-5 sm:col-start-3 sm:col-span-3 md:col-start-4 md:col-span-3 text-3xl md:text-4xl lg:text-5xl xl:text-7xl self-center font-serif">
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
            <div className="flex flex-row mx-auto mt-8 h-10">
            <LinkButton />
            </div>
        </div>
      </div>
    </section>
  )

}