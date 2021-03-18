(function() {
    function getAllRooms(){
        var roomNameList = [];
        var grRoom = new GlideRecord("cmdb_ci_computer_room");
        grRoom.query();
        while (grRoom.next()){
            roomNameList.push(grRoom.name.getValue());
        }
        roomNameList.sort();
        data.roomNameList = roomNameList;
    }
    if (input && input.getRooms){
        getAllRooms();
    }
})();