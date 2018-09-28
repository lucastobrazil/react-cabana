import React from 'react';
import Modal from '.';
import {BodyText} from '../Text';

export default function ModalDocs() {
    return (
        <Modal title="Modal title" buttonText="Click me">
           <BodyText> Sed urna felis, venenatis vel tristique in, bibendum vitae eros. Donec non arcu nisi. Sed nec porttitor
            tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas
            consequat ligula eget orci porta, non finibus ex ultricies. Etiam eu accumsan lectus, ac ultrices felis.</BodyText>
        </Modal>
    );
}
