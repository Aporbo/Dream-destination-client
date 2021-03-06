import React from 'react';

const Footer = () => {
    return (
        <footer style= {{background: '#a6e2ec' , padding: '100px 0 30px 0'}}>
            <div className='container'>
                <div className="row">
                <div className="col-md-5">
                    <h2 className='mb-3 text-white'>Let us handle your project, professionally.</h2>
                    <p className="text-white">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-md-6 offset-md-1">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control py-4" placeholder="Email Address *"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control py-4" placeholder="Subject *"/>
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group">
                            <button style={{width:'200px' , height:'40px' , fontSize:'16px' , background:'#111430' ,color:'#FFFFFF'}} type="button" className="btn"> Send </button>
                        </div>
                    </form>
                </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;