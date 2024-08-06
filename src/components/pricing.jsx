import React  from "react";

const Pricing = ()=>{
    return(
        <div className="book rounded border border-black ">
            <h2 className="text-2xl m-4">Pricing Details</h2>
            <hr />
            <div className="grid grid-cols-2 m-3 gap-2">
                    <div className="my-3">
                        <p>
                            Jungle Safari in Pilibhit Tiger Reserve
                        </p>
                        <p>2 Aug | 1 adult</p>
                    </div>
                    <div className="text-right">
                        <p>Rs.2,895</p>
                    </div>
                    <div className="my-3">
                        <p>Total</p>
                        <p>with tax & fees</p>
                    </div>
                    <div className="text-right">
                        <p>INR 3181.51</p>
                    </div>
                    <div>
                        <p>Total due</p>
                    </div>
                
                    
                    
                    <div className="text-right">
                        <p className="text-xl font-semibold text-red-500">INR 2,895</p>
                    </div>
                
            </div>
        </div>
    )
}

export default Pricing;