import React, { Component, Fragment } from 'react';
import Modal from 'styled-react-modal';
import styled from 'styled-components';
import {
    space,
    color,
    borderColor,
    border,
    borderRadius,
    boxShadow,
    width,
    display,
    flexWrap,
    textAlign,
} from 'styled-system';
import { HeadingFive } from '../Text';
import Icon from '../Icon';
import Box from '../Box';

const CloseButton = styled.button`
    background: transparent;
    border: 0;
    cursor: pointer;
    ${space};

    svg {
        opacity: 0.4;
        &:hover {
            opacity: 1;
        }
    }
`;

const StyledModal = Modal.styled`
    ${space}
    ${borderRadius}
    ${boxShadow}
    ${color}
    ${border}
    ${borderColor}
    ${width}
    ${display}
    ${flexWrap}
    ${textAlign}

`;

const ModalBody = styled(Box)``;

export const ModalBackground = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 30;
    background-color: rgba(255, 255, 255, 0.9);
`;

StyledModal.defaultProps = {
    borderRadius: 'small',
    borderColor: 'lightGrey',
    border: 1,
    boxShadow: 100,
    bg: 'white',
    p: 2,
    flexWrap: 'wrap',
    width: 1 / 3,
    textAlign: 'left',
};

ModalBody.defaultProps = {
    width: 1,
    fontFamily: 'alt',
    color: 'grey',
};

export default class ModalLauncher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(e) {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const { children, title, buttonText, width } = this.props;
        return (
            <Fragment>
                <button onClick={this.toggleModal}>{buttonText}</button>
                <StyledModal
                    isOpen={this.state.isOpen}
                    onBackgroundClick={this.toggleModal}
                    onEscapeKeydown={this.toggleModal}
                    width={width}
                    display="flex"
                >
                    <HeadingFive flex="1">{title}</HeadingFive>
                    <CloseButton p={1} onClick={this.toggleModal}>
                        <Icon fontSize="body" />
                    </CloseButton>
                    <ModalBody>{children}</ModalBody>
                </StyledModal>
            </Fragment>
        );
    }
}
