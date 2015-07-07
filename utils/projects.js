import projectsData from '../data/projects'

for (let i = 0; i < projectsData.length; i++) {
  let project = projectsData[i]
  project.id = project.city.toLowerCase()
  project.image = `./${project.id}.jpg`
  project.path = project.author.split(' ')[0].toLowerCase()
  project.specialRotate = project.specialRotate || false
  project.landscape = project.landscape || false
}

export default projectsData
