let first=document.forms[0].fname;
let last=document.forms[0].lname;
document.getElementById("form1").addEventListener('submit',(e)=>{
	e.preventDefault();
	if(first.value.trim()!=="" && last.value.trim()!==""){
		getFormvalue(first,last);
	}
	form1.reset();
})
function getFormvalue(first,last) {
	alert(`${first.value.trim()} ${last.value.trim()}`);
}
