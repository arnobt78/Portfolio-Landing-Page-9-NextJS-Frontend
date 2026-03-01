'use client';

import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

export default function Header() {
  return (
    <Container>
      <Div1>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none' }}>
          <DiCssdeck size={48} /> <span>Portfolio</span>
        </Link>
      </Div1>
      <Div2>
        <li>
          <NavLink href="#projects">Projects</NavLink>
        </li>
        <li>
          <NavLink href="#tech">Technologies</NavLink>
        </li>
        <li>
          <NavLink href="#about">About</NavLink>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://google.com">
          <AiFillGithub size={48} />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size={48} />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillInstagram size={48} />
        </SocialIcons>
      </Div3>
    </Container>
  );
}
