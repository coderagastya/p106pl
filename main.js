function startclassification() {
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/KbDm7n2ef/model.json', modelReady);

}
function modelReady() {
    classifier.classify(gotResults)
}

function gotResults(error,results)
{
if(error)
{
    console.log(error);
}
else{
console.log(results);
random_number_r=Math.floor(Math.random()* 255)+1;
random_number_g=Math.floor(Math.random()* 255)+1;
random_number_b=Math.floor(Math.random()* 255)+1;

document.getElementById("result_label").innerHTML="I can hear="+results[0].label
document.getElementById("result_confidence").innerHTML="Accuracy="+(results[0].confidence *100).toFixed(2)+"%"
document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")"
document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")"

if(results[0].label=="bark")
{
img1.src="http://thewowstyle.com/wp-content/uploads/2015/04/cat1.jpg"
}

 else if(results[0].label=="meow")
 {
     img2.src="https://tse2.mm.bing.net/th?id=OIP.Jf0NnGpH2AhNM3BtwZufwwHaJ4&pid=Api&P=0&w=119&h=159"
 }

 else if(results[0].label=="mooing")
 {
     img3.src="http://kidspressmagazine.com/wp-content/uploads/2014/04/dreamstime_xl_155237.jpg"
 }

 else
 {
     img4.src="http://2.bp.blogspot.com/-ngsUKCKs1Yk/UXn3cnc2FHI/AAAAAAAAEVk/7OjN6NI-_N8/s1600/lion.jpg"
 }
