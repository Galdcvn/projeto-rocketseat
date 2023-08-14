function togglemode() {
    const html = document.documentElement
    const img = document.querySelector("#hc1 img")
    const arroba = document.querySelector("#hc1 .phc1")
    const gitHubList = document.querySelector(".li1 a")
    const instagramList = document.querySelector(".li2 a")
    const youtubeList = document.querySelector(".li3 a")
    const linkedinList = document.querySelector(".li4 a")
        const gitHubIcon = document.querySelector(".a1")
    const instagramIcon = document.querySelector(".a2")
    const youtubeIcon = document.querySelector(".a3")
    const linkedinIcon = document.querySelector(".a4")
        
    html.classList.toggle("light")
        
    if(html.classList.contains("light")) {
        img.setAttribute("src", "assets/nana.png")
        arroba.textContent= "@mariana.jsl"
        
        gitHubList.setAttribute("href", "https://github.com/")
        instagramList.setAttribute("href", "https://www.instagram.com/mariana.jsl/")
        youtubeList.setAttribute("href", "https://www.youtube.com/@mariana.jsl3")
        linkedinList.setAttribute("href", "https://www.linkedin.com/in/mariana-leal-b6aa80266/")

        gitHubIcon.setAttribute("href", "https://github.com/")
        instagramIcon.setAttribute("href", "https://www.instagram.com/mariana.jsl/")
        youtubeIcon.setAttribute("href", "https://www.youtube.com/@mariana.jsl3")
        linkedinIcon.setAttribute("href", "https://www.linkedin.com/in/mariana-leal-b6aa80266/")

    } else {
        img.setAttribute("src", "assets/avatar.png")
        arroba.textContent= "@galdcvn"
        
        gitHubList.setAttribute("href", "https://github.com/Galdcvn")
        instagramList.setAttribute("href", "https://www.instagram.com/galdcvn/")
        youtubeList.setAttribute("href", "https://www.youtube.com")
        linkedinList.setAttribute("href", "https://www.linkedin.com/in/caio-vn-galdino/")

        gitHubIcon.setAttribute("href", "https://github.com/Galdcvn")
        instagramIcon.setAttribute("href", "https://www.instagram.com/galdcvn/")
        youtubeIcon.setAttribute("href", "https://www.youtube.com")
        linkedinIcon.setAttribute("href", "https://www.linkedin.com/in/caio-vn-galdino/")
    }

}
        
