import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    starbucks,
    tesla,
    carrent,
    shopify,
    jobit,
    threejs,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Competative Programmer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Blockchain Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Placeholder Experience",
      company_name: "Placeholder Company",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Placeholder point 1",
        "Placeholder point 2",
        "Placeholder point 3",
        "Placeholder point 4",
      ],
    },
    {
      title: "Placeholder Experience 2",
      company_name: "Placeholder Company 2",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Placeholder point 1",
        "Placeholder point 2",
        "Placeholder point 3",
        "Placeholder point 4",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial: "Placeholder testimonial 1",
      name: "Placeholder Name",
      designation: "Placeholder Designation",
      company: "Placeholder Company",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial: "Placeholder testimonial 2",
      name: "Placeholder Name 2",
      designation: "Placeholder Designation 2",
      company: "Placeholder Company 2",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Placeholder Project 1",
      description: "Placeholder Project Description 1",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Placeholder Project 2",
      description: "Placeholder Project Description 2",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
        name: "Placeholder Project 2",
        description: "Placeholder Project Description 2",
        tags: [
          {
            name: "nextjs",
            color: "blue-text-gradient",
          },
          {
            name: "restapi",
            color: "green-text-gradient",
          },
          {
            name: "css",
            color: "pink-text-gradient",
          },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
      },
  ];
  
  export {
    services,
    technologies,
    experiences,
    testimonials,
    projects,
  };
  