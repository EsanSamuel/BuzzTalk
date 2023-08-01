import React, { useEffect, useState } from 'react'
import { Button, Card, Navbar, Sidebar } from '../components'
import { Link } from 'react-router-dom'
import { FaCommentDots, FaRetweet } from 'react-icons/fa'
import { AiOutlineCamera, AiOutlineRetweet } from 'react-icons/ai'
import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#8c6dfd",
};


const Home = () => {
    const [loading, setLoading] = useState(false)
    const [allPost, setAllPost] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)

            try {
                const response = await fetch('http://localhost:3001/api/v1/post', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                if (response.ok) {
                    const result = await response.json()

                    setAllPost(result.data.reverse())
                }
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, [])

    return (
        <div className='sm:p-3 p-3 relative flex flex-row min-h-screen'>
            <div className='sm:flex hidden text-white relative rounded  border-[#5f5f5f] '>
                <Sidebar />
            </div>

            <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:px-10  bg-[#13131a]'>
                <Navbar />


                <div className='flex justify-between w-full h-full  bg-[#13131a] pb-10'>
                    <div className='bg-[#1c1c24] sm:p-5 p-2 mt-5 h-full w-full card rounded'>

                        <Link to='/create'><input className='w-full h-[35px]  border-none rounded-[100px] p-5 bg-[#3a3a43] outline-none'
                            placeholder='Whats on your mind?' /></Link>
                        <div className='flex gap-3 bg-transparent p-3 text-[#e1d9d1] text-[20px]'>
                            <AiOutlineCamera className=' bg-transparent' />
                            <AiOutlineRetweet className=' bg-transparent' />
                            <AiOutlineRetweet className='bg-transparent' />
                        </div>

                        {loading && (
                        <div className='text-center bg-transparent mt-10'>
                            <ClipLoader
                                color='#fff'
                                loading={loading}
                                cssOverride={override}
                                size={150}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </div>
                    )}

                        {allPost ? (
                            <div className='w-full bg-[#1c1c24]  '>
                                {
                                    allPost.map((post) => (
                                        <Card key={post._id} {...post} />
                                    ))
                                }
                            </div>
                        ) : (
                            <h1 className='text-center text-[#5f5f5f] mt-10'>No Post found</h1>
                        )}

                    </div>



                    <div className='h-auto flex flex-col xl:flex hidden px-10 text-[#ead9d1]'>
                        <div className='bg-[#1c1c24] w-[250px] mt-5 rounded h-[300px] card text-center p-4'>
                            <h1>Notifications</h1>
                        </div>
                        <div className='bg-[#1c1c24] w-[250px] mt-5 rounded h-[300px] card'></div>
                        <div className='bg-[#1c1c24] w-[250px] mt-5 rounded h-[300px]  card'></div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Home