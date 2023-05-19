import { useState } from 'react';
import ClearCompleted from '../../components/clear-completed/clear-completed';
import Filters from '../../components/filters/filters';
import ItemsLeft from '../../components/items-left/items-left';
import ModalWindow from '../../components/modal-window/modal-window';
import { Filter } from '../../custom_types';

export default function Footer({
  items,
  onFilterChange,
}: {
  items: number;
  onFilterChange: (filter: Filter) => void;
}) {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(() => {
      return !openModal;
    });
  };

  return (
    <footer className='footer'>
      <ItemsLeft items={items} />
      <Filters
        onFilterChange={(filter: Filter) => {
          onFilterChange(filter);
        }}
      />
      <button onClick={toggleModal}>Clear LS</button>
      <ModalWindow openModal={openModal} toggleModal={toggleModal} />
      <ClearCompleted />
    </footer>
  );
}
