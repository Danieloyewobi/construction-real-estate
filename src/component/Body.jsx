import image1 from '../assets/house 1.jpg';
import './Body.css';

function Body() {
  return (
    <div className="container-fluid2 mt-4 border p-3 body-container shadow-sm b" style={{height:'100vh',}}>
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-md-6 align-items-center mt-5">
        <h4 className="typing-text text-center" style={{fontfamily: "Inter",fontWeight:'bolder'}}>Kolruf Kenny Nigeria LTD.</h4>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, officiis. Fugiat, nobis voluptates suscipit molestiae vero quas cumque. Exercitationem, nisi cumque eum perspiciatis necessitatibus, libero ab rerum modi neque illum cupiditate provident iusto tenetur quidem suscipit, nemo repellat ratione cum!</p>
          <button className='btn btn text-light d-block m-auto' style={{backgroundColor:'rgb(251,44,18)'}}>Check Out Our project</button>
        </div>
        <div className="col-md-6 justify-content-center">
          <img src={image1} className="body-image img-fluid" alt="A descriptive hero image"/>
        </div>
      </div>
    </div>
  );
}

export default Body;
