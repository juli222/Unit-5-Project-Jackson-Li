
let firstanswer=document.querySelector(".firstinput");
let secondanswer=document.querySelector(".secondinput");
let submitbutton=document.querySelector(".submit");
let image=document.querySelector(".resultimage");
let result=document.querySelector(".result");
let concat=document.querySelector(".concat");

submitbutton.onclick=function() {
let firstinput=document.querySelector(".firstinput").value; let secondinput=document.querySelector(".secondinput").value;
    if (firstinput < 21 && secondinput === "Standing up") {
   concat.innerHTML="Because you're " + firstinput + " and wipe " + secondinput + " you are a...";
   image.src="https://www.gannett-cdn.com/presto/2018/10/19/USAT/ed1cee67-05ad-4431-8327-7705a9c5b61e-USP_NBA__Los_Angeles_Lakers_at_Portland_Trail_Blaz.JPG?crop=2858,3306,x0,y648";
    result.innerHTML="Dunk";
    console.log("Dunk");
    } else if(firstinput < 21 && secondinput === "Sitting down"){
        concat.innerHTML="Because you're " + firstinput + " and wipe " + secondinput + " you are a...";
    image.src="https://warriorswire.usatoday.com/wp-content/uploads/sites/33/2022/02/USATSI_17596194.jpg?w=1000&h=600&crop=1";
    result.innerHTML="Three-pointer"; 
    console.log("Three-pointer");
    } else if(firstinput > 21 && secondinput === "Standing up"){
       concat.innerHTML="Because you're " + firstinput + " and wipe " + secondinput + " you are a..."; image.src="https://www.masslive.com/resizer/S3hTVVtBpt6nH4iN_xiC1T0bdEY=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/WSTDM3XTCZFRFBIW3MZL3A7UMI.jpg";
        result.innerHTML="Layup";
        console.log("Layup");
    } else if(firstinput > 21 && secondinput === "Sitting down") {
        concat.innerHTML="Because you're " + firstinput + " and wipe " + secondinput + " you are a...";
        image.src="https://www.sportscasting.com/wp-content/uploads/2022/02/DeRozan.jpg?w=1024&h=683";
        result.innerHTML="Mid Range Jumper";
        console.log("Mid Range Jumper");
    }
};
