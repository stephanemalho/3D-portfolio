import { BallCanvas } from "./canvas"

import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

// eslint-disable-next-line react-refresh/only-export-components
const Tech = () => {
  return (
    <div className="flex flex-row items-center flex-wrap gap-10 w-5/6 m-auto">
      {technologies.map((tech, index) => (
        <div key={tech.name} className="w-28 h-28 m-auto">
        <BallCanvas index={index} {...tech} />
        </div>
      ))}
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Tech, "")