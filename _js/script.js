const linksSocialMedia = {
  github: 'leandro-araujo-silva',
  youtube: '',
  facebook: '',
  instagram: '',
  twitter: ''
}

function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent = 'Matheus';

  //userName.textContent = 'Marcelo'

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

// Consumindo API do GitHub

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    //.then(data => alert(data.name))
    .then(date => {
      document.getElementById('userName').textContent = date.name
      // userName.textContent = date.name (assim tbm funciona)

      document.getElementById('school').textContent = date.bio

      userLink.href = date.html_url //(Para alterar o link)

      userImage.src = date.avatar_url //(Para mexer na imagem)
      userLogin.textContent = date.login
    })
}

getGitHubProfileInfos()
