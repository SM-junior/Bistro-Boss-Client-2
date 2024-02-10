import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import SectionTitle from '../../Components/SectionTitle';

const AllUsers = () => {

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/users`)
            return res.json();
        },
    })

    const handleUserDelete = (user) => {
        console.log(user._id);
    }

    return (
        <div>
            <SectionTitle
                title={'manage all items'}
                subTitle={'hurry up!'}
            ></SectionTitle>
            <div className='bg-white p-10 mb-10'>
                <h2 className='text-xl font-semibold uppercase'>Total users: {users.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='bg-[#D1A054] text-white'>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td></td>
                                        <td><button onClick={() => handleUserDelete(user)} className="bg-rose-700 hover:bg-red-500 text-white text-lg p-2 rounded-md hover:scale-125"><FaRegTrashAlt></FaRegTrashAlt></button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;