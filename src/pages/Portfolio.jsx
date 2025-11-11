
export default function Portfolio() {

 const skillsData = [
    { skillName: "Adobe Photoshop", image: "/skill1.png" },
    { skillName: "Adobe Illustrator", image: "/skill2.png" },
    { skillName: "Figma", image: "/skill3.png" },
    { skillName: "Logo & Brand Identity Design", image: "/skill4.png" },
    { skillName: "Web & App UI Design", image: "/skill5.png" },
    { skillName: "Visual & Layout Composition", image: "/skill6.png" },
  ];  return <div className="   bg-[#F4F1DE] min-h-screen">
        <nav className="flex py-4 max-w-7xl mx-auto items-center justify-between w-full px-2">
            <div className=" text-2xl font-medium ">
                Portfolio
            </div>
            <div className="flex items-center gap-2 ">
                <ul className="flex items-center navbar justify-between w-[500px]  gap-3">
                    <li className="mx-2">Home </li>
                    <li className="mx-2">About me</li>
                    <li className="mx-2"> Skills</li>
                    <li className="mx-2">Work</li>
                    <li className="mx-2">Testimonial</li>
                    <li className="mx-2">Contact</li>
                </ul>
                <button style={{
                    backgroundColor: "#E07A5F"
                }} className="text-white p-2 rounded-lg ">
                    Hire us
                </button>
            </div>
        </nav>


        <div className="flex items-center justify-between container max-w-8xl mx-auto top-30 mt-40" >
            <div className="">
                <div className="text-lg font-semibold">Hi, I’m Riya Malhotra</div>
                <div className="text-6xl font-semibold mb-4">
                    Creative Designer
                </div>

                <div className="text-sm container max-w-xl mx-auto font-[500] tracking-loose ">
                    Passionate about crafting bold and functional visuals that connect ideas to emotions.Turning imagination into impactful digital experiences
                </div>
                <button style={{
                    backgroundColor: "#E07A5F"
                }} className="text-white p-2 rounded-lg mt-10">
                    See My Work
                </button>
            </div>
            <div className="rectangle"></div>
        </div>
        <div className=" flex flex-col items-center justify-between mt-30 ">

            <div className="text-4xl mb-2 font-bold">
                About Me
            </div>

            <div className="about relative">
                <span className="text-2xl max-w-6xl container w-full mx-auto block   text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  text-center">I’m a multidisciplinary designer specializing in brand identity, UI/UX, and digital graphics.With a blend of aesthetics and strategy, I help brands communicate their purpose clearly and creatively.<br />Currently exploring modern design trends, motion graphics, and storytelling through visuals.</span>
            </div>
        </div>
        <div className="flex flex-col items-center justify-between mt-20 px-5">
      <h2 className="text-4xl mb-10 font-bold text-center">Skills</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className=" flex flex-col items-center justify-center p-6 "
          >
            <img
              src={skill.image}
              alt={skill.skillName}
              width={300}
              height={250}
              className="rounded-xl object-contain"
            />
            <p className="mt-4 text-lg font-medium text-center">{skill.skillName}</p>
          </div>
        ))}
      </div>
    </div>


    </div>
}
