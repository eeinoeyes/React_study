import { useState } from 'react'

function CreateProject() {
   const [projects, setProjects] = useState([
      { id: 1, name: '프로젝트 A', status: '미완료' },
      { id: 2, name: '프로젝트 B', status: '완료' },
   ])
   const [inputs, setInputs] = useState({ name: '', status: '미완료' })
   const [nextId, setNextId] = useState(3)
   const onChange = (e) => {
      const { name, value } = e.target
      setInputs((prev) => ({ ...prev, [name]: value }))
   }
   const onRemove = (id) => {
      setProjects(projects.filter((project) => project.id !== id))
   }
   const onClick = () => {
      setProjects([
         ...projects,
         {
            id: nextId,
            name: inputs.name,
            status: inputs.status,
         },
      ])
      setNextId(nextId + 1)
      setInputs({ name: '', status: '미완료' })
   }
   const projectList = projects.map((data) => (
      <li onDoubleClick={() => onRemove(data.id)}>
         프로젝트 이름: {data.name}, 상태: {data.status}, Id:{data.id}
      </li>
   ))

   return (
      <div>
         <input name="name" type="text" placeholder="프로젝트 이름" value={inputs.name} onChange={onChange} />
         <select name="status" value={inputs.status} onChange={onChange}>
            <option value="미완료">미완료</option>
            <option value="완료">완료</option>
         </select>
         <button onClick={onClick}>추가</button>
         <ul>{projectList}</ul>
      </div>
   )
}

export default CreateProject
