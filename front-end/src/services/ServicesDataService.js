import http from "../http-common";

class ServicesDataService {
    getAll() {
        return http.get("/service");
    }

    get(id) {
        return http.get(`/service/${id}`);
    }

    create(data) {
        return http.post("/service", data);
    }

    update(id, data) {
        return http.put(`/service/${id}`, data);
    }

}

export default new ServicesDataService();