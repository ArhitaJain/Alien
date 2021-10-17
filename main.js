function start()
{
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3ay8GC1gU/model.json',modelReady())
}

function modelReady()
{
  classifier.classify(got_results);
}

function got_results(error, result)
{
  if(error){
    console.error(error);
  }
  else{
    console.log(result);
    rgb_r = Math.floor(Math.random()*255)+1;
    rgb_g = Math.floor(Math.random()*255)+1;
    rgb_b = Math.floor(Math.random()*255)+1;
    
    document.getElementById('result_label').innerHTML =  "I can hear - "+ results[0].label;
    document.getElementById('result_confidence').innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById('result_label').style.color="rgb("+rgb_r+","+rgb_g+","+rgb_b+")";
    document.getElementById('result_confidence').style.color = "rgb("+rgb_r+","+rgb_g+","+rgb_b+")";

    img1 = document.getElementById("alien1");
    img2 = document.getElementById("alien2");
    img3 = document.getElementById("alien3");
    img4 = document.getElementById("alien4");

    if(result[0].label == 'Clap')
    {
      img.src = "aliens-01.gif";
      img2.src = "aliens-02.png";
      img3.src = "aliens-03.png";
      img4.src = "aliens-04.png";
    } else if(result[0].label == 'Snap')
    {
      img.src = "aliens-01.png";
      img2.src = "aliens-02.gif";
      img3.src = "aliens-03.png";
      img4.src = "aliens-04.png";
    }else if(result[0].label == 'Shout mumma')
    {
      img.src = "aliens-01.png";
      img2.src = "aliens-02.png";
      img3.src = "aliens-03.gif";
      img4.src = "aliens-04.png";
    }else{
      img.src = "aliens-01.png";
      img2.src = "aliens-02.png";
      img3.src = "aliens-03.png";
      img4.src = "aliens-04.gif";
    }
        
  }
}