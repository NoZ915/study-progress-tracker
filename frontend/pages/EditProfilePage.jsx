import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextInput, Select, Textarea, Modal, Group, Avatar } from '@mantine/core';
import { useAuthContext } from '../hooks/useAuthContext.js';

const regions = [
    { value: 'Taipei', label: '台北市' },
    { value: 'Taichung', label: '台中市' },
    { value: 'Kaohsiung', label: '高雄市' },
    // 還沒輸入完
];

const avatars = [1, 2, 3, 4, 5].map(num => `/images/avatars/${num}.jpg`);

const EditProfilePage = () => {
    const user = useAuthContext();
    const navigate = useNavigate();

    const [email] = useState(user?.email || '');
    const [name] = useState(user?.name || '');
    const [group, setGroup] = useState('');
    const [school, setSchool] = useState('');
    const [region, setRegion] = useState('');
    const [detail, setDetail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [openCancelModal, setOpenCancelModal] = useState(false);

    const handleSubmit = () => {
        const userData = {
            email,
            name,
            group,
            school,
            region,
            detail,
            avatar,
        };
        createOrUpdateUser(userData);
    };

    const handleCancel = () => {
        setOpenCancelModal(true);
    };

    const handleCloseModal = () => {
        setOpenCancelModal(false);
    };

    const handleConfirmCancel = () => {
        setOpenCancelModal(false);
        navigate('/');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>編輯個人資料</h2>

            <TextInput label="信箱" value={email} disabled />
            <TextInput label="姓名" value={name} disabled />

            <Select
                label="科別"
                placeholder="請選擇科別"
                data={[
                    { value: 'natural', label: '自然組' },
                    { value: 'social', label: '社會組' },
                    { value: 'other', label: '其他' },
                ]}
                value={group}
                onChange={setGroup}
            />

            <TextInput label="學校" value={school} onChange={(e) => setSchool(e.target.value)} />

            <Select
                label="所在地區"
                placeholder="請選擇所在地區"
                data={regions}
                value={region}
                onChange={setRegion}
            />

            <Textarea
                label="自我介紹"
                placeholder="請填寫您的自我介紹"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
            />

            <div>
                <h3>選擇頭像</h3>
                <Group spacing="xs">
                    {avatars.map((avatarSrc, index) => (
                        <Avatar
                            key={index}
                            src={avatarSrc}
                            alt={`Avatar ${index + 1}`}
                            size={60}
                            onClick={() => setAvatar(avatarSrc)}
                            style={{
                                border: avatar === avatarSrc ? '2px solid #00aaff' : 'none',
                                cursor: 'pointer',
                            }}
                        />
                    ))}
                </Group>
            </div>

            <Group spacing="xs" style={{ marginTop: '20px' }}>
                <Button onClick={handleSubmit} color="blue">{user ? '更新資料' : '建立帳號'}</Button>
                <Button variant="outline" onClick={handleCancel}>取消</Button>
            </Group>

            <Modal opened={openCancelModal} onClose={handleCloseModal} title="確定取消嗎？">
                <p>您還未儲存資料，確定要取消嗎？</p>
                <Group position="right">
                    <Button onClick={handleConfirmCancel} color="red">是</Button>
                    <Button onClick={handleCloseModal}>否</Button>
                </Group>
            </Modal>
        </div>
    );
};

export default EditProfilePage;