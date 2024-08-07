import React  from "react";

const Pricing = ()=>{
    return(
        <div className="book box rounded border border-black h-max ">
            <h2 className="text-2xl m-4">Pricing Details</h2>
            <hr />
            <div className="grid grid-cols-3 m-3 text-sm ">
                    <div className="col-span-2 my-2">
                        <p>
                            Jungle Safari in Pilibhit Tiger Reserve
                        </p>
                        <p>2 Aug | 1 adult</p>
                    </div>
                    <div className="text-right my-2">
                        <p>Rs.2,895</p>
                    </div>
                    <div className="col-span-2 my-2" >
                        <p>Total</p>
                        <p>with tax & fees</p>
                    </div>
                    <div className="text-right my-2">
                        <p>INR 3181.51</p>
                    </div>
                    <div className="my-2" >
                        <p>Total due</p>
                    </div>
                
                    
                    
                    <div className="text-right col-span-2 my-2">
                        <p className="text-xl font-semibold text-red-500">INR 2,895</p>
                    </div>
                
            </div>
        </div>
    )
}

export default Pricing;