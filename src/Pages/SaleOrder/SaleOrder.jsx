import { Button, useDisclosure } from "@chakra-ui/react";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import OrderForm from "../../Components/OrderForm/OrderForm";

const SaleOrder = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <Button onClick={onOpen}>Sale Order</Button>

            <Modal isOpen={isOpen} onClose={onClose} size={'4xl'}>
            <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Sale Order</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <OrderForm></OrderForm>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default SaleOrder;