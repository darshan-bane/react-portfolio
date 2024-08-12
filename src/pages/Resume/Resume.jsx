import { FaBookReader } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import { MdWork } from "react-icons/md";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="BSC.I.T from Kirti M. Dongursee College"
            date="2020-2023"
            description="lorem ispem lorem ispemlorem ispemlorem ispemlorem ispemlorem ispemlorem ispemlorem ispemlorem ispem"
          />
          <TimelineItem
            title="HSC from Bhavans Hazarimal Somani College"
            date="2019-2020"
            description="lorem ispem lorem ispemlorem ispemlorem ispemlorem ispemlorem ispemlorem ispemlorem ispemlorem ispem"
          />
          <TimelineItem
            title="SSC from Antonio De Souza High School"
            date="2017-2018"
            description="lorem ispem lorem ispemlorem ispemlorem ispemlorem ispemlorem ispemlorem ispemlorem ispemlorem ispem"
          />
        </ol>
      </div>
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <MdWork />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="BSC.I.T from Kirti M. Dongursee College"
            date="2020-2023"
            description="lorem ispem lorem ispemlorem ispemlorem ispemlorem ispemlorem ispemlorem ispemlorem ispemlorem ispem"
          />
          <TimelineItem
            title="HSC from Bhavans Hazarimal Somani College"
            date="2019-2020"
            description="lorem ispem lorem ispemlorem ispemlorem ispemlorem ispemlorem ispemlorem ispemlorem ispemlorem ispem"
          />
          <TimelineItem
            title="SSC from Antonio De Souza High School"
            date="2017-2018"
            description="lorem ispem lorem ispemlorem ispemlorem ispemlorem ispemlorem ispemlorem ispemlorem ispemlorem ispem"
          />
        </ol>
      </div>
    </section>
  );
};
export default Resume;
