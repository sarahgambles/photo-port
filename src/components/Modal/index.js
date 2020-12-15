import React from 'react';

function Modal({currentPhoto}) {
    const {name, category, description, index} = currentPhoto;

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
                <p>
                    Photo Description
                </p>
                <button type="button">
                    Close this modal
                </button>
            </div>
        </div>
    );
}

const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i})
    setIsModalOpen(true);
}

export default Modal;