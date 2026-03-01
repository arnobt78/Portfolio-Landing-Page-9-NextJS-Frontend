'use client';

import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';
import {
  DropDownContainer,
  DropDownIcon,
  DropDownItem,
  DropDownItemDesc,
  DropDownItemTitle,
  DropDownTextContainer,
} from './NavDropDown';

interface NavDropDownProps {
  isOpen?: boolean;
}

export default function NavDropDown({ isOpen }: NavDropDownProps) {
  return (
    <DropDownContainer active={isOpen}>
      <DropDownItem href="#" target="_blank" rel="noreferrer">
        <DropDownIcon>
          <AiFillPhone />
        </DropDownIcon>
        <DropDownTextContainer>
          <DropDownItemTitle>Phone</DropDownItemTitle>
          <DropDownItemDesc>Let&apos;s get together and have a chat?</DropDownItemDesc>
        </DropDownTextContainer>
      </DropDownItem>
      <DropDownItem href="#" target="_blank" rel="noreferrer">
        <DropDownIcon>
          <AiOutlineMail />
        </DropDownIcon>
        <DropDownTextContainer>
          <DropDownItemTitle>Email</DropDownItemTitle>
          <DropDownItemDesc>If you want to talk just send a message and I&apos;ll get back</DropDownItemDesc>
        </DropDownTextContainer>
      </DropDownItem>
      <DropDownItem href="#" target="_blank" rel="noreferrer">
        <DropDownIcon>
          <FaLocationArrow />
        </DropDownIcon>
        <DropDownTextContainer>
          <DropDownItemTitle>Address</DropDownItemTitle>
          <DropDownItemDesc>1405, Angelus Dr, Florissant. Mo</DropDownItemDesc>
        </DropDownTextContainer>
      </DropDownItem>
    </DropDownContainer>
  );
}
