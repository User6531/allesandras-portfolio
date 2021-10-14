import { useContext } from "react";
import {useEffect, useState} from 'react';
import useScrollbarSize from 'react-scrollbar-size';

import Translate from "../../global/Translate";
import { Context } from "../../Context/";
import { themes } from "../../global/themes";
import Modal from 'react-modal';
import * as S from './styled';

export const ModalWindow: React.FC = () => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const {state} = useContext(Context);
    const {isModalOpen, theme, language} = state;
    const { width } = useScrollbarSize();

    useEffect(() => {
        setIsOpen(isModalOpen);
        Modal.setAppElement('#root');
    }, [isModalOpen])

    const closeModal = () => {
        setIsOpen(false)
    }

    const afterOpenModal = () => {
        document.body.style.overflowY = 'hidden';
        document.body.style.paddingRight = width + 'px';
    }

    const AfterCloseModal = () => {
        document.body.style.overflowY = 'scroll';
        document.body.style.paddingRight = '';
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            backgroundColor: themes[theme].colors.backgroundModalColor,
        },
        overlay: {
            backgroundColor: 'rgba(255, 255, 255, .9)',
            zIndex: 99
        }
    };

    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onAfterClose={AfterCloseModal}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <S.Title>{Translate[language].modalTitle}</S.Title>
            <S.Description>{Translate[language].modalDescription}</S.Description>
            <S.TelegramButton href='https://t.me/kryvoruchko_andrey' target='_blank'>telega</S.TelegramButton>
            <S.CloseButton onClick={()=> closeModal()}>{Translate[language].modalClose}</S.CloseButton>
        </Modal>
    )
}