import { useState } from "react"
import "./css/projectForm.css"


function AddProjectForm({onAddProject, setIsClicked}){
    const [formData, setFormData] = useState({
        name: "",
        github_url: "",
        project_url: "",
        description: ""
    })

    function onAddProjectSubmit(e){
        e.preventDefault()
        onAddProject(formData)
    }

    function updateForm(e, input){
        setFormData({...formData, [input]: e.target.value})
    }

    return (
        <div id="project-form-div">
            <h3>New Project</h3>
            <form onSubmit={onAddProjectSubmit} >
                <div className="input-group mb-3">
                    <span className="input-group-text" id="Project Name">Project Name</span>
                    <input type="text" value={formData.name} onChange={e => updateForm(e, "name")} placeholder="Project Name" aria-label="Project Name" aria-describedby="Project Name" className="form-control" /><br/>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="Github Url">Github Url</span>
                    <input type="text" value={formData.github_url} onChange={e => updateForm(e, "github_url")} placeholder="Github Url" aria-label="Github Url" aria-describedby="Github Url" className="form-control" /><br/>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="Project Url">Project Url</span>
                    <input type="text" value={formData.project_url} onChange={e => updateForm(e, "project_url")} placeholder="Project Url" aria-label="Project Url" aria-describedby="Project Url" className="form-control" /><br/>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="Description">Description</span>
                    <input type="text" value={formData.description} onChange={e => updateForm(e, "description")} placeholder="Description" aria-label="Description" aria-describedby="Description" className="form-control" /><br/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg">Add Project</button><br/>
                <button type="button" className="btn btn-dark btn-lg" onClick={() => setIsClicked(false)}>Cancel</button>
            </form>    
        </div>
        
    )
}

export default AddProjectForm