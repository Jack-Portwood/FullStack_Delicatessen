class Request {

    get(url){
        return fetch(url)
        .then((res) => (res.json()));
        
    }

    delete(url){
        return fetch(url, {
            method: "Delete",
            headers:{"Content-Type": "application/json"}
        })
    }

    post(url, payload){
        return fetch(url, {
          headers: { "Content-Type": "application/json"},
          body:JSON.stringify(payload)
        });
    }
}

export default Request;