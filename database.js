// database.js

const myProfile = {
  name: "Girija Singhal",
  email: "girijasinghal1607@gmail.com",
  education: [
    {
      degree: "Electronics and Communications Engineering",
      university: "Indian Institute of Information Technology, Design and Manufacturing, Jabalpur",
      year: "2022-2026"
    }
  ],
  skills: ["JavaScript", "Python", "React", "Node.js", "SQL"],
  workExperience: [
    {
      position: "Software Development Intern, (June 2025- July 2025)",
      description: "Developed RESTful APIs using Node.js and Express to calculate dynamic solar energy prices based on state-wise base rates, distance-based transmission charges, and energy storage premiums. Built a RoI & Payback Period API to help users estimate financial returns and breakeven timelines for solar plant investments using parameters like capex, opex, generation, and tarif",
    }
  ],
  projects: [
    {
      title: "BlogEase",
      description: "BlogEase is a MERN stack-powered platform that allows users to effortlessly create, edit, update, and delete blogs. With a sleek interface and real-time updates, it ensures a seamless blogging experience. Whether you're a writer or an editor, BlogEase makes content management simple and efficient.",
      links: {
        github: "https://github.com/girija1607/BlogEase",
      },
      technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose","React"]
    },
    {
      title: "PlanItNow",
      description: "A MERN stack-based event planning platform that streamlines the organization of birthdays, weddings, and parties. Users can enter their contact details (name, email, etc.) to receive personalized event plans. Features include seamless event scheduling, user-friendly interface, and efficient data management.",
      links: {
        github: "https://github.com/girija1607/PlanItNow-"
      },
      technologies: ["Node.js", "Express", "MongoDB","React"]
    }
  ],
  links: {
    github: "https://github.com/girija1607",
    linkedin: "https://www.linkedin.com/in/girija07/",
    Resume: "https://drive.google.com/file/d/1TbOM2hrCIPekntSVQ-ocuAuDbYceOZ8O/view?usp=sharing"
  }
};

module.exports = myProfile;