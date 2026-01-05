const personalityInfo = {

  ISTJ: {
    title: "The Inspector",
    image: "https://i.pinimg.com/736x/4a/c9/c9/4ac9c9fb2b9be3bee7d3fb126164d8b6.jpg",
    description: "ISTJs are responsible, serious, and practical individuals who value discipline, structure, and tradition.",
    strengths: [
      "Highly dependable",
      "Strong sense of duty",
      "Detail-oriented",
      "Logical and systematic"
    ],
    opportunities: [
      "Administration",
      "Law enforcement",
      "Accounting",
      "Quality control"
    ]
  },

  ISFJ: {
    title: "The Protector",
    image:"https://i.pinimg.com/1200x/03/49/61/0349611bad7a8c4026a4d9f6ec9dc9b2.jpg",
    description: "ISFJs are caring, loyal, and hardworking. They focus on helping others and maintaining harmony.",
    strengths: [
      "Compassionate",
      "Reliable",
      "Excellent memory",
      "Patient and supportive"
    ],
    opportunities: [
      "Healthcare",
      "Teaching",
      "Social work",
      "Customer service"
    ]
  },

  INFJ: {
    title: "The Advocate",
    description: "INFJs are insightful and idealistic, driven by deep values and a desire to help others.",
    strengths: [
      "Visionary thinking",
      "Strong empathy",
      "Creative problem solving",
      "Deep intuition"
    ],
    opportunities: [
      "Psychology",
      "Counseling",
      "Writing",
      "Non-profit work"
    ]
  },

  INTJ: {
    title: "The Architect",
    image:"https://i.pinimg.com/736x/eb/aa/c1/ebaac14fb1e1cf9f301080b7efd446eb.jpg",
    description: "INTJs are strategic thinkers who enjoy planning, logic, and long-term goals.",
    strengths: [
      "Highly analytical",
      "Independent",
      "Strategic planning",
      "Self-confident"
    ],
    opportunities: [
      "Engineering",
      "Data science",
      "Research",
      "Technology leadership"
    ]
  },

  ISTP: {
    title: "The Virtuoso",
    image:"https://i.pinimg.com/736x/dd/f2/f6/ddf2f6d054aca37c8459caa7e0d8199c.jpg",
    description: "ISTPs are curious and practical problem solvers who enjoy hands-on work.",
    strengths: [
      "Adaptable",
      "Calm under pressure",
      "Technical skills",
      "Logical reasoning"
    ],
    opportunities: [
      "Mechanical engineering",
      "Automobile industry",
      "IT support",
      "Forensics"
    ]
  },

  ISFP: {
    title: "The Artist",
    image:"https://i.pinimg.com/736x/6a/78/ce/6a78cedd1f0eb584991d3f6ee61c0c06.jpg",
    description: "ISFPs are gentle, creative, and sensitive individuals who value personal freedom.",
    strengths: [
      "Artistic sense",
      "Empathetic",
      "Flexible",
      "Non-judgmental"
    ],
    opportunities: [
      "Design",
      "Music",
      "Photography",
      "Creative arts"
    ]
  },

  INFP: {
    title: "The Mediator",
    image:"https://i.pinimg.com/736x/4f/9e/de/4f9edea55ccded44fbf641ec041788f5.jpg",
    description: "INFPs are idealistic, empathetic, and guided by strong personal values.",
    strengths: [
      "Deep empathy",
      "Creative writing",
      "Open-minded",
      "Strong moral compass"
    ],
    opportunities: [
      "Writing",
      "Psychology",
      "Human resources",
      "NGO work"
    ]
  },

  INTP: {
    title: "The Thinker",
    image:"https://i.pinimg.com/736x/3a/68/1f/3a681f6c8cca54d1cf2c863ed7cb0608.jpg",
    description: "INTPs are logical thinkers fascinated by ideas, systems, and theories.",
    strengths: [
      "Analytical mind",
      "Innovative thinking",
      "Problem solving",
      "Objective reasoning"
    ],
    opportunities: [
      "Software development",
      "Research",
      "Academics",
      "Artificial Intelligence"
    ]
  },

  ESTP: {
    title: "The Dynamo",
    image:"https://i.pinimg.com/736x/1f/af/4f/1faf4f3ebd24832b6f738df45ff44738.jpg",
    description: "ESTPs are energetic and action-oriented individuals who thrive in fast-paced environments.",
    strengths: [
      "Bold decision making",
      "Adaptability",
      "Excellent communication",
      "Risk-taking ability"
    ],
    opportunities: [
      "Sales",
      "Marketing",
      "Entrepreneurship",
      "Sports management"
    ]
  },

  ESFP: {
    title: "The Entertainer",
    image:"https://i.pinimg.com/736x/ae/23/d5/ae23d5de2ff3e7bc411a5c092f2e6a1e.jpg",
    description: "ESFPs are fun-loving, enthusiastic, and enjoy making others happy.",
    strengths: [
      "Positive energy",
      "Strong social skills",
      "Creativity",
      "Spontaneity"
    ],
    opportunities: [
      "Entertainment",
      "Event management",
      "Hospitality",
      "Public relations"
    ]
  },

  ENFP: {
    title: "The Campaigner",
    image:"https://i.pinimg.com/736x/cf/c0/f3/cfc0f3ac606c9b1af24119e42234eb24.jpg",
    description: "ENFPs are enthusiastic, imaginative, and full of ideas.",
    strengths: [
      "Creative thinking",
      "Strong communication",
      "Optimism",
      "Emotional intelligence"
    ],
    opportunities: [
      "Content creation",
      "Marketing",
      "Startups",
      "Teaching"
    ]
  },

  ENTP: {
    title: "The Debater",
    image:"https://i.pinimg.com/736x/ff/0f/d0/ff0fd08ebdca708a868b13cd723c5e57.jpg",
    description: "ENTPs are quick-witted and enjoy exploring possibilities and debates.",
    strengths: [
      "Innovative mindset",
      "Leadership skills",
      "Problem solving",
      "Adaptability"
    ],
    opportunities: [
      "Product management",
      "Startups",
      "Consulting",
      "Media"
    ]
  },

  ESTJ: {
    title: "The Executive",
    image: "https://i.pinimg.com/736x/c6/b1/0c/c6b10cc57c483fcdaac114f2f072a9f8.jpg",
    description: "ESTJs are natural leaders who value structure, efficiency, and responsibility.",
    strengths: [
      "Strong leadership",
      "Highly organized",
      "Reliable",
      "Decisive"
    ],
    opportunities: [
      "Business management",
      "Government services",
      "Project management",
      "Entrepreneurship"
    ]
  },

  ESFJ: {
    title: "The Consul",
    image:"https://i.pinimg.com/736x/21/0f/64/210f64253162445149f34ad151482f87.jpg",
    description: "ESFJs are warm, social, and deeply care about others’ well-being.",
    strengths: [
      "Team-oriented",
      "Supportive",
      "Organized",
      "Strong communication"
    ],
    opportunities: [
      "Human resources",
      "Teaching",
      "Healthcare",
      "Community leadership"
    ]
  },

  ENFJ: {
    title: "The Protagonist",
    image:"https://i.pinimg.com/736x/37/21/dc/3721dcf8df5bc5fbb470d3966e1e5cec.jpg",
    description: "ENFJs are charismatic leaders who inspire and motivate others.",
    strengths: [
      "Inspirational leadership",
      "Empathy",
      "Public speaking",
      "Conflict resolution"
    ],
    opportunities: [
      "Leadership roles",
      "Coaching",
      "Politics",
      "Social entrepreneurship"
    ]
  },

  ENTJ: {
    title: "The Commander",
    image:"https://i.pinimg.com/736x/8e/19/79/8e1979a4604039a03831b531069237b1.jpg",
    description: "ENTJs are bold, confident, and excel at organizing people and systems.",
    strengths: [
      "Strategic leadership",
      "High confidence",
      "Efficient planning",
      "Goal-oriented"
    ],
    opportunities: [
      "Corporate leadership",
      "Business strategy",
      "Startups",
      "Executive management"
    ]
  }

};
