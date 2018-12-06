'use strict'
//routed to Postman site
//CRUD practice
let birds = [{ type: "Blue Bird", size: "small", weight: "1lb" }, { type: "Pelican", size: "large", weight: "5lb" }]
class BirdController {
    birdget({ request, response }) {
        response.send(birds)
    }
    birdcreate({ request, response }) {
        const birdInfo = request.post()
        birds.push(birdInfo)
        response.send(birds)
        // console.log(birds)
    }
    birddelete({ request, response }) {
        const body = request.post()
        birds = birds.filter((eachItem) => {
            return eachItem.size !== body.size

        })
        console.log(birds)
        response.send('item deleted')
    }
}

module.exports = BirdController
