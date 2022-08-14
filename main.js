var dog = 0;
var cat = 0;
var random = 0; 



function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ND9yCEqt6/model.json'/modelReady);
}

function classifier()
{
   classifier.classify(gotReasult)
}

function gotResult()
{
    if (error)
    {
     console.error(error);
    }else 
    {
        console.log(result)
        random_number_r = Math.floor(Math.random()* 255) + 1;
        random_number_g = Math.floor(Math.random()* 255) + 1;
        random_number_b = Math.floor(Math.random()* 255) + 1;

        document.getElementById("detected").innerHTML = "Detected Dog -" - +dog+ - ", Detected cat -"  +cat+ ", Detected random -" +random ;
        document.getElementById("detected").style.color = "rgb("+ random_number_r + "," + random_number_g + "," + random_number_b+")"

        document.getElementById("voice").innerHTML = " Detected voice is of - " + result[0].label
        document.getElementById("voice").style.color = "rgb("+ random_number_r + "," + random_number_g + "," + random_number_b+")"

        img = document.getElementById("animal_images")

        if  (result[0].label == "barking") 
        {
           img.src = "https://tenor.com/search/dog-barking-gifs"
           dog = dog + 1;
        }
        
        else if  (result[0].label == "Meowing") 
        {
           img.src = "https://gifer.com/en/RdDU"
           cat = cat + 1;
        }
        

        else (result[0].label == "unknown")
        {
           img.src = "https://giphy.com/explore/question-sticker"
           random = random + 1;
        }


}

}
