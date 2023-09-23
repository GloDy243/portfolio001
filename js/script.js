//   Typing annimation
var typed = new Typed(".typing",{
    strings : ["Front-End Developper", "Web developper", "Web Designer", "Javascript Developper"],
    typeSpeed : 100,
    BackSpeed : 60,
    loop: true
})
/* Aside */

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll("section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function(){
            removeBackSection()
            for(let j = 0; j<totalNavList; j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    addBacksection(j);
                    //allSection[j].classList.add("back-section")
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this)
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn()
            }
        })
    }
    function removeBackSection(){
        for(let i = 0; i<totalSection; i++){
            allSection[i].classList.remove("back-section")
        }
    }
    function addBacksection(num){
        allSection[num].classList.add("back-section")
    }
    function showSection(element){
        for(let i = 0; i< totalSection; i++){
            allSection[i].classList.remove("active")
        }
        const target = element.getAttribute("href").split("#")[1]
        document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element){
        for(let i=0; i<totalNavList; i++){
            for(let i = 0; i < totalNavList; i++){
                navList[i].querySelector("a").classList.remove("active")
                const target = element.getAttribute("href").split("#")[1];
                if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                    navList[i].querySelector("a").classList.remove("active")
                }
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function(){
        const sectionIndex = this.getAttribute("data-section-index");
        //console.log(sectionIndex)
        showSection(this)
        updateNav(this)
        removeBackSection()
        addBacksection(sectionIndex)
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () =>{
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i< totalSection; i++){
                allSection[i].classList.toggle("open");
            } 
        }



    /*
        emailjs.init("user_your_emailjs_user_id"); // Remplacez "user_your_emailjs_user_id" par votre ID utilisateur Email.js

        function sendEmail() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            emailjs.send("your_emailjs_service_id", "your_emailjs_template_id", {
                name: name,
                email: email,
                subject: subject,
                message: message,
            }).then(
                function (response) {
                    console.log("E-mail envoyé avec succès", response);
                },
                function (error) {
                    console.log("Erreur lors de l'envoi de l'e-mail", error);
                }
            );
        }*/