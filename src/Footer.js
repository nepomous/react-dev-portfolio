import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-5 copyright'>
                        <p>
                            Copyright &copy; 2019 FILLIPE OLIVEIRA
                        </p>
                    </div>
                    <div className='col-sm-2 top'>
                        <span id='to-top'>
                            <i className='fa fa-chevron-up' aria-hidden="true"></i>
                        </span>
                    </div>
                    <div className="col-sm-5 social">
                        <ul>
                            <li>
                                <a href="https://github.com/nepomous/" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="https://pt.stackoverflow.com/users/159741/nepomous" target="_blank"><i className="fa fa-stack-overflow" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/fillipe-oliveira/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            </li>                        
                        </ul>
                    </div>
                </div>
            </div>
        </footer>        
)}

  //se eu quiser usar este recurso externamente, preciso dar export
export default Footer