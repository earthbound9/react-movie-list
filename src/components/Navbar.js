import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #272727;
  color: white;
  height: 50px;
  width: 100%;
  position: fixed;
  z-index: 10;
  .inputWrapper {
    border: 3px solid teal;
    border-radius: 5px;
    background-color: #474747;
    display: flex;
  }

  .icon {
    margin: auto 5px;
  }

  input {
    background-color: #474747;
    color: white;
    border: none;
    outline: none;
    height: 20px;
  }
`;

const Navbar = () => {
  return (
    <NavWrapper>
      <h4>Movie Finder</h4>
      <form>
        <div className="inputWrapper">
          <FiSearch className="icon" />
          <input type="text" />
        </div>
      </form>
    </NavWrapper>
  );
};

export default Navbar;
