function cameraBtnTouchendEventHandler(evt) {
    navigator.camera.getPicture(cameraSuccessCallback, cameraFailureCallback);
}

function cameraSuccessCallback(imageUrl) {
    console.log('success');
    showImage(imageUrl);
}

function cameraFailureCallback(msg) {
    showResult(msg);
}

function uploadBtnTouchendEventHandler(evt) {
    var imageUrl = getImageUrl();
    var ft = new FileTransfer();
    ft.upload(imageUrl, encodeURI(ENV.serverurl + "api/v1/images"), 
      uploadSuccessCallback, uploadFailureCallback);
}

function uploadSuccessCallback(result) {
    showResult(null, 'success');
}

function uploadFailureCallback(error) {
    showResult(error.code);
}

function showImagesBtnTouchendEventHandler(evt) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', ENV.serverurl + 'api/v1/images');
    xhr.onload = function() {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                var images = JSON.parse(xhr.response);
                showImageList(images.files);
            } else {
                showResult(xhr.status);
            }
        }
    };
    xhr.send();
}