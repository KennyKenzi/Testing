axios = require ('axios')


const backendUrl = 'http://localhost:4000/api'
const api = {
    testcase: backendUrl+"/testcase",
    project: backendUrl+"/project/"
}



 const apiCalls = {
        
        createTestcase: (testcaseBody)=>{
            axios.post(api.testcase, testcaseBody)
        },
    
        createProject: (projectBody)=>{
            axios.post(api.project, projectBody)
        },
    
        getProjects: ()=>{
            return axios.get(api.project)
        },
    
        getProjectByCode: (code)=>{
            return axios.get(api.project+code)
            
        }
    
    }

module.exports = apiCalls