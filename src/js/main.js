var texteditor = function(){
    this.$el = $('#content');
    $('.te-btn-bold').on('click',function(e,b,c){
        this.$el.append('<strong>a</strong>');
        var range = document.createRange();
        var sel = window.getSelection();
        debugger;
        range.setStart(this.$el.find('strong')[0],8);
        range.setEnd(this.$el.find('strong')[0],8);
        sel.removeAllRanges();
        sel.addRange(range);
    }.bind(this));
    return this;
};


