const apiURL='http://localhost:7777';
export default {
    videoReq:{
        get:(sortBy,searchTerm,filterBy)=>{
             return fetch(`${apiURL}/video-request?sortBy=${sortBy}&searchTerm=${searchTerm}&filterBy=${filterBy}`)
            .then((blob)=>blob.json())
        },
        post:(formData)=>{
            return fetch(`${apiURL}/video-request`,{method:'POST',body:formData})
            .then((bolb)=>bolb.json())    
        },
        update:(id, status, resVideo)=>{
           return fetch(`${apiURL}/video-request`,{
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({ id, status, resVideo})
              }).then(blob=>blob.json())
        },
        delete:(id)=>{
            return fetch(`${apiURL}/video-request`,{
                method:'DELETE',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({ id})
              }).then(blob=>blob.json())
        },
    },
    votes:{
        update:(id,vote_type,user_id)=>{
            return fetch(`${apiURL}/video-request/vote`,{
                method:'PUT',
                headers:{'content-Type':'application/json'},
                body:JSON.stringify({id,vote_type,user_id})
              }).then(blob=>blob.json())
        }
    }
}