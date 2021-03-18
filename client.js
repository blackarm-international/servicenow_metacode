function() {
    function getData(){
        var roomNameList;
        serverLink.data.getRooms = true;
        serverLink.server.update().then(function() {
            serverLink.data.getRooms = false;
            roomNameList = serverLink.data.roomNameList;
            exportData("roomNameList", roomNameList);
        });
    }
    function exportData(variableName, data){
        var output = document.getElementById("test");
        output.innerHTML += "var " + variableName + " = ";
        output.innerHTML += JSON.stringify(data);
        output.innerHTML += "\n";
    }
    var output = document.getElementById("test");
    var serverLink = this;
    getData()
}