/**
 * Created by root on 6/14/17.
 */
//
import "../css/dialog.less";

function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

function Dialog(button, width, height, delay ,event, title, serverUrl, openFunction, closeFunction){
    if(!(this instanceof Dialog)){
        return new Dialog(button, width, height, delay, title, serverUrl, openFunction, closeFunction);
    }
    var self = this;
    this.button = button;
    if(button == null){
        window.addEventListener('keypress', function(e){
            if(e.which == 13){
                self.createModal();
                self.showModal();
            }
        });
        this.id = 'modal';
        this.modalId = document.getElementById(this.id);
    }else {
        this.button.addEventListener(event, function(e) {
            self.createModal();
            self.showModal();
            e.preventDefault();
        });
        this.id = button.dataset.dialogue;
        this.modalId = document.getElementById(this.id);
    }
    this.width = width;
    this.height = height;
    this.modalHeadBlock;
    this.modalBodyBlock;
    this.modalCloseBlock;
    this.modalTitleBlock;
    this.title;
    this.data;
    this.openCallback = openFunction;
    this.closeCallback = closeFunction;
    this.serverUrl = serverUrl;
    this.delay = delay;
    this.title = title;
    this.DOMCreated = false;
    this.dataLoaded = false;
    this.loadData();
}

Dialog.prototype = {

    constructor: Dialog,

    createModalWrapper : function(){
        if(!document.getElementById(this.id)){
            this.modalId = document.createElement("div");
            this.modalId.setAttribute('id', this.id);
            document.body.appendChild(this.modalId);
        }
    },

    createModalClose : function () {
        var self = this;
        this.modalCloseBlock = document.createElement('span');
        this.modalCloseBlock.setAttribute('id', 'close');
        this.modalCloseBlock.appendChild(document.createTextNode('X'));
        this.modalCloseBlock.onclick = function () {
            self.closeCallback();
        }
    },

    createModalTitle : function () {
        this.modalTitleBlock = document.createElement('h2');
        this.title = document.createTextNode(this.title);
        this.modalTitleBlock.appendChild(this.title);
    },

    createModalHead : function (){
        this.modalHeadBlock = document.createElement('div');
        this.modalHeadBlock.setAttribute('class', 'modal-head');
        this.modalHeadBlock.appendChild(this.modalTitleBlock);
        this.modalHeadBlock.appendChild(this.modalCloseBlock);
        this.modalId.appendChild(this.modalHeadBlock);
    },

    createModalBody : function(){
        this.modalBodyBlock = document.createElement('div');
        this.modalBodyBlock.setAttribute('id', 'content');
        this.modalId.appendChild(this.modalBodyBlock);
    },

    displayData : function(json) {
        var string = '';
        for(var prop in json){
            string += '<p>Vehicle Model: '+prop+'\nPrice: '+json[prop]+'</p>';
        }
        document.getElementById('content').innerHTML = string;
    },

    loadData : function () {
        var request = new XMLHttpRequest();
        var self = this;
        request.onreadystatechange = function() {
            if (this.readyState == 4) {
                self.data = JSON.parse(request.responseText);
                if(!isEmpty(self.data)){
                    self.dataLoaded = true;
                }
            }
        }
        request.open("GET", this.serverUrl, true);
        request.send();
    },

    createModal : function(){
        if (!this.DOMCreated) {
            this.createModalWrapper();
            this.createModalClose();
            this.createModalTitle();
            this.createModalHead();
            this.createModalBody();
            this.displayData(this.data);
            var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            this.modalId.style.transition = 'opacity ' + this.delay + 's linear .2s';
            this.modalId.style.width = this.width;
            this.modalId.style.left = screenWidth / 2 - this.width / 2;
            this.modalId.style.height = this.height;
            this.DOMCreated = true;
        }
    },

    showModal : function () {
        if(this.dataLoaded){
            if(typeof this.openCallback == 'function'){
                this.openCallback();
            }else{
                this.modalId.style.opacity = 1;
            }
        }else{
            alert('данные из сервера не полученны');
        }
    },
};

var dialogue = new Dialog(
    document.getElementById('showDialogue'),
    500,
    300,
    .3,
    'click',
    'Modal Head',
    '/data/data.php',
    function () {
        document.getElementById(document.getElementById('showDialogue').getAttribute('data-dialogue')).style.opacity = 1;
    },
    function () {
        document.getElementById(document.getElementById('showDialogue').getAttribute('data-dialogue')).style.opacity = 0;
    }
);
console.log(dialogue instanceof Dialog);
console.log(dialogue.constructor);