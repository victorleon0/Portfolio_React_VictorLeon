import '../Comments.scss';
//import React, { Component } from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import SocialMedia from '../../../components/SocialMedia/SocialMedia';
import CommentBox from './CommentBox';
//import CommentApp from './CommentApp'


const CommentsPage = () => {
  
  return (
    <main className="commentsPage">
    
      <div className='container'>
      <Sidebar />
        <div className="title-container">
          <h2 className='title-comments'>Déjame un comentario</h2>
        </div>
        <section className='commentsBox'>
            <CommentBox/>
          {/*<CommentList/>*/}
          {/*<CommentApp />*/}
        </section>
      </div>
      <SocialMedia />

    </main>
  );
}

export default CommentsPage;