const swagger_docs = {
    openapi: "3.0.0",
    // swagger: "2.0",
    info: {
        title: 'swagger Test',
        version: '0.1'
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: 'local'
        }
    ],
    // host: "localhost:3000",
    // basePath: '/'
    paths: {
        "/hello": {
            get: {
                description: 'hello world',
                responses: {
                    200: {
                        description: 'success'
                    }
                }
            },
            post: {
                description: 'hello world',
                requestBody: {
                    description: 'req body',
                    content: {
                        'multipart/form-data': {
                            schema: {
                                type: 'object',
                                properties: {
                                    image: {
                                        type: 'string',
                                        format: 'binary'
                                        // items: {
                                        //     type: 'string',
                                        //     format: 'binary'
                                        // }
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: 'success'
                    }
                }
            }
        }
    },
}

module.exports = swagger_docs