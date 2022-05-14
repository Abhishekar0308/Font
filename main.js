function setup() 
{

    video = createCapture(VIDEO);
    video.size(450,400);

    canvas = createCanvas(400,400);
    canvas.position(560,150)

    poseNet = ml5.poseNet( video, modelLoaded);
    }

    function draw () {
        background  ('blue');
      
    }

   

    function modelLoaded() {
    
        console.log (' PoseNet Is on ')
    }
    

    function gotPoses(results)
    {

        if (results.length >0)
        {
            console.log (results);
            

        }
    }