export const uploadSubmission = async (request , response) => {
    return response.json({
        "Status": "Success",
        "Data": request.body
    })
}