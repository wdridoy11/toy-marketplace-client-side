import React from 'react'
import UserTitle from '../../components/shared/useTitle/UserTitle'

const Blogs = () => {
    UserTitle("Blogs")
  return (
    <div className='py-20'>
        <div className='container mx-auto px-5'>
            <div className='mb-10'>
                <h1 className='text-2xl font-medium'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <div> 
                    <h3 className='text-lg font-medium mt-3'>Access token:</h3>
                    <p className='text-base font-normal text-slate-600'>
                        An access token is a credential used in authentication and authorization systems to grant a client 
                        permission to access protected resources. Access tokens play a critical role in securing access 
                        to protected resources and enforcing authorization rules.
                    </p>
                    <h3 className='text-lg font-medium mt-3'>Refresh token:</h3>
                    <p className='text-base font-normal text-slate-600'>
                        A refresh token is a long-lived credential used in authentication and authorization systems to obtain a 
                        new access token when the current one expires. Refresh tokens are typically long-lived compared to access 
                        tokens and are designed to be securely stored and transmitted.
                    </p>
                    <h3 className='text-lg font-medium mt-3'>How do they work:</h3>
                    <p className='text-base font-normal text-slate-600'>
                        The purpose of using both access tokens and refresh tokens is to enhance security and control access to 
                        resources. Access tokens have a shorter lifespan. Refresh tokens, on the other hand, can be securely 
                        stored and used to obtain new access tokens when needed.
                    </p>
                    <h3 className='text-lg font-medium mt-3'>Where should we store them on the client-side:</h3>
                    <p className='text-base font-normal text-slate-600'>
                        Access token and refresh token shouldn't be stored in the local/session storage, because they are not a 
                        place for any sensitive data. Storing the access token in session storage and sending it via a Bearer 
                        access_token authorization header to my resource server. Then can we use httpOnly cookies for the refresh token.
                    </p>
                    
                </div>
            </div>
            <div className='mb-10'>
                <h1 className='text-2xl font-medium'>2. Compare SQL and NoSQL databases?</h1>
                <div className='flex flex-col md:flex-row md:gap-5 lg:gap-20'>
                    <div className='mt-7'>
                        <h3 className='text-lg font-medium mb-3'>SQL:</h3>
                        <li className='text-base font-normal text-slate-600 mb-2'>SQL Relational Database management system</li>
                        <li className='text-base font-normal text-slate-600 mb-2'>SQL databases use the Structured Query Language (SQL)</li>
                        <li className='text-base font-normal text-slate-600 mb-2'>Vertically Scalable</li>
                        <li className='text-base font-normal text-slate-600 mb-2'>SQL databases are table-based databases</li>
                    </div>
                    <div className='mt-7'>
                        <h3 className='text-lg font-medium mb-3'>NoSQL:</h3>
                        <li className='text-base font-normal text-slate-600 mb-2'>NoSQL Distributed Database management system</li>
                        <li className='text-base font-normal text-slate-600 mb-2'>NoSQL databases often have their own query languages</li>
                        <li className='text-base font-normal text-slate-600 mb-2'>Horizontally Scalable</li>
                        <li className='text-base font-normal text-slate-600 mb-2'>NoSQL databases can be document-based, key-value pairs, and graph databases.</li>
                    </div>
                </div>
            </div>
            <div className='mb-10'>
                <h1 className='text-2xl font-medium'>3. What is express js? What is Nest JS?</h1>
                <h3 className='text-lg font-medium mt-3'>Express js:</h3>
                <p className='text-base font-normal text-slate-600'> 
                    Express.js is a popular web application framework for Node.js, a JavaScript runtime environment. Express js is 
                    released as free and open-source software under the MIT License. Express.js, developers can define routes, 
                    handle HTTP requests and responses. It simplifies common web development tasks and provides a foundation 
                    for building robust and scalable web applications.
                </p>
                <h3 className='text-lg font-medium mt-3'>Nest JS:</h3>
                <p className='text-base font-normal text-slate-600'>
                    Nest JS is a server-side framework for building efficient and scalable web applications in Node.js 
                    It is known for producing highly testable, maintainable, and scalable applications using modern 
                    JavaScript and TypeScript. NestJS follows a modular and opinionated architecture, which helps 
                    developers organize their codebase in a structured manner
                </p>
            </div>
            <div className='mb-10'>
                <h1 className='text-2xl font-medium'>4. What is MongoDB aggregate and how does it work?</h1>
                <p className='text-base font-normal text-slate-600 mt-3'>
                    MongoDB is a popular open-source document-oriented NoSQL database that provides high performance, 
                    scalability, and flexibility for storing and retrieving data. In MongoDB, aggregate function is 
                    used for data aggregation and analysis. The aggregate operation uses a pipeline concept, where 
                    define a series of stages to transform and process the data.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Blogs