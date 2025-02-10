var selfEasyrtcid = "";
let users = [];


function addToConversation(who, msgType, content) {
    content = content.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    content = content.replace(/\n/g, '<br />');
    
    document.getElementById('conversation').innerHTML +=
        "<b>" + who + ":</b>&nbsp;" + content + "<br />";
}


function connect() {
    easyrtc.setPeerListener(addToConversation);
    easyrtc.setRoomOccupantListener(addOccupants);
    easyrtc.connect("easyrtc.instantMessaging", loginSuccess, loginFailure);
    
    setupSendButton();

    document.getElementById("iam").innerHTML = selfEasyrtcid;
}


function addOccupants(roomName, occupants, isPrimary) {
    users = occupants;    
}


function setupSendButton() {
    var sendButton = document.getElementById("sendButton");
        
    sendButton.onclick = function() {
        var text = document.getElementById('sendMessageText').value;

        if(text.replace(/\s/g, "").length === 0) {
            return;
        }
       
        addToConversation("Me", "message", text);
        document.getElementById('sendMessageText').value = "";

        for(var easyrtcid in users) {
            easyrtc.sendDataWS(easyrtcid, "message",  text);
        }
    }
}


function sendStuffWS(otherEasyrtcid) {
    easyrtc.sendDataWS(otherEasyrtcid, "message",  text);
}


function loginSuccess(easyrtcid) {
    selfEasyrtcid = easyrtcid;
    document.getElementById("iam").innerHTML = "I am " + easyrtcid;
}


function loginFailure(errorCode, message) {
    easyrtc.showError(errorCode, message);
}
