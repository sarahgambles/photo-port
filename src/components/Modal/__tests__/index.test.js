const { default: Modal } = require("..");
const { fireEvent } = require("@testing-library/react");

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

describe('Modal component', () => {
    it('renders', () => {
        // baseline render component test
        it('matches snapshot DOM node structure', () => {
            // Arrange the snapshot - declare variables
            // Assert the match
        })
    })

    // snapshot test
});

describe('Click Event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />);
            fireEvent.click(getByText('Close this modal'));

            expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})

