import { useEffect, useState } from "react";
import services from "../../../public/services";
import Service from "./Service";
import Testimonial from "./Testimonial";

const About = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
      });
  }, []);

  return (
    <div className="about active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>
      <section>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          sunt laudantium inventore neque optio, animi quasi cupiditate.
          Dolores, eaque aliquam.
        </p>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tenetur
          asperiores voluptatem illo eaque quasi. Dolores harum, quae placeat
          tenetur quo temporibus voluptate ratione natus alias facere nostrum?
          Repellat, commodi.
        </p>
      </section>

      {/* services */}
      <section className="service">
        <h3 className="h3">What I'm Doing</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      {/* testimonials */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}
        </ul>
      </section>

      {/* clients logo */}
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="/images/logo-1-color.png" alt="" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="/images/logo-2-color.png" alt="" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="/images/logo-3-color.png" alt="" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="/images/logo-4-color.png" alt="" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="/images/logo-5-color.png" alt="" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="/images/logo-6-color.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
