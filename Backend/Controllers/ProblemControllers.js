import database from '../DatabaseConnection.js'

export const getAllProblems = (request , response) => {
    database.query(`
        SELECT * FROM problem;
    ` , (error , result , fields) => {
        if(error) {
            return response.status(502).json({
                'error': error
            });
        } else if(result) {
            return response.status(201).json({
                'result': result
            })
        }
    })
}

// Schema:
/*
    CREATE TABLE IF NOT EXISTS problem
    (
        problem_id INT AUTO_INCREMENT PRIMARY KEY,
        problem_tag ENUM('Easy', 'Medium', 'Hard'),
        problem_title VARCHAR(50),
        problem_description TEXT,

        example_testcases TEXT,
        example_result TEXT,
        
        submission_count INT DEFAULT 0,
        accepted_solution_count INT DEFAULT 0
    );
*/

export const uploadProblem = (request , response) => {
    const { 
        problem_title , 
        problem_tag , 
        problem_description , 
        example_testcases , 
        example_result 
    } = request.body;

    if(problem_title === undefined || problem_tag === undefined || problem_description === undefined){
        return response.status(400).json({
            'error': "Please enter all the information about the problem, including title, tag, description"
        })
    } else {
        database.query(`
            INSERT INTO problem
            (
                problem_title , 
                problem_tag , 
                problem_description , 
                example_testcases , 
                example_result
            )
            VALUES
            (
                '${problem_title}' , 
                '${problem_tag}' , 
                '${problem_description}' , 
                '${example_testcases === undefined ? "" : example_testcases}' , 
                '${example_result === undefined ? "" : example_result}'
            );
        ` , (error , result , fields) => {
            if (error) {
                return response.status(502).json({
                    'error': error
                });
            } else if (result) {
                return response.status(201).json({
                    'message': "Problem created successfully",
                    'result': result,
                    'body': request.body
                })
            }
        })
    }
}

export const getProblemById = (request , response) => {
    const id = request.params.id

    database.query(`
        SELECT * FROM problem WHERE problem_id = '${id}'
    ` , (error , result , fields) => {
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

export const deleteProblemById = (request , response) => {
    const id = parseInt(request.params.id);

    database.query(`
        DELETE FROM problem WHERE problem_id = ${id};
    ` , (error, result, fields) => {
        if (error) {
            return response.status(502).json({
                'error': error
            });
        } else if (result) {
            return response.status(201).json({
                'message': "Problem deleted successfully",
                'result': result
            })
        }
    })
}