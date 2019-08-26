import React from 'react';

const Lead = () => {
    return (
        <div id="lead">
            <div id="lead-content">
                <h1>Fillipe Oliveira</h1>
                <h2>Front-end Developer</h2>
                <a href="#" class="btn-rounded-white">Download Resume [fetch link]</a>
            </div>            

            <div id="lead-overlay"></div>

            <div id="lead-down">
                <span>
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </span>
            </div>
        
        </div>    
)}

  //se eu quiser usar este recurso externamente, preciso dar export
export default Lead