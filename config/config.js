
import profile from './profile.png';
import { faGithub, faGlobe } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Abigail",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Abigail",
	description: "A Computer Engineer creating mobile apps and static websites.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://www.dropbox.com/s/je8jqwiktitets7/Abigail%20Moore%20Resume%2010-21.docx?dl=0",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I attended Colorado School of Mines from 2016 to 2021 studying Computer Science with a focus on Data Science, and worked as a data science intern at AudibleHealthAI from 2020 to 2021.",
		"The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I opensource my code from a place of empathy - for future developers, teammates, users, and with accessibility in mind. I enjoy modding video games, primarily Minecraft, and have also contributed to several open source tools to help others begin modding as well.",
		"When I’m not programming, I focus on my hobbies which are: rock climbing, skiing, scuba diving, reading scifi and fantasy, and playing D&D.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Data Science",
			description: "I create amchine learning models using Tensorflow in Python",
			icons: null,
		},
		{
			title: "Video Game Modding",
			description: "I create video game mods, primarily Minecraft using Java",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Better Than Wolves",
			description: "An extensive Minecraft mod focused on survival and technological progress. Made in collaboration with a team of several other developers.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/BTW-Community/BTW-Public",
				},
			]
		},
		{
			title: "Object Classifier",
			description: "A program for detecting and classifying objects in provided images. Developed in 2016 for my senior projects capstone class in high school.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/ammoore00/Object-Classifier",
				},
			]
		},
		{
			title: "Motion Tracker",
			description: "A motion tracker based on computer vision originally written in MatLab, then later adapted to use Python.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/ammoore00/Motion-Detector",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Feel free to reach out directly by email at abigailmmoore00@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:abigailmmoore00@gmail.com",
			isPrimary: true,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Abigail Moore | Java Developer | Data Scientist | Video Game Modder",
	description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "Abigail Moore",
	description: "Java Developer | Data Scientist | Video Game Modder",
	cards: [
		{
			title: "My GitHub",
			link: "https://github.com/ammoore00/",
		},
	]
}