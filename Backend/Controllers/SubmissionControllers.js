import database from '../DatabaseConnection.js'

export const getAllSubmissions = (request, response) => {
    database.query(`
        SELECT * FROM submission;
    ` , (error, result, fields) => {
        if (error) {
            return response.status(502).json({
                'error': error
            });
        } else if (result) {
            return response.status(201).json({
                'result': result
            })
        }
    })
}

// Schema
/*
    CREATE TABLE IF NOT EXISTS submission
    (
        submission_id INT AUTO_INCREMENT PRIMARY KEY,
        problem_id INT,
        username VARCHAR(50),
        submission_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        stdin TEXT,
        status ENUM('Accepted', 'Wrong', 'TLE', 'MLE'),
        programming_language VARCHAR(50),
        code TEXT,
        FOREIGN KEY (problem_id) REFERENCES problem(problem_id)
    );

*/

export const uploadSubmission = async (request, response) => {
    const {
        submission_id,
        problem_id,
        username,
        stdin,
        status,
        programming_language,
        code
    } = request.body;

    if (
        submission_id === undefined ||
        problem_id === undefined ||
        username === undefined ||
        status === undefined ||
        programming_language === undefined ||
        code === undefined || 
        stdin === undefined
    ) {
        return response.status(400).json({
            'error': "Please enter all the information about the submission, including title, tag, description"
        })
    } else {
        database.query(`
            INSERT INTO submission
            (
                submission_id,
                problem_id,
                username,
                stdin,
                status,
                programming_language,
                code
            )
            VALUES
            (
                '${submission_id}',
                '${problem_id}',
                '${username}',
                '${stdin}',
                '${status}',
                '${programming_language}',
                '${code}'
            );
        `
            , (error, result, fields) => {
                if (error) {
                    return response.status(502).json({
                        'error': error
                    });
                } else if (result) {
                    return response.status(201).json({
                        'message': "Submission added successfully",
                        'result': result,
                        'body': request.body
                    })
                }
            })
    }
}

export const getSubmissionsById = async (request, response) => {
    const id = request.params.id;

    database.query(`
        SELECT * FROM submission WHERE submission_id = ${id};
    ` , (error, result, fields) => {
        if (error) {
            return response.status(502).json({
                'error': error
            });
        } else if (result) {
            return response.status(201).json({
                'result': result
            })
        }
    })
}