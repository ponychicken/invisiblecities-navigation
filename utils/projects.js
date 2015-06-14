import projectsData from '../strings/projects'

for (let project of projectsData) {
  project.id = project.city.toLowerCase()
  project.image = `./${project.id}.jpg`
}

export default projectsData
