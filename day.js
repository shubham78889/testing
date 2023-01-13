module.exports=getdate;
function getdate(){
const date=new Date();
var options={
    day:"numeric",
    weekday:"long",
    year:"numeric"
}

return date.toLocaleDateString("en-us",options);

}

