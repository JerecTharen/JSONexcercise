
let theImport = new Promise((resolve,reject)=>{
    $.ajax({
        url: './file.JSON',
        type: 'GET',
        success: (response,status) => {
            resolve(response);
            },
        error: (error) => {
            reject(error);
            }
    });
});

theImport.then((theResponse) => {
    let theData = JSON.parse(theResponse);
    for (let i = 0; i < $('.card').length; i++) {
        $('.title'[i]).html(theData.courses[i].name);
        $('.desc'[i]).html(theData.courses[i].desc);
    }
});

