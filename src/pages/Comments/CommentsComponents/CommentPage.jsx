//import './Projects.scss';
import Sidebar from '../../../components/Sidebar/Sidebar';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

const CommentsPage = () => {
  
  return (
    <main className="commentsPage">
    
      <div className='container'>
      <Sidebar />
        <div className="title-container">
          <h2 className='title-projects'>Déjame un comentario</h2>
        </div>
        <section className='comments'>
            {/*<CommentBox/>*/}
          {/*<CommentList/>*/}
        </section>
      </div>
    </main>
  );
}

export default CommentsPage;