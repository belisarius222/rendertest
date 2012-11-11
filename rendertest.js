if (Meteor.isClient) {
  Template.renderTests.helpers({
    renderOtherTemplate: function() {
      var html = Template.other1();
      console.log('other1: ');
      console.log(html);
      $('#others').append(html);
    },
    deferOtherTemplate: function() {
      Meteor.defer(function(){
        var html = Template.other2();
        console.log('other2: ');
        console.log(html);
        $('#others').append(html);
      });
    },
    returnOtherTemplate: function() {
      var html = Template.other3();
      console.log('other3: ');
      console.log(html);
      return html;
    },
    renderHTML: function() {
      return '<p>returned text</p>';
    },
  });
}

