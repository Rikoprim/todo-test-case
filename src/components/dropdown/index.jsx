import React, { useEffect, useRef, useState } from 'react';
import { IoFunnelOutline } from 'react-icons/io5';
import { Dropdown, DropdownMenu, Icon } from './dropdownStyled';

const Dropdowns = ({ children }) => {
  const [open, setOpen] = useState(false);
  const drops = useRef(null);

  const handleClickOutside = event => {
    if (drops.current && !drops.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <Dropdown ref={drops}>
      <Icon>
        <IoFunnelOutline size={27} onClick={() => setOpen(!open)} />
      </Icon>
      {open && (
        <DropdownMenu onClick={() => setOpen(!open)}>
          {children}
        </DropdownMenu>
      )}
    </Dropdown>
  );
};

export default Dropdowns;
