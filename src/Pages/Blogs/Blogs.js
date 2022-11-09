import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-8'>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className=' w-full h-96' src="https://image5.slideserve.com/10633994/slide1-n.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Difference between SQL and NoSQL</h2>
                    <p>hen it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision. </p>

                </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className=' w-full h-96' src="https://blog.miniorange.com/wp-content/uploads/sites/19/2021/12/jwt-workflow.webp" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Difference between SQL and NoSQL</h2>
                    <p>(JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.</p><hr />
                    <p>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt</p>

                </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className=' w-full h-96' src="https://www.atliq.com/wp-content/uploads/2022/06/Know-the-difference-between-javascript-and-node-js-1-1-1.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">What is the difference between javascript and Node JS?</h2>
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>

                </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className=' w-full h-96' src="https://www.tutorialandexample.com/wp-content/uploads/2020/11/Node.js-Event-Loop-1.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>

                </div>
            </div>
        </div>
    );
};

export default Blogs;