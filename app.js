var envelopRef = new Firebase('https://gmap-steria.firebaseio.com/envelop');

$(function(){
  $("#greeting-form").submit(function(){
    var envelop = $('#greeting-form').serializeJSON();
    envelopRef.push(envelop);
    return false;
  });
});

envelopRef.on('child_added', function(childSnapshot, prevChildName) {
  console.log(childSnapshot.val());
});