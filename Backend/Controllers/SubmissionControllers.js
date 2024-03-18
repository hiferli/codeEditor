export const uploadSubmission = async (request , response) => {
    try {
        // Getting all data from frontend
        const { problemId , username , language , stdin , code } = request.body;

        // Checking for undefinity
        if(username === undefined){
            return response.status(400).json({
                'error': 'Please enter a valid username'
            })
        } else if(code === undefined || language === undefined || problemId === undefined){
            return response.status(404).json({
                'error': "Not found"
            })
        } 

        // Run the code and get the results
        // Store the code with the other informatoin in the database
        return response.json(request.body)
    } catch (error) {
        // Return the error
        return response.status(500).json({
            'error': error.message
        })
    }
}