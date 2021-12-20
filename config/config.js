
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
	description: "A data scientist, java developer, and game designer.",
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
		"I enjoy modding video games, primarily Minecraft, and have also contributed to several open source tools to help others begin modding as well. I have also created several machine learning models leveraging computer vision for things such as motion tracking and object recognition. All of my projects are available on my github profile, while a curated selection are linked in the projects section below.",
		"All of my code is provided under an open license to help future developers learn and to encourage growth in the tech community.",
		"When I’m not programming, I focus on my other hobbies which are: rock climbing, skiing, scuba diving, reading scifi and fantasy, and playing D&D.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Data Science",
			description: "I create machine learning models using Tensorflow in Python",
			icons: null,
		},
		{
			title: "Game Design",
			description: "I create mods and standalone games, primarily using Java and C++, under the pseudonym Dawnraider.",
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
			title: "Better Terrain",
			description: "An addon for the Better Than Wolves Minecraft mod adding a custom world generator. Written using OpenSimplex2 noise by KDotJPEG.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/BTW-Community/Better-Terrain-Addon",
				},
			]
		},
		{
			title: "Optical Character Recognition",
			description: "A model written in python using tensorflow to recognize a wide variety of alphanumeric characters. Trained on Extended MNIST dataset.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/ammoore00/machine-learning-final-project",
				},
			]
		},
		{
			title: "Object Classifier",
			description: "A program for detecting and classifying objects in provided images. Developed in 2016 for my high school senior projects capstone class.",
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
	title: "Abigail Moore | Java Developer | Data Scientist | Game Designer",
	description: "I am a data scientist, java developer, and game designer.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "Abigail Moore",
	description: "Java Developer | Data Scientist | Game Designer",
	cards: [
		{
			title: "GitHub",
			link: "https://github.com/ammoore00/",
		},
		{
			title: "Email Me",
			link: "mailto:abigailmmoore00@gmail.com",
		},
		{
			title: "Website Source",
			link: "https://github.com/ammoore00/portfolio",
		},
	]
}