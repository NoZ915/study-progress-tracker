import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextInput, Select, Textarea, Group, Avatar, Text } from '@mantine/core';
import { useAuthContext } from '../hooks/useAuthContext.js';
import { useGetUserById } from '../hooks/users/useGetUserById.js';
import { regions, groups } from '../utils/editProfileList.js';
import styles from './EditProfilePage.module.css';
import ConfirmCancelModal from '../components/ConfirmCancelModal.jsx';

const avatars = [1, 2, 3, 4, 5].map(num => `/images/avatars/${num}.jpg`);

const EditProfilePage = () => {
    const user = useAuthContext();
    const { data } = useGetUserById(user?.id);

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [group, setGroup] = useState('');
    const [school, setSchool] = useState('');
    const [region, setRegion] = useState('');
    const [detail, setDetail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [openCancelModal, setOpenCancelModal] = useState(false);

    useEffect(() => {
        if (data) {
            setEmail(data.email || '');
            setName(data.name || '');
            setGroup(data.group || '');
            setSchool(data.school || '');
            setRegion(data.region || '');
            setDetail(data.detail || '');
            setAvatar(data.avatar || '');
        }
    }, [data]);

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
        <div className={styles.container}>
            <Text size="xl" fw={900} align="center" mb="md">編輯個人資料</Text>

            <TextInput label="信箱" defaultValue={email} disabled />
            <TextInput label="暱稱" value={name} onChange={(e) => setName(e.target.value)} withAsterisk />
            <Select
                label="身份"
                placeholder="請選擇身份"
                data={groups}
                value={group}
                onChange={setGroup}
                searchable
            />
            <TextInput label="學校" value={school} onChange={(e) => setSchool(e.target.value)} />
            <Select
                label="所在地區"
                placeholder="請選擇所在地區"
                data={regions}
                value={region}
                onChange={setRegion}
                searchable
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

            <ConfirmCancelModal
                opened={openCancelModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirmCancel}
            />
        </div>
    );
};

export default EditProfilePage;