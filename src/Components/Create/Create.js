import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';

import { FirebaseContext, AuthContext } from '../../Context/FirebaseContext';
import { useHistory } from 'react-router-dom';


const Create = () => {

  const [name, setName] = useState('')
  const [catagory, setCatagory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)

  const { firebase } = useContext(FirebaseContext)
  const { user } = useContext(AuthContext)
  const history = useHistory()

  const date = new Date()

  const handleSubmit = () => {

    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=> {

      ref.getDownloadURL().then((url)=> {

        console.log(url);
        firebase.firestore().collection('products').add({

          name,
          catagory,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()
        })
      history.push('/')
      })
    })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">

          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="fname"
            name="Name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            value={catagory}
            onChange={(e) => setCatagory(e.target.value)}
            id="fname"
            name="category"
            defaultValue="John"
            required
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="fname"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            name="Price" />
          <br />

          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>

          <br />
          <input onChange={(e) => {

            setImage(e.target.files[0])
          }} type="file" />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>

        </div>
      </card>
    </Fragment>
  );
};

export default Create;
