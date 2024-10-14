import React from "react";
import Image from "next/image";

const Experience = () => {
    return (
        <div className="container bg-base dark:bg-dark_base">
            <div className="grid mb-20">
                <div className="py-19 text-black dark:text-dark_text" id="experience">
                    <div className="grid place-items-center">
                    <div className="font-extrabold text-5xl mb-10">Experience</div>
                    </div>
                    <hr />
                    
                    <div>
                        <div className="grid grid-cols-2">
                        <h1 className="font-bold text-xl ml-10 mt-5 ">Front-End Web Developer</h1>
                        <p className="flex justify-end mr-10 mt-5 ">May 2024 - present</p>
                        </div>
                        <p className="font-bold italic ml-10">UBC Faculty of Applied Science</p>

                            <ul className="list-disc list-inside ml-10">
                                <li> Developed and maintained 5 websites using PHP, CSS, Node.js, MariaDB, and Drupal  </li>
                                <li> Collaborated with developers, designers, and project managers using Agile methodologies to efficiently manage timelines </li>
                                <li> Streamlined workflow with Atlassian Confluence, Jira, and Git, following Software Development Life Cycle(SDLC) practices </li>
                                <li> Reviewed peer code submissions, implementing a feedback loop; resulted in improved code and expedited timelines</li>
                                <li> Led client meetings to ensure alignment with their needs throughout the website development process </li>
                                <li> Increased engagement across multiple faculty websites by 15% through targeted improvements</li>
                                <li> Developed customizable Twig templates for website content in Drupal, reducing website creation time</li>
                                <li> Technology Stack: PHP and Twig templates, CSS and TailwindCSS, Node.js, MariaDB, Drupal, Atlassian products</li>
                            </ul>

                    </div>

                    <div>

                        <h1 className="font-bold text-xl ml-10 mt-5 ">UBC BEST Design Team</h1>
                        <ul className="list-disc list-inside ml-10">
                                <li> Biomedical engineering team constructing a data-driven glove with a companion app and games for Multiple Sclerosis rehabilitation, focusing on hand dexterity and progress tracking</li>
                                <li> Secured second place at Simon Cox Competition 2024</li>
                        </ul>


                        <div className="grid grid-cols-2 mt-2">
                        <p className="font-bold italic ml-10">M2M: Co-Lead</p>
                        <p className="flex justify-end mr-10  ">September 2024 - present</p>
                        </div>

                            <ul className="list-disc list-inside ml-10">
                                <li> Overseeing the team's software and hardware development, and external relations</li>
                                <li> Implemented agile methodologies using Jira as co-lead, optimizing task tracking and team efficiency</li>
                            </ul>

                    </div>

                    <div>
                        <div className="grid grid-cols-2">
                        <p className="font-bold italic ml-10 mt-2">M2M: Software Engineer</p>
                        <p className="flex justify-end mr-10 ">October 2023 - present</p>
                        </div>

                            <ul className="list-disc list-inside ml-10">
                                <li> Contributed to a biomedical engineering team in constructing a data-driven glove with a companion app and games for Multiple Sclerosis rehabilitation, focusing on hand dexterity and proving progress tracking</li>
                                <li> Established a modular UI component library with React Native for the application, improving development speed</li>
                                <li> Enhanced functionality and resolved technical problems within the games coded in C# through Unity </li>
                                <li> Designed and created vectors and a background image for one of the games </li>
                                <li> Technology Stack: React Native, C# and used Unity3D application</li>
                            </ul>

                    </div>
                    <div>
                        <div className="grid grid-cols-2">
                        <h1 className="font-bold text-xl ml-10 mt-5 ">Student Developer</h1>
                        <p className="flex justify-end mr-10 mt-5 ">November 2023 - April 2024</p>
                        </div>
                        <p className="font-bold italic ml-10">UBC Computer Science Society</p>
                            <ul className="list-disc list-inside ml-10">
                            <li>Collaborating within a team to develop a website for UBC Tennis Circle Club</li>
                                <li>Programmed using Next.js and Typescript, with MongoDB for the database, and ChakraUI for UI framework</li>
                            </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Experience;