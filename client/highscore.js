var socket = io();

socket.on('connect', function (data) {
    console.log("I am connected");
});

socket.on('client:display', function (results) {

    var tbody = document.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    results.forEach(function (result) {
        var trlist = document.getElementsByTagName("tr");
        var tbodylist = document.getElementsByTagName("tbody");
        var rank = document.createElement('td');
        var ping = document.createElement('td');
        var download = document.createElement('td');
        var upload = document.createElement('td');
        var ip = document.createElement('td');
        rank.textContent = "1";
        ping.textContent = result.ping;
        download.textContent = result.download;
        upload.textContent = result.upload;
        ip.textContent = result.ip;
        var tr = document.createElement('tr');



        for(i = 0;i < trlist.length; i++){
            if (trlist[i].id == "pi"){
                trlist[i].appendChild(rank);
                trlist[i].appendChild(ping);
                trlist[i].appendChild(ip);
                tbodylist[i].appendChild(tr)
            }
            else if(trlist[i].id == "down"){
                trlist[i].appendChild(rank);
                trlist[i].appendChild(download);
                trlist[i].appendChild(ip);
                tbodylist[i].appendChild(tr)
            }
            else if(trlist[i].id == "up"){
                trlist[i].appendChild(rank);
                trlist[i].appendChild(upload);
                trlist[i].appendChild(ip);
                tbodylist[i].appendChild(tr)
            };
        };
    });
});
