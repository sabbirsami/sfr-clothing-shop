import React from "react";

const SubHeader = () => {
    return (
        <div className="bg-common text-light">
            <div className="container ">
                <div className="row justify-content-between align-item-center py-2">
                    <div className="col-lg-7">
                        <p className="m-0 text-lg-start text-center">
                            Telephone Enquiry +880 1970 706 676
                        </p>
                    </div>
                    <div className="col-lg-5 me-auto">
                        <p className="text-lg-end text-center m-0">
                            Currency : $USD | Language : English
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;
