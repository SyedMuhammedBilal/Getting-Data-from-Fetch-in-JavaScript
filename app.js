console.log("Fetch Api");

async function fetchApi() {   
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(api, 'API')
    const json = await api.json()
    console.log(json, "json")
}

fetchApi()

async function postApi() {
    const api = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'CNC',
            body: 'bootcamp',
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    console.log(api, 'API')
    const json = await api.json()
    console.log(json, "json")
}

postApi()