const linksSocialMedia = {
  github: "davidcarvalho-dev",
  youtube: "UCAVChoWpm4gcOkOLRC2HcxA",
  facebook: "david.soares.522066",
  instagram: "david_s_carvalho",
  twitter: "#"
 }

 function changeLinksSocialMedia(){
   for (let li of socialLinks.children) {
     const social = (li.getAttribute('class'))

     li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
   }
 }


 changeLinksSocialMedia()

 function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
     userName.textContent = data.name
     userBio.textContent = data.bio
     userProfile.href = data.html_url
     userImage.src = data.avatar_url
     userLogin.textContent = data.login
    })

  }
 getGitHubProfileInfos()