import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I am currently a high school student. I started gaining interest in
            coding since my freshman year of high school. I went to Rooted School,
            tried many courses in tech such as 3D printing, Front end web design,
            Email marketing, and inbound sales. However, the only course that has
            truly spiked my interest is front end web design. I have a lot to learn,
            and I still have not figured out what I want to do with my life, but I
            hope, the future me, chooses a good career or anything that she has in
            mind in the future.
            </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">High School</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Email Marketing</h3>
              <div className="subheading mb-3">Certified</div>
              <p>
                Email Marketing is a course in Hubspot that teaches you all the
                fundemental strategies and points to make sure you can write a high
                professional email, and its outlines that all improve your email
                marketing strategies. I took this course in my sophomore year with
                a score of 83%. My strategies in sending email as a highschool student
                has imporved a lot since I took this course.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2019 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Inbound Sales</h3>
              <div className="subheading mb-3">Certified</div>
              <p>
                The Inbound Sales course in hubspot takes you to the journey of
                connecting with your buyer, and improving your overall performance
                in sales. It uses a Sales methodology that it is now used across
                many companies nowadays. I also took this course in my sophomore
                year, with a score of 90%. After this course, my abilities of
                understanding and connecting with people have been a lot better.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Feburary 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">3D printing</h3>
              <div className="subheading mb-3">Autodesk Inventor Certified.</div>
              <p>
                Autodesk Inventor a design application that is intedended for
                3D mechanical designs, which holds a lot of features for simulation
                and visualization for your design. I took this course in the first months
                of  Sophomore year, earning my Certification by the end of 2018.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August - December 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Front End Web</h3>
              <div className="subheading mb-3">Treehouse Certified.</div>
              <p>
                This course in Treehouse teaches the basics of coding such as
                HTML, CSS, SASS, Javascript, and other Languages that by the end
                it is easy to design our own websites and make it interactive. I took this
                course in my Freshman year, and took an insterest in coding ever since.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2017 - May 2018</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>



          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Rooted School</h3>
              <div className="subheading mb-3">Only Tech based school</div>
              <p>GPA: tbd</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2017 - May 2021</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>


          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Intern at Electric Girls
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Intern at Lucid
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
               Student Teacher
            </li>

          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Hobbies</h2>
          <p>
            I do not like going out when it is around the neighborhood,
            but I appreciate going out of town with my family every once
            in a while. I love traveling and visiting new places. I also
            enjoy going to the theater with my friends and enjoy the
            discussions after the movies.
          </p>
          <p className="mb-0">
            When I am at home I mostly enojoy watching shows in Netflix, the
            most recent recommendations from my friends. I love having debates
            with them about different scenes. I also enjoy reading books, doing
            origami, listening to music on loud speakers when no one is at home,
            and having fun with my cousin onces once in a while.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Inbound Sales - Hubspot Certified.
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Email Marketing- Hubspot Certified.
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              3D Printing - Autodesk Inventor Certified.
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Front End Web Design - Treehouse Certified.
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
