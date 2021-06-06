import React from 'react'
import PropTypes from 'prop-types'

import './PostDetail.css'

function PostDetail(props) {

  // need to get post by post id

  return (
    <div className="container">
      <div className="post-wrapper">
        <div className="detail">
          <h2 className="detail__username">Test username</h2>
          <p className="detail__time-upload">2020-06-08</p>
          <p className="detail__content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum magni doloribus modi itaque commodi et adipisci dolorum blanditiis consectetur, neque recusandae. Aperiam sit autem animi in libero voluptate! Beatae, iusto.
          </p>
          <img className="detail__image" src="http://lorempixel.com/400/200/sports/1/" alt="post detail" />
        </div>

        <div className="comment">
          Post Comment
        </div>
      </div>
    </div>
  )
}

PostDetail.propTypes = {

}

export default PostDetail

