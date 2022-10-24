export default class NotImplementedException extends Error {
    constructor (message){
        super(`The "${message}" finction was not implememted`)
        this.name = "NotImplementedException"
    }
}