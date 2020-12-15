import React from 'react';

function Modal({currentPhoto}) {
    const {name, category, description, index} = currentPhoto;

    const [isModalOpen, setIsModalOpen] = useState(false);

    {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
    )}

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
                <p>
                    Photo Description
                </p>
                <button onClick={onClose} type="button">
                    Close this modal
                </button>
            </div>
        </div>
    );
}

const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i})
    setIsModalOpen(!isModalOpen);
}

export default Modal;