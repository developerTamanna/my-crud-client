import React, { use, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const User = ({userPromise}) => {

    const initialUsers = use(userPromise)
    console.log(initialUsers)
    const [users, setUsers] = useState(initialUsers)

     const handleAddUser = (e)=>{
        e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const newName = {name, email};
  console.log(newName);
  
  //create user in the database

  fetch('http://localhost:3000/user', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(newName)
  }).then(res=> res.json()).then(data=>{
    console.log("data after creating user in the db",data)
    if(data.insertedId){
        newName._id = data.insertedId;
        const newNames = [...users, newName];
        setUsers(newNames)
        alert('user added ad successfully')
        e.target.reset();
    }
  })
  
 }
//delete func

const handleUserDelete =(id)=>{
    console.log('delete this user',id)
    fetch(`http://localhost:3000/user/${id}`, {
        method: 'DELETE'
    }).then(res=> res.json())
    .then(data=>{
        if(data.deletedCount){
         const remainingUsers = users.filter  (user => user._id !== id) ;
         setUsers(remainingUsers)
         console.log('after delete ' ,data)
        }
      
    })
}


     return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        
      <form
      onSubmit={handleAddUser}
      className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
    {/* next */}
     
<div className="mt-10">
  <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">User List  {users.length}:</h2>

  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
      <thead className="bg-blue-100 text-gray-700">
        <tr>
          <th className="py-3 px-6 text-left border-b">Name</th>
          <th className="py-3 px-6 text-left border-b">Email</th>
          <th className="py-3 px-6 text-center border-b">Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id} className="hover:bg-blue-50 transition">
            <td className="py-3 px-6 border-b">{user.name}</td>
            <td className="py-3 px-6 border-b">{user.email}</td>
            <td className="py-3 px-6 border-b text-center">
              {/* Delete icon only */}
              <button
              onClick={()=>handleUserDelete(user._id)}
              className="text-red-500 hover:text-red-700 text-lg">
                <FaTimes />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>



    </>
    
  );
};


export default User;