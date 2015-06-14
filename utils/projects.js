import projectsData from '../strings/projects'

for (let project of projectsData) {
  project.id = project.city.toLowerCase()
  project.image = `./${project.id}.jpg`
  project.path = project.author.split(' ')[0].toLowerCase()
}

export default projectsData
