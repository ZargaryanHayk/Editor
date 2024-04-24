import React from 'react';

function SelectColor(props) {
    // Array of image paths
    let pathOfImg = [1,2,3,4,5
        
            ];

    return (
        <div className='flex'>
            {/* Mapping over the array of image paths */}
            {pathOfImg.map((path, idx) => {
                // Using idx as a key to differentiate between images
                return (
                <div key={idx} onClick={() => {props.ch("/img_test.jpg")}}>
                    <img className='w-36' key={idx} src="/img_test.jpg" alt={`Image ${idx}`} />
                </div>
                )
            
            })}
        </div>
    );
}

export default SelectColor;
