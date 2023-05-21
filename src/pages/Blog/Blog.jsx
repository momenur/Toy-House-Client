import React from 'react';

const Blog = () => {
    return (
        <div className='bg-neutral text-neutral-content'>
            <h1 className='py-12 text-5xl font-bold text-center text-neutral-content'><span className='border-b'>Question And Answer</span></h1>
            <div className='bg-gray-600'>
                <div className='p-6'>
                    <h3 className='pb-6 text-2xl font-semibold text-orange-300'><span className='border-b'>Qus-1: </span> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>

                    <h5>Access Token: An access token is a credential that is used to access protected resources in a system. It is typically issued to a client after a successful authentication process. The access token contains information about the client's identity and permissions and is used to authorize and authenticate subsequent API requests <br />
                        <br />
                        Refresh Token: A refresh token is a credential that is used to obtain a new access token without requiring the client to re-authenticate. When an access token expires, the client can use the refresh token to request a new access token from the authorization server. This process is known as token refreshing or token renewal. The refresh token is typically long-lived compared to the access token and is securely stored by the client. <br />
                        <br />
                        Work Process: Access tokens should be securely stored on the client-side, typically in memory or in a secure storage mechanism provided by the operating system or framework. They should not be stored in plain text or exposed in client-side code. Storing them securely helps prevent unauthorized access and potential token theft. <br />
                        Refresh tokens are more sensitive and long-lived, so they should be stored in a highly secure manner. They are commonly stored in a server-side session or in a secure storage mechanism provided by the operating system or framework. Storing them securely helps mitigate the risk of unauthorized access and token leakage.
                    </h5>
                </div>
                <div className='p-6'>
                    <h3 className='pb-6 text-2xl font-semibold text-orange-300'><span className='border-b'>Qus-2: </span> Compare SQL and NoSQL databases?</h3>

                    <h5>SQL VS NO SQL: SQL (Structured Query Language) and NoSQL (Not Only SQL) are two types of database management systems that have different approaches to storing and retrieving data. Here are some key differences between SQL and NoSQL databases: <br />
                        <br />
                        dataModel: SQL databases follow a relational data model where data is organized into tables with predefined schemas. Each table consists of rows and columns, and relationships between tables are established through primary and foreign keys.
                        NoSQL databases use various data models such as key-value pairs, documents, wide-column stores, or graphs. They provide more flexibility in terms of data structures and allow for storing unstructured or semi-structured data.
                    </h5>
                </div>
                <div className='p-6'>
                    <h3 className='pb-6 text-2xl font-semibold text-orange-300'><span className='border-b'>Qus-3: </span> What is express js? What is Nest JS?</h3>

                    <h5>Express.js and Nest.js are both popular web application frameworks for Node.js, but they have different approaches and features.<br />
                        <br />
                        Nest.js is a progressive, opinionated, and extensible framework for building scalable and efficient server-side applications with TypeScript. It leverages the power of TypeScript's strong typing and object-oriented features to provide a structured and organized development experience. Some notable features of Nest.js include:
                       
                    </h5>
                </div>
                <div className='p-6'>
                    <h3 className='pb-6 text-2xl font-semibold text-orange-300'><span className='border-b'>Qus-4: </span> What is MongoDB aggregate and how does it work?</h3>

                    <h5 className='pb-12'>In MongoDB, the aggregate method is a powerful feature of the MongoDB Aggregation Framework. It allows you to perform advanced data aggregation operations on collections, enabling you to process and transform data in various ways. The aggregate method takes an array of pipeline stages as input, where each stage performs a specific operation on the data.
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Blog;