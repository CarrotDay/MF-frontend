import React, { useRef } from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Layout } from 'antd';

import { MyInput } from '~/components';

const { Content } = Layout;

function ManageAnnounceDetail({ announce }) {
  const thumbnailRef = useRef();
  const thumbnailReviewRef = useRef();

  function changeThumbnailHandle() {
    if (thumbnailRef.current.files && thumbnailRef.current.files[0]) {
      var reader = new FileReader();
      reader.onload = e => {
        thumbnailReviewRef.current.setAttribute('src', e.target.result);
      };
      reader.readAsDataURL(thumbnailRef.current.files[0]);
    }
  };

  function clickThumbnail() {
    thumbnailRef.current.click();
  }

  return (
    <div>
      <Content style={{ padding: '40px'}}>
        <div className="mb-3 text-center">
          Thumbnail

          <div className="mb-3">
            <img ref={thumbnailReviewRef} className="img-thumbnail" width="300px" src={announce?.srcImg || 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png'} alt="thumbnail..." />
          </div>

          <MyInput ref={thumbnailRef} onChange={changeThumbnailHandle} id="image" type="file" className="form-control-file invisible" />
          
          <button onClick={clickThumbnail} className="MyBtn MyBtn-primary">{announce?.srcImg ? 'CHANGE' : 'UPLOAD THUMBNAIL'}</button>
        </div>
        
        <CKEditor
            editor={ Editor }
            data="<p>Hello from CKEditor 5!</p>"
            onReady={editor => {
              // You can store the "editor" and use when it is needed.
              console.log( 'Editor is ready to use!', editor );
            }}
            onChange={ ( event, editor ) => {
              const data = editor.getData();
              console.log( { event, editor, data } );
            }}
            onBlur={ ( event, editor ) => {
              console.log( 'Blur.', editor );
            }}
            onFocus={ ( event, editor ) => {
              console.log( 'Focus.', editor );
            }}
        />
      </Content>
    </div>
  );
}

export default ManageAnnounceDetail;