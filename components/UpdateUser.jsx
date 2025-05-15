import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateUser = () => {
    const user = useLoaderData();
    // console.log(user);

    //form update

    const handleUpdateUser = (e)=>{
       e.preventDefault()
       const name = e.target.name.value;
       const email = e.target.email.value;
       const newUpdate = {name, email};
       console.log(newUpdate);

       //update user info in the db
       fetch(`http://localhost:3000/user/${user._id}`, {
  method: 'PUT',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(newUpdate)
})
  .then(res => res.json())
  .then(data => {
    if (data.modifiedCount) {
      console.log('Update done', data);

      // ✅ Sweet Alert দেখাও
      Swal.fire({
        title: 'Success!',
        text: 'User info updated successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  })
  .catch(error => {
    console.error('Update failed:', error);
    Swal.fire({
      title: 'Error!',
      text: 'Something went wrong while updating.',
      icon: 'error',
      confirmButtonText: 'Try Again'
    });
  });

    }


    return (
        <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form 
      onSubmit={handleUpdateUser}
      className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Update Your Info</h2>

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={user.name}
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={user.email}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Update
        </button>
      </form>
    </div>
        </div>
    );
};

export default UpdateUser;