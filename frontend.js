const response = await fetch("http://example.org/post", {
    method:"POST",
    body:JSON.stringify({username:"Victoria"}),
    headers:{
        "Content-Type":"application/json"
    }
});