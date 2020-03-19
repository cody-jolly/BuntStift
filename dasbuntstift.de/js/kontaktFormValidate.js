// define validate function
function vali () {
  // get info from input felder
  let name = $('#name').val();
  let email = $('#email').val();
  let nachricht = $('#nachricht').val();
  let datenschutzCheckbox = $('#datenschutz-checkbox'); 
  //console.log(name);
  //console.log(email);
  //console.log(nachricht);
  //console.log(datenschutzCheckbox);

  // validate name
  // check if name was entered
  if(name == null || name == "") {
    console.log('no name');
    $('#name').addClass('vali-false');
    $('#name-warning').show();
    return false;
  } else if(name.length < 2 || name.length > 255) { // check name length
    console.log('name wrong length');
    $('#name').addClass('vali-false');
    $('#name-warning').show();
    return false;
  } else {
    // remove warning and border
    console.log('name is good');
    $('#name').removeClass('vali-false');
    $('#name-warning').hide();
  }
  
  // validate email
  // regular expression for an average email
  const reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // check if email was entered
  if(email == null || email == "") {
    console.log('no email');
    $('#email').addClass('vali-false');
    $('#email-warning').show();
    return false;
  } else if(email.length < 2 || email.length > 255) { // check email length
    console.log('wrong email length');
    $('#email').addClass('vali-false');
    $('#email-warning').show();
    return false;
  } else if(reEmail.test(email) == false) { // check email format
     console.log('wrong email format');
     $('#email').addClass('vali-false');
     $('#email-warning').show();
     return false;
  } else {
    // remove warning and border
    console.log('email is good');
    $('#email').removeClass('vali-false');
    $('#email-warning').hide();
  }

  // validate nachricht
  // check if nachricht was entered
  if(nachricht == null || nachricht == "") {
    console.log('no nachricht');
    $('#nachricht').addClass('vali-false');
    $('#nachricht-warning').show();
    return false;
  } else if(nachricht.length < 5 || nachricht.length > 255) { // check nachricht length
    console.log('nachricht wrong length');
    $('#nachricht').addClass('vali-false');
    $('#nachricht-warning').show();
    return false;
  } else {
    // remove warning and border
    console.log('nachricht is good');
    $('#nachricht').removeClass('vali-false');
    $('#nachricht-warning').hide();
  }

  // validate checkbox
  // check if checkbox is not checked
  if(!datenschutzCheckbox.is(':checked')) {
    console.log('checkbox not checked');
    $('#checkbox-wrap').addClass('vali-false');
    $('#datenschutz-warning').show();
    return false;
  } else {
    // remove warning and border
    console.log('checkbox is good');
    $('#ncheckbox-wrap').removeClass('vali-false');
    $('#datenschutz-warning').hide();
  }
}