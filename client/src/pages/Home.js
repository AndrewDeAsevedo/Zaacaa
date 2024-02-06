//import { useEffect, useState } from "react"

// Lists all exams
/*
const Home = () => {
    const [users, setUsers] = useState(null)
    useEffect(() => {
        const getAllExams = async() => {
            const response = await fetch('http://localhost:3000/users')
            const json = await response.json()

            if (response.ok) {
                setUsers(json)  /*Returns an array of exams*/
        /*    }
        } 
        getAllExams()
    }, [])  /*Pass empty array as second arg so function only fires once*/

const Home = () => {

    return(
        <div className="home">
            <h2>Home</h2>
        </div>
    )
}

export default Home