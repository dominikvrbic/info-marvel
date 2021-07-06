import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  SimpleGrid,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
interface Props {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  description?: string;
}

export function ComicModal({
  isOpen,
  onClose,
  imageUrl,
  title,
  description,
}: Props) {
  return (
    <>
      <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid spacing={4} columns={[1, 2]}>
              <Image src={imageUrl} alt={title} />
              {description && <Text>{description}</Text>}
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
