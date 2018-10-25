
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

let titles = document.getElementsByClassName('title');
let descriptors = document.getElementsByClassName('desc');
let images = document.getElementsByTagName('img');
theImport.then((theResponse) => {
    let theData = JSON.parse(theResponse);
    // $.each($('.title'), function () {
    //     this.html(theData.courses[0])
    // })

    for (let i = 0; i < 2; i++){
        titles[i].innerHTML = theData.courses[i].name;
        descriptors[i].innerHTML = theData.courses[i].desc;
        images[i].setAttribute('src',`${theData.courses[i].img}`);
    }
});

