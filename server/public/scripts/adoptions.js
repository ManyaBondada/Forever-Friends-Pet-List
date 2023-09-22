const renderAdoptions = async () => {
    const response = await fetch('/adoptions')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {

        data.map(adoption => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${adoption.image})`

            const name = document.createElement('h3')
            name.textContent = adoption.name
            bottomContainer.appendChild(name)

            const breed = document.createElement('p')
            breed.textContent = 'Breed: ' + adoption.breed
            bottomContainer.appendChild(breed)

            const link = document.createElement('a')
            link.textContent = '< Read More >'
            link.setAttribute('role', 'button')
            link.href = `/adoptions/${adoption.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer) 
            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No adoptions available! All forever friends have found forever families :D'
        mainContent.appendChild(message)
    }
}

renderAdoptions()