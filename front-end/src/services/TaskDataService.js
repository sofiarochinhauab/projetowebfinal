import http from "../http-common";

class TaskDataService {
    getAll() {
        return http.get("/task");
    }

    get(id) {
        return http.get(`/task/${id}`);
    }

    create(data) {
        return http.post("/task", data);
    }

    update(id, data) {
        return http.put(`/task/${id}`, data);
    }

}

export default new TaskDataService();