import { FaLinkedin, FaGoogleScholar, FaRegIdBadge, FaGithub } from "react-icons/fa6";

export const profile = {
  name: `Li Zou`,
  headline: `Machine Learning Scientist`,
  email: `L.Zou@tudelft.nl`,
  location: `Delft, Netherlands`,
  profileImage: `/my-website/images/LiZou1.png`,
  links: [
    {
      name: `LinkedIn`,
      url: `https://www.linkedin.com/in/li-zou-83b367279`,
      icon: FaLinkedin
    },
    {
      name: `Google Scholar`,
      url: `https://scholar.google.com/citations?user=wDsWlTYAAAAJ&hl=en`,
      icon: FaGoogleScholar
    },
    {
      name: `Résumé`,
      url: `/my-website/pdf/sample-resume.pdf`,
      icon: FaRegIdBadge
    },
    {
      name: `Github`,
      url: `https://github.com/Li-Zou?tab=repositories`,
      icon: FaGithub
    }
  ],
  biography: `Hi! I’m currently a ML scientist at the Haptic Interface Technology Lab in Delft. My work focuses on developing AI models to classify materials and uncover the underlying mechanisms of tactile perception.
<div class="my-2"></div>

I hold a PhD in Computer Science from TU Delft, with a focus on Network Science and Machine Learning. My research was conducted within the Multimedia Computing Group, under the supervision of Dr. Huijuan Wang and Prof. Alan Hanjalic. 

<div class="my-2"></div>
I love working with AI and data. I enjoy using tools from mathematics, machine learning, deep learning and programming to analyze data, uncover patterns, and generate insights that support decision-making. 
This process excites me and continually motivates me to learn new tools and technologies. 

<div class="my-2"></div>
Outside of work, I enjoy running marathons, playing badminton, fitness training, and cycling, which inspire creativity and keep me energized. 

<div class="my-2"></div>
Thanks for visiting! Feel free to <a href="mailto:[L.Zou@tudelft.nl]" target="_blank" rel="noopener noreferrer">reach out</a> to connect.`
};