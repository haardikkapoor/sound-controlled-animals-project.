function start(){
    model = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Q5KyYrOIN/model.json" ,ModelLoded)
}

function ModelLoded(){
    console.log("teachable machine is linked");
    model.classify(showResult);
}

function showResult(error, result){
             if(error){
                console.log(error);
             }
             else{

                r = Math.floor(Math.random()*255)
                g = Math.floor(Math.random()*255)
                b = Math.floor(Math.random()*255)

                document.getElementById("sound").style.color = 'rgb(' + r +','+ g +','+ b + ')'
                document.getElementById("accuracy").style.color = 'rgb(' + r +','+ g +','+ b + ')'

                console.log(result);
                document.getElementById("sound").innerHTML = "Sound:  " + result[0].label;
                document.getElementById("accuracy").innerHTML = "accuracy:  " + (result[0].confidence*100).toFixed(2) + "%";
                img1 = document.getElementById("alien1")
img2 = document.getElementById("alien2")
img3 = document.getElementById("alien3")
img4 = document.getElementById("alien4")

 if(result[0].label == "Background Noise"){
    img1.src = "aliens-01.gif"
    img2.src = "aliens-02.png"
    img3.src = "aliens-03.png"
    img4.src = "aliens-04.png"
 }
 if(result[0].label == "clap"){
    img1.src = "aliens-01.png"
    img2.src = "aliens-02.gif"
    img3.src = "aliens-03.png"
    img4.src = "aliens-04.png"
 }
 if(result[0].label == "meow"){
    img1.src = "aliens-01.png"
    img2.src = "aliens-02.png"
    img3.src = "aliens-03.gif"
    img4.src = "aliens-04.png"
 }
 if(result[0].label == "snap"){
    img1.src = "aliens-01.png"
    img2.src = "aliens-02.png"
    img3.src = "aliens-03.png"
    img4.src = "aliens-04.gif"
 }
             }

}



