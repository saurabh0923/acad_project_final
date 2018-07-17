function getdata(){
    var key = document.getElementById("search").value;
    let url = `http://127.0.0.1:3000/${key}`;
    document.querySelector("body").background = "";

fetch(url)
.then(res => res.json())
.then((out) => {
    for(let i=0; i<5; i++) {
        var jsonurl = out.collection.items[i].href;
        fetch(jsonurl)
            .then(res => res.json())
            .then((image) => {
                var pic = image[0];
                console.log(pic);

                $(".container4").hide();
                $("#result").append(`<div class="jumbotron" id="id_${i}"> \
                <div class="row">
                    <div class="col-xs-12 col-sm-12" style="text-align:center; margin:0;">
                       <img src=${pic} width=50% height=100%>
                    </div>
                </div>
            </div>`);
            })
            .catch(err => {throw err});
    }
})
.catch(err => { throw err });
}