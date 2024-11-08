const Land = () => {
  return (
    <div>
      <div className="mt-60 max-w-[900px] mx-auto h-full ">
        <div className="flex justify-between gap-5 text-center items-center">
          <div className="flex flex-col items-center">
            <img
              src="src/assets/Services (1).png"
              id="one"
              alt=""
               className="w-200 animate-lePeek "
            />
               <h1 className="font-medium animate-lePeek ">FREE AND FAST DELIVERY</h1>
               <p className=" animate-lePeek ">Free delivery for all orders over $140</p>
          </div>
          <div className="flex flex-col items-center ">
            <img 
              src="src/assets/Services (2).png"
              id="one"
              alt=""
              className="w-200 animate-lePeek"
            />
               <h1 className="font-medium animate-lePeek ">FREE AND FAST DELIVERY</h1>
               <p className=" animate-lePeek ">Free delivery for all orders over $140</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/Services.png"
              id="one"
              alt=""
            className="w-200 animate-lePeek"
            />
            <h1 className="font-medium animate-lePeek ">FREE AND FAST DELIVERY</h1>
            <p className=" animate-lePeek ">Free delivery for all orders over $140</p>
          </div>
        </div>
      </div>      
    </div>

  );
};

export default Land;
