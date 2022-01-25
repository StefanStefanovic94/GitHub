export const FetchData=(url)=>{
    return fetch(url)
    .then((response)=>response.json())
}
