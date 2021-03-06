console.log("WayFAYer")

const closeBoxes = document.querySelectorAll('.close-box') || null;
const dialogueContainer = document.querySelector('.dialogueContainer') || null
const deleteModal = document.querySelector('.delete-modal') || null
const profileCity = document.querySelectorAll('.profile-city') || null
const profilePost = document.querySelectorAll('.profile-post') || null
const cities = document.querySelector('.cities-click') || null // profile and show-city pages
const postHeaderCount = document.querySelector('.profile-post-header') || null // profile and show-city pages

let count = 0;

if (cities !== null && postHeaderCount !== null ) {
    count = 0;
    profilePost.forEach(post => {
        post.hidden = false;
        count++
    })
    postHeaderCount.innerText = `Posts (${count})`
    
    cities.addEventListener('click', e => {
        profileCity.forEach(city => city.style.background = 'seashell')
        count = 0;
        profilePost.forEach(post => {
            post.hidden = false;
            count++
        })
        postHeaderCount.innerText = `Posts (${count})`
    })
}

if (profileCity !== null ) {
    profileCity.forEach(city => city.addEventListener('click', e => {
        profileCity.forEach(city => city.style.backgroundColor = 'seashell')
        city.style.backgroundColor = 'plum'
        const chosenCity = city.dataset.city
        count = 0;
        profilePost.forEach(post => {
            post.hidden = false;
            if (post.dataset.city !== chosenCity) {
                post.hidden = true
            } else {
                count++
            }
        })
        postHeaderCount.innerText = `Posts (${count})`
    })
    )
}

if (closeBoxes !== null) {
    closeBoxes.forEach(closeBox => {
        closeBox.addEventListener('click', e => {
            dialogueContainer.classList.add('hidden')
            if (deleteModal !== null && closeBox.dataset.modalshown === "true") {
                deleteModal.hidden = true
            } else {
                window.history.back()
            }
        })
    })
}

