
import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../context/auth'
import axios from 'axios'


// import useStyles from './styles'

const Profile = () => {


    const { user } = useContext(AuthContext)

    const [bioForm, setBioForm] = useState('')
    const [bioEdited, setBioEdited] = useState(false)
    const [bio, setBio] = useState('')
    const [image, setImage] = useState('')

    const storedToken = localStorage.getItem('authToken')



    useEffect(() => {
        console.log("123")
        axios.get(`/user/${user._id}`,  { headers: { Authorization: `Bearer ${storedToken}` }} )
            .then((response) => {
                console.log(response.data, 'KSKSKSK')
                setBio(response.data.bio)
                setImage(response.data.image)
            })
            .catch(err => console.log(err))
    }, [])


    const handleSubmit = (e) => {

        e.preventDefault()

        axios.post('/user/editprofile', { bio: bioForm, user: user._id }, { headers: { Authorization: `Bearer ${storedToken}` }})
            .then(() => setBio(bioForm))
            .catch(err => console.log(err))


    }
    console.log(bioEdited)



    const uploadImage = (file) => {

        return axios
            .post("/user/upload", file,  { headers: { Authorization: `Bearer ${storedToken}` } })
            .then(res => res.data)
            .catch(error => console.log(error));
    };


    

    const handleUpload = (e) => {

        const uploadData = new FormData();
        console.log('uploadData', e.target.files[0]);
        uploadData.append('image', e.target.files[0]);
        uploadImage(uploadData)

        .then(response => {setImage(response.secure_url)})
        .catch(error => console.log(error));

    }


const handleImageSubmit = (e) => {

 
    e.preventDefault()
    
   const requestBody = {image}

   axios.put('/user/profilepicture', requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })

   .then((response) => setImage(response.data.image))
   .catch(error => console.log(error));

}

  
 

if (!user){
    return   <>  </>
}

    return (
        <>
            <h1>  {user.name} </h1>
           

            {bio && <>  <p> {bio} </p>  </>}


            <form onSubmit={handleSubmit}>
                <label> create bio  </label>
                <input type="text" name="text" value={bioForm} onChange={(e) => setBioForm(e.target.value)} />
                <button type="submit"> Post </button>
            </form>

            <form onSubmit={handleImageSubmit}>
                <label> add your profile picture  </label>
                <input type="file" name="image" onChange={handleUpload} />
                <button type="submit"> Post </button>
            </form>

            <img src={image} alt='' /> 
        </>
    )
}

export default Profile