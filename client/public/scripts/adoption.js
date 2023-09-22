const renderAdoption = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())

    const response = await fetch('/adoptions')
    const data = await response.json()

    const adoptionContent = document.getElementById('gift-content')

    let adoption

    adoption = data.find(adoption => adoption.id === requestedID)

    if (adoption) {
        document.getElementById('image').src = adoption.image
        document.getElementById('name').textContent = adoption.name
        document.getElementById('breed').textContent = 'Breed: ' + adoption.breed
        document.getElementById('location').textContent = 'Location: ' + adoption.location
        document.getElementById('description').textContent = adoption.description
        document.title = `ForeverFriends - ${adoption.name}`
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No adoptions available'
        adoptionContent.appendChild(message)   
    }
}

renderAdoption()