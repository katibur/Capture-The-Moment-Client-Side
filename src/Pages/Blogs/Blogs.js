import React from 'react';
import useTtile from '../../Components/Hooks/Title';

const Blogs = () => {
    useTtile('Blogs');
    return (
        <div>
            <div className="card w-5/6 mx-auto my-5 border-2 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mx-auto">What are the Differences between SQL and NoSQL?</h2>
                    <div className="card-actions justify-between">
                        <div>
                            <h2 className="text-start font-bold mx-auto mt-4">SQL :</h2>
                            <p>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).</p>
                            <p>These databases have fixed or static or predefined schema.</p>
                            <p>These databases are best suited for complex queries.</p>
                            <p>Vertically Scalable.</p>
                            <p><span className='font-bold'>Examples:</span> MySQL, PostgreSQL, Oracle, MS-SQL Server etc.</p>
                        </div>

                        <div>
                            <h2 className="text-start font-bold mx-auto mt-4">NoSQL :</h2>
                            <p>Non-relational or distributed database system.</p>
                            <p>They have dynamic schema.</p>
                            <p>These databases are not so good for complex queries.</p>
                            <p>Horizontally scalable.</p>
                            <p><span className='font-bold'>Examples:</span> MongoDB, GraphQL, HBase, Neo4j, Cassandra etc.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card w-5/6 mx-auto my-5 border-2 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mx-auto">What is JWT, and how does it work?</h2>

                    <div className="card-actions">
                        <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
                            It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.<br />

                            The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.<br /><br />
                            Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
                    </div>
                </div>
            </div>

            <div className="card w-5/6 mx-auto my-5 border-2 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mx-auto">What is the difference between javascript and NodeJS?</h2>
                    <div className="card-actions justify-between">
                        <div>
                            <h2 className="text-start font-bold mx-auto mt-4">javascript :</h2>
                            <p>It is an accessible, bridge, parsed, lightweight,
                                reactive, and web apps programming language.</p>
                            <p>It's a programming language, after all.
                                Any browser with a competent browser engine will operate.</p>
                            <p>It's most commonly used on client-side servers.</p>
                            <p>It's made for creating network-centric apps.</p>
                            <p>ypedJS, RamdaJS, and others are the example of JavaScript.</p>
                        </div>

                        <div>
                            <h2 className="text-start font-bold mx-auto mt-4">NodeJS :</h2>
                            <p>It's a bridge, open-source Js
                                runtime environment for executing Js on the server.</p>
                            <p>It's a JavaScript translator and environment
                                that includes some valuable libraries for JavaScript programming.</p>
                            <p>It's mainly popular on the server-side.</p>
                            <p>It's made for real-time data-intensive apps that
                                run on multiple platforms.</p>
                            <p>Nodejs modules include Lodash and Express.
                                All of these modules must be imported from npm.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card w-5/6 mx-auto my-5 border-2 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mx-auto">How does NodeJS handle multiple requests at the same time?</h2>

                    <div className="card-actions">
                        <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.<br />

                            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;