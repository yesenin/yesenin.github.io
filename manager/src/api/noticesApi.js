const basePath = "http://localhost:3001/notices/"

class NoticesApi {
    static getAll() {
        return fetch(`${basePath}`)
        .then(response => {
            return response.json();
        })
        .catch(error => {
            return error;
        });
    }

    static add(newNote) {
        const request = new Request(`${basePath}`, {
                method: 'POST',
                body: JSON.stringify(newNote),
                headers: {
                    'Content-Type': 'application/json'
                  }
            }
        )
        return fetch(request)
        .then(response => {
            return response.json();
        })
        .catch(error => {
            return error;
        });
    }

    static update(newNote) {
        const request = new Request(`${basePath}${newNote.id}`, {
                method: 'PUT',
                body: JSON.stringify(newNote),
                headers: {
                    'Content-Type': 'application/json'
                  }
            }
        )
        return fetch(request)
        .then(response => {
            return response.json();
        })
        .catch(error => {
            return error;
        });
    }

    static delete(id) {
        const request = new Request(`${basePath}${id}`, {
            method: 'DELETE'
        }
        )
        return fetch(request)
        .then(response => {
            return response.json();
        })
        .catch(error => {
            return error;
        });
    }
}

export default NoticesApi