const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
    constructor() { 
        super();
        this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/"
    }

    getTracksForHome() { 
        return this.get("tracks")
    }

    getAuthor(authorId) {
        return this.get(`author/${authorId}`)
    }

    getTrackById(id) {
        return this.get(`track/${id}`)
    }

    getTrackModulesById(id) {
        return this.get(`track/${id}/modules`)
    }

    incrementTrackViews(id) {
        return this.patch(`track/${id}/numberOfViews`);
    }
}

module.exports = TrackAPI;