import ReactPlayer from 'react-player';

export default function Background(){
    return <div style={{width:"100%",height:"90vh",padding:"0"}}>
         <ReactPlayer
        url="https://youtu.be/Q8sb3WntLso?si=SBaTqbE_pQkSV7HX"  // Replace with your video URL
        playing
        loop
        muted
        width="100%"
        height="100%"
        controls="false"
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload' // Disable download button
            }
          }
    
        }}
      />
{/* <h1>TEst</h1>
<h1>TEst</h1>
<h1>TEst</h1>
<h1>TEst</h1>
<h1>TEst</h1>
<h1>TEst</h1>
<h1>TEst</h1>
<h1>TEst</h1>
<h1>TEst</h1>
<h1>TEst</h1>
<h1>TEst</h1> */}

    </div>
}