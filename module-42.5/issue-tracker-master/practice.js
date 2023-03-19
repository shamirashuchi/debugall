const getInputValue = id => document.getElementById(id).value;
const sendname = document.getElementById("namebtn");
const sendemail = document.getElementById("emailbtn");
const sendmsg = document.getElementById("msgbtn");
const send = document.getElementById("sendbtn");
const reset = document.getElementById("resetbtn");
const dname = document.getElementById("removename");
const demail = document.getElementById("removeemail");
const dmsg = document.getElementById("removemsg");


//set name
sendname.addEventListener('click', submitname);


function submitname() {
    let name = getInputValue("name");
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
        alert('Invalid name input! Name must only contain letters and spaces.');
        return; // do not add invalid names to the list
      }
    let Names = [];
    if (localStorage.getItem('Name')) {
      Names = JSON.parse(localStorage.getItem('Name'));
    }
    const existingName = Names.includes(name);
    if (existingName) {
      alert('Name already exists');
      return;
    }
    const names =  name ;
    Names.push(names);
    localStorage.setItem('Name', JSON.stringify(Names));
    document.getElementById("name").value = "";
  }

//set email
  sendemail.addEventListener('click', submitemail);
  function submitemail(){
    let emailValue= getInputValue("email");
    //console.log(emailValue);
    if (!emailValue.trim()) {
        return; // do not submit empty emails
    }
    if (!/\S+@\S+\.\S+/.test(emailValue)) {
        alert('Please enter a valid email address');
        return;
    }
    let Emails = [];
    if (localStorage.getItem('Email')) {
        Emails = JSON.parse(localStorage.getItem('Email'));
      }
      const existingEmail = Emails.includes(emailValue);
    if (existingEmail) {
      alert('Email already exists');
      return;
    }
    const emails = emailValue  ;
    Emails.push(emails);
    localStorage.setItem('Email', JSON.stringify(Emails));
    document.getElementById("email").value = "";
  }

  //set msg
  sendmsg.addEventListener('click', submitmsg);


function submitmsg() {
    let msg = getInputValue('msg');
    if (!/^[a-zA-Z\s]+$/.test(msg.trim())) {
        alert('Invalid name input! Name must only contain letters and spaces.');
        return; // do not add invalid names to the list
      }
    let msges = [];
    if (localStorage.getItem('Msg')) {
      msges = JSON.parse(localStorage.getItem('Msg'));
    }
    const existingName = msges.includes(msg);
    if (existingName) {
      alert('Msg already exists');
      return;
    }
    const Mass =  msg ;
    msges.push(Mass);
    localStorage.setItem('Msg', JSON.stringify(msges));
    document.getElementById("msg").value = "";
  }

  //send button work
  send.addEventListener('click', sendy);
function sendy(){
    let name = getInputValue("name");
    let emailValue= getInputValue("email");
    let msg = getInputValue('msg');
    if (!name || !emailValue || !msg) {
        return;
      }
    //name validation
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
        alert('Invalid name input! Name must only contain letters and spaces.');
        return; // do not add invalid names to the list
      }
//Email validation
      if (!emailValue.trim()) {
        return; // do not submit empty emails
    }
    if (!/\S+@\S+\.\S+/.test(emailValue)) {
        alert('Please enter a valid email address');
        return;
    }
//msg validation
    if (!/^[a-zA-Z\s]+$/.test(msg.trim())) {
        alert('Invalid name input! Name must only contain letters and spaces.');
        return; // do not add invalid names to the list
      }
      //store in localstorage



      let ALL = [];
    if (localStorage.getItem('issue')) {
      ALL = JSON.parse(localStorage.getItem('issue'));
    }
    const all =  {name,emailValue,msg} ;
    ALL.push(all);
    localStorage.setItem('issue', JSON.stringify(ALL));
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("msg").value = "";
    fetchIssues();
}

//fetch data
const fetchIssues = () => {
    if(localStorage.getItem('issue')){
    const issues = JSON.parse(localStorage.getItem('issue'));
    console.log(issues);
    document.getElementById("name").value = issues[0].name;
    document.getElementById("email").value = issues[0].emailValue;
    document.getElementById("msg").value = issues[0].msg;
    }
}

//remove name
dname.addEventListener('click', rname);
function rname(){
    localStorage.removeItem("Name");
}

//remove email
demail.addEventListener('click', remail);
function remail(){
    localStorage.removeItem("Email");
}

//remove msg
dmsg.addEventListener('click', rmsg);
function rmsg(){
    localStorage.removeItem("Msg");
}

//reset
reset.addEventListener('click', dreset);
function dreset(){
    localStorage.clear();
}