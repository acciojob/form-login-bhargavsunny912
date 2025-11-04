let first=document.forms[0].fname;
let last=document.forms[0].lname;
document.getElementById("form1").addEventListener('submit',(e)=>{
	e.preventDefault();
	if(first.value.trim()!=="" && last.value.trim()!==""){
		alert(`${first.value.trim()} ${last.value.trim()}`);
	}
	form1.reset();
})
function getFormvalue(e) {

}
