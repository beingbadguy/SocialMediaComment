import { useEffect, useRef, useState } from 'react';

const Comment = ({ url }) => {
  const inpBox = useRef();
  const repBox = useRef();
  const [comments, setComments] = useState([]);
  const [replyButton, setReplyButton] = useState(-1);

  const commentAdder = () => {
    let NewComment = inpBox.current.value;
    setComments([...comments, { id: 'asdas', comment: NewComment, replies: [] }]);
  };

  const replyAdder = (index) => {
    let NewReply = repBox.current.value;
    let NewComments = [...comments];
    NewComments[index].replies.push(NewReply);
    setComments(NewComments);
  };

  return (
    <div>
      <div>
        <img src={url} alt='' className='h-[400px] ' />
      </div>
      <input ref={inpBox} type='text' className='border border-black m-2 outline-none px-1' />
      <button
        onClick={() => {
          commentAdder();
        }}
        className='bg-green-200 border border-green-200 px-2'
      >
        comment
      </button>
      <div>
        <div>
          <ol type='number' className='list-disc'>
            {comments &&
              comments.map((item, index) => {
                return (
                  <div key={index} className='border border-black mb-2 rounded'>
                    <li type='number' className='bg-zinc-200 p-2 rounded'>
                      {item.comment}
                    </li>
                    <div> </div>
                    <ol className='p-2'>
                      {item.replies.map((reply, index) => {
                        return (
                          <li key={index} type='number' className='bg-zinc-100 ml-5 mt-2 p-1'>
                            {reply}
                          </li>
                        );
                      })}
                      <div
                        className={`underline cursor-pointer ml-5 `}
                        onClick={() => {
                          setReplyButton(index);
                        }}
                      >
                        reply
                      </div>
                      <input
                        ref={repBox}
                        type='text'
                        className={`border outline-none px-1 mt-2 ml-5 ${
                          replyButton === index ? 'block' : 'hidden'
                        }`}
                      />
                      <button
                        onClick={() => {
                          replyAdder(index);
                          setReplyButton(-1);
                          repBox.current.value = '';
                        }}
                        className={`bg-green-200 px-2 m-1 ml-5 ${
                          replyButton === index ? 'block' : 'hidden'
                        }`}
                      >
                        add reply
                      </button>
                    </ol>
                  </div>
                );
              })}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default Comment;
