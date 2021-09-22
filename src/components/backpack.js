import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import 'devicon'

const languages = [
  {
    icon:"devicon-cplusplus-plain colored",
    name:"C++",
    text:"My go to programming language for competitive programming"
  },
  {
    icon:"devicon-python-plain colored",
    name:"Python",
    text:"I also like playing with Python for side projects and keen to use this knowledge to learn ML and AI."
  },
  {
    icon:"devicon-javascript-plain colored",
    name:"Javascript",
    text:"Mainly for adding functionality to front-end and ReactJs."
  },
  {
    icon:"devicon-html5-plain-wordmark colored",
    name:"HTML5",
    text:"Mostly writing HTML in JSX, but from time to time I find myself writing a plain, classic HTML file."
  },

  {
    icon:"devicon-css3-plain-wordmark colored",
    name:"CSS3",
    text:"Styling of html elements; I usually go for styled-components or Sass or Less."
  },
]
const framework = [
  {
    icon:"devicon-django-plain",
    name:"Django",
    text:"My go to framework of Python when it comes in building any back-end project."
  },
  {
    icon:"devicon-react-original colored",
    name:"React",
    text:"My favourite library for building web front-ends and single page apps."
  },
  {
    icon:"devicon-gatsby-plain colored",
    name:"GatsbyJS",
    text:"Great framework for building blazing fast websites. By the way, this website is using Gatsby under the hood!"
  },
  {
    icon:"devicon-graphql-plain colored",
    name:"GraphQl",
    text:"Learning and implementing GraphQL API's for query processing."
  },
  {
    icon:"devicon-tailwindcss-plain colored",
    name:"TailwindCSS",
    text:"Styling of html elements."
  },
]
const tools = [
  {
    icon:"devicon-github-original",
    name:"Github",
    text:"Place where you can find my projects."
  },
  {
    icon:"devicon-ubuntu-plain colored",
    name:"Ubuntu",
    text:"My favourite Operating System."
  },
  {
    icon:"devicon-amazonwebservices-plain-wordmark colored",
    name:"Amazon Web Services",
    text:""
  }
]

const heading = {
  fontFamily:"Sriracha",
  color:"rgb(46,196,182)",
}

const Icon = (props) => {
  const data = props.data;

  return (
    <ul className="h-auto" >
      {data.map((item,index) => {
        return(
          <li
            className="my-4 py-2 h-34"
            key={index}
            data-aos="fade-up"
            data-aos-duration="400"
          >
            <div className="inline-flex">
              <div className="self-center align-middle text-6xl md:text-7xl">
                <i className={item.icon}/>
              </div>
              <div className="ml-2">
                <h1 className="font-semibold text-2xl" style={{color:"rgb(46,196,182)"}}>{item.name}</h1>
                <p className="text-lg pr-2">{item.text}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

const Backpack = () => {
  return(
    <section className="pb-48">
      <div className="py-4 text-4xl md:text-5x lg:text-6xl xl:text-7xl font-serif">
        <div
          className="text-white text-center font-semibold pb-4"
          data-aos="flip-up"
          data-aos-duration="300"
          data-aos-delay="300"
          style={{ color:"rgb(46,196,182)", }}
        >
          My Development Backpack
        </div>
        <div
          className="grid"
          data-aos="flip-up"
          data-aos-duration="600"
        >
          <StaticImage
            className="object-contain justify-self-center h-52 w-52 my-10"
            src="../images/backpack.png"
            alt="MyProfile photo"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 lg:ml-10 xl:ml-0 px-6 lg:px-4 mt-4 text-white">
        <div className="col-start-1 col-span-3 xl:col-span-1 px-3 sm:ml-3 md:ml-0 md:pl-0">
          <h1
            className="self-center text-center text-4xl mb-8 mt-4 font-bold"
            style={heading}
            data-aos="flip-up"
            data-aos-duration="500"
          >
            Languages
          </h1>
          <Icon data={languages}/>
        </div>
        <div className="col-start-1 col-span-3 xl:col-start-2 xl:col-span-1">
          <h1
            className="self-center text-center text-4xl mb-8 mt-4 font-bold"
            style={heading}
            data-aos="flip-up"
            data-aos-duration="500"
          >
            Libraries & Frameworks
          </h1>
            <Icon data={framework}/>
        </div>
        <div className="col-start-1 col-span-3 xl:col-starts-3 xl:col-span-1 xl:px-8">
          <h1
            className="self-center text-center text-4xl mb-8 mt-4 font-bold"
            style={heading}
            data-aos="flip-up"
            data-aos-duration="500"
          >
            Tools & Others
          </h1>
          <Icon data={tools}/>

          <ul className="h-auto" >
            <li
              className="my-4 py-2 h-34"

              data-aos="fade-up"
              data-aos-duration="400"
            >
              <div className="inline-flex">
                <div className="self-center align-middle text-6xl md:text-7xl">
                  <StaticImage
                    className="flex flex-row object-contain w-16 h-16 mr-4 xl:mr-5 pr-4"
                    src="../images/postman-icon.png"
                    alt="postman icon"
                  />
                </div>
                <div className="ml-2">
                  <h1 className="font-semibold text-2xl" style={{color:"rgb(46,196,182)"}}>Postman
                  </h1>
                  <p className="text-lg pr-2">Mainly use for API testing.</p>
                </div>
              </div>
            </li>
          </ul>

        </div>
      </div>

    </section>
  )
}
export default Backpack