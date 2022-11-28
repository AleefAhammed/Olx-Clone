import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../Context/FirebaseContext';
import { PostContext } from '../../Context/PostContext';

import './View.css';
function View() {

  const [userDetails, setUserDetails] = useState()
  const { postDetails } = useContext(PostContext)
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    const { userId } = postDetails
    firebase.firestore().collection('users').where('id', '==', userId).get().then((res) => {

      res.forEach(document => {

        setUserDetails(document.data())
      });
    })
  })

  return (
    <div className="viewParentDiv">

      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>

      <div className="rightSection">

        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.catagory}</p>
          <span>{postDetails.createdAt}</span>
        </div>

        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>Contact no: {userDetails.phone}</p>
        </div>
        }
      </div>

    </div>
  );
}
export default View;
