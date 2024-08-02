import { GiCalendar, GiClawSlashes, GiMailbox } from "react-icons/gi";
import { MdLocalPhone } from "react-icons/md";
import { TiLocation } from "react-icons/ti";

const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/images/avatar-1.png" alt="" width={80} />
        </figure>
        <div className="info-content">
          <h1 className="name">Darshan Bane</h1>
          <p className="title">Frontend & Wordpress Developer</p>
        </div>
        <button className="info_more-btn">
          <span>Show Contacts</span>
          <GiClawSlashes />
        </button>
      </div>

      {/* contact info */}
      <div className="sidebar-info_more">
        <hr className="separator2" />
      </div>

      <ul className="contact-list">
        <li className="contact-item">
          <div className="icon-box">
            <GiMailbox />
          </div>

          <div className="contact-info">
            <p className="contact-title">Email</p>
            <a
              href="mailto://darshanbane253@gmail.com"
              className="contact-link"
            >
              darshanbane253@gmail.com
            </a>
          </div>
        </li>

        <li className="contact-item">
          <div className="icon-box">
            <MdLocalPhone />
          </div>

          <div className="contact-info">
            <p className="contact-title">Phone</p>
            <a href="tel://923456789" className="contact-link">
              923456789
            </a>
          </div>
        </li>

        <li className="contact-item">
          <div className="icon-box">
            <GiCalendar />
          </div>

          <div className="contact-info">
            <p className="contact-title">DOB</p>
            <time dateTime="2002-03-14">March 14, 2002</time>
          </div>
        </li>

        <li className="contact-item">
          <div className="icon-box">
            <TiLocation />
          </div>

          <div className="contact-info">
            <p className="contact-title">Location</p>
            <address>Mumbai, Maharashtra</address>
          </div>
        </li>
      </ul>
    </aside>
  );
};
export default Aside;
