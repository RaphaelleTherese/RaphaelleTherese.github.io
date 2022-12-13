const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React/ React Native',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services (AWS)',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Heroku',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 1,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'ElasticSearch',
    competency: 1,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'SQL/T-SQL/MySQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Express.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'D3',
    competency: 1,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Git/Github',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Numpy',
    competency: 2,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 2,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Pandas',
    competency: 2,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 2,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 2,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Go',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'jQuery',
    competency: 3,
    category: ['Javascript', 'Web Development'],
  },
  {
    title: '.NET',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Arduino',
    competency: 3,
    category: ['Tools', 'Other Technology'],
  },
  {
    title: 'PHP',
    competency: 3,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'MIPS',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Azure',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Unity',
    competency: 3,
    category: ['Tools', 'Other Technology'],
  },
  {
    title: 'MapboxJS',
    competency: 3,
    category: ['Javascript'],
  },
  {
    title: 'Verilog',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Jenkins',
    competency: 1,
    category: ['Tools'],
  },
  {
    title: 'BitBucket',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Trello/Taiga/Jira',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Adobe Suite',
    competency: 2,
    category: ['Design'],
  },
  {
    title: 'Bootstrap',
    competency: 4,
    category: ['Web Development'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
