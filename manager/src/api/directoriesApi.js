const basePath = "http://localhost:3001/directories/"

class DirectoriesApi {
    static getAll() {
        return fetch(`${basePath}`)
        .then(response => {
            return response.json();
        })
        .catch(error => {
            return error;
        });
    } 

    static add(newDirectory) {
        const request = new Request(`${basePath}`, {
                method: 'POST',
                body: JSON.stringify(newDirectory),
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

    static update(newDirectory) {
        const request = new Request(`${basePath}${newDirectory.id}`, {
                method: 'PUT',
                body: JSON.stringify(newDirectory),
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

export default DirectoriesApi