
let theImport = new Promise((resolve,reject)=>{
    .ajax({
        url: './file.JSON',
        type: 'GET',
        success: (response,status) => {
            let theData = JSON.parse(response);

        }
    })
});

