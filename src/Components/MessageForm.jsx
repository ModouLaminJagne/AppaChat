import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) sendMessage(creds, chatId, { text });

    setValue('');
  };
  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping(props, chatId);
  };

//     const handleRemoveItem = (e) => {
//    const name = e.target.getAttribute("name")
//     updateList(list.filter(item => item.name !== name));
  

//   return (
//             <div>
//             {list.map(item => {
//                 return (
//                 <>
//                     <span name={item.name} onClick={handleRemoveItem}>
//                     x
//                     </span>
//                     <span>{item.name}</span>
//                 </>
//                 );
//             })}
//             </div>
//         )
//     };
    

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <div>
      <form className="message-form" onSubmit={handleSubmit}>
        <input
          className="message-input"
          placeholder="Send a message..."
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <label htmlFor="upload-button">
          <span className="image-button">
            <PictureOutlined className="picture-icon" />
          </span>
        </label>
        <input
          type="file"
          multiple={false}
          id="upload-button"
          style={{ display: 'none' }}
          onChange={handleUpload}
        />
        <button type="submit" className="send-button">
          <SendOutlined className="send-icon" />
        </button>
      </form>
      {/* <button className="delete-button">
              <DeleteOutlined className='delete-icon'/>
      </button> */}
    </div>
  );
};
export default MessageForm;
