function Txt() {
    return (
        <div className="mt-[100px] flex justify-center">
            <div className="w-[50%]  ml-36"> 
                <h1 className="text-[40px]">
                    <span className="text-[#13AAF8] font-medium">AIR</span>JORDAN
                </h1>
                <h3 className="font-normal mt-3">
                    AIR JORDAN 1 MID LIGHT <span className="text-[#13AAF8] font-medium">Sky</span>
                </h3>
                <p className="text-justify mt-5 w-[300px] text-[15px] font-light">
                    The popularity of Jordan 1s haven’t changed since their release in 1984. The classic silhouette has
                    been seen in countless colorways over the years. Sneakerheads in their teens and twenties also love
                    to wear Air Jordan 1s, in their eyes the original AJ1s are already part of sneaker history. This is
                    proof of being truly iconic, isn’t it?
                </p>
                <button className="buy w-[120px] h-[35px] rounded-[8px] bg-[#13AAF8] mt-5 text-[16px] transition duration-1000 hover:bg-transparent hover:border-[2px] hover:border-[#13AAF8]">Buy</button>
                <button className="number w-[120px] h-[35px] rounded-[8px] bg-transparent mt-5 text-[16px] transition duration-1000 border-[2px] border-[#13AAF8] hover:bg-[#13AAF8]">360$</button>
            </div>
            <div className="w-[50%] flex justify-center items-center">
                <img src="src/assets/Group 44.png" id="one" alt="" className="w-[500px]" />
                <img src="src/assets/logo.jpg" id="two" alt="" className="hidden w-[500px]" />
            </div>
        </div>
    );
}

export default Txt;
