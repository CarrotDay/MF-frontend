import React, { useRef, useState } from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Layout, Form, Input, Button } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getAnnounce, updateAnnouce, createAnnounce} from '~/api/announce.api';
import { uploadFile } from '~/api/uploadFile.api';
import { MyInput } from '~/components';
import { AttachMoneyOutlined } from '@mui/icons-material';

const { Content } = Layout;
let file;

function ManageAnnounceDetail() {
  const [form] = Form.useForm();
  const { meta } = useParams();
  const navigate = useNavigate();
  const thumbnailRef = useRef();
  const thumbnailReviewRef = useRef();

  const [announce, setAnnounce] = useState(null);

  useQuery({
    queryKey: ['announce', meta],
    queryFn: () => getAnnounce(meta),
    onSuccess: data => {
      setAnnounce(data?.data);
    },
    enabled: Boolean(meta)
  });

  async function changeThumbnailHandle() {
    if (thumbnailRef.current.files && thumbnailRef.current.files[0]) {
      file = thumbnailRef.current.files[0];
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

  const submitHandle = async () => {
    try {
      let image;
      if (file) {
        let data = new FormData();
        data.append('file', file);
    
        image = (await uploadFile('AnnounceImage', data))?.data;
      } 
  
      if (!meta) {
        await createAnnounce({
          ...announce,
          meta: announce?.title?.replace(/ /g, '-'),
          image
        });
  
        alert('Đã tạo thông báo');
        navigate('/manage/product');
      }
      else {
        await updateAnnouce(meta, {
          ...announce,
          image
        });
  
        alert('Đã sửa thông báo');
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Content style={{ padding: '40px'}}>
        <div className="mb-3 text-center">
          Thumbnail

          <div className="mb-3">
            <img ref={thumbnailReviewRef} className="img-thumbnail" width="300px" src={announce?.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png'} alt="thumbnail..." />
          </div>

          <MyInput ref={thumbnailRef} onChange={changeThumbnailHandle} id="image" type="file" className="form-control-file invisible" />
          
          <button onClick={clickThumbnail} className="MyBtn MyBtn-primary">{announce?.srcImg ? 'CHANGE' : 'UPLOAD THUMBNAIL'}</button>
        </div>

        <Form.Item label="Title">
          <Input 
            value={announce?.title} 
            onChange={e => setAnnounce({ ...announce, 'title': e.target.value })} 
            placeholder="Title..." 
          />
        </Form.Item>
        
        <CKEditor
          editor={ Editor }
          data={announce?.content || ''}
          onChange={ ( event, editor ) => {
            setAnnounce({ ...announce, content: editor.getData() });
          }}
        />
      </Content>

      <div className="my-3">
        <Button onClick={submitHandle} type="primary">DONE</Button>
      </div>
    </div>
  );
}

export default ManageAnnounceDetail;