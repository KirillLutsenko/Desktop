import styled from 'styled-components';

export const SecondAppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  background-color: #c91212;
`;

export const DesktopField = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 830px;

  > *:nth-child(5n) {
    margin-right: 0;
  }

  @media screen and (max-width: 925px) {
    width: 540px;
  
    > *:nth-child(5n) {
      margin-right: 20px;
    }
  
    > *:nth-child(4n) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 635px) {
    width: 460px;
  
    > *:nth-child(4n) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 525px) {
    width: 390px;

    > *:nth-child(5n) {
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 415px) {
    width: 320px;
  
    > *:nth-child(4n) {
      margin-right: 10px;
    }
  
    > *:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 355px) {
      width: 230px;
  }
`;

export const ClickBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 20px 20px 0;
  width: 150px;
  height: 150px;
  font-size: 24px;
  font-weight: 700;
  color: #c91212;
  background: #fff;
  border-radius: 15px;
  box-shadow:inset -5px -5px 5px 0 rgba(0,0,0,.5), 
             inset 5px 5px 5px 0 rgba(255,255,255,0.5);
  cursor: pointer;

  @media screen and (max-width: 925px) {
    width: 120px;
    height: 120px;
    margin: 0 20px 20px 0;
  }

  @media screen and (max-width: 635px) {
    width: 100px;
    height: 100px;
  }
  
  @media screen and (max-width: 525px) {
    width: 90px;
    height: 90px;
    margin: 0 10px 10px 0;
    font-size: 18px;
  }
  
  @media screen and (max-width: 415px) {
    width: 100px;
    height: 100px;
    margin: 0 10px 10px 0;
    font-size: 16px;
    font-weight: 400;
  }
  
  @media screen and (max-width: 355px) {
    width: 70px;
    height: 70px;
    margin: 0 10px 10px 0;
  }
`;

export const MenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: ${props => `${props.yCoord + 5}px`};
  left: ${props => ((props.xCoord < 679)
    ? `${props.xCoord + 155}px`
    : `${props.xCoord - 125}px`
  )
};
  color: white;
  background: #fcb0b0;
  width: 120px;
  border-radius: 5px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  @media screen and (max-width: 925px) {
    top: ${props => `${props.yCoord + 5}px`};
    left: ${props => ((props.xCoord < 420)
    ? `${props.xCoord + 125}px`
    : `${props.xCoord - 105}px`
  )
};
    width: 100px;
}

  @media screen and (max-width: 635px) {
    top: ${props => `${props.yCoord + 5}px`};
    left: ${props => ((props.xCoord < 360)
    ? `${props.xCoord + 105}px`
    : `${props.xCoord - 80}px`
  )
};
    width: 75px;
  }

  @media screen and (max-width: 525px) {
    top: ${props => `${props.yCoord + 5}px`};
    left: ${props => ((props.xCoord < 300)
    ? `${props.xCoord + 95}px`
    : `${props.xCoord - 80}px`
  )
};
    width: 75px;
    font-size: 12px;
  }

  @media screen and (max-width: 415px) {
    top: ${props => `${props.yCoord + 5}px`};
    left: ${props => ((props.xCoord < 220)
    ? `${props.xCoord + 105}px`
    : `${props.xCoord - 80}px`
  )
};
  }

  @media screen and (max-width: 355px) {
    top: ${props => `${props.yCoord + 2}px`};
    left: ${props => ((props.xCoord < 160)
    ? `${props.xCoord + 75}px`
    : `${props.xCoord - 55}px`
  )
};
    width: 50px;
    font-size: 10px;
    font-weight: 700;
  }
`;

export const MenuButton = styled.button`
  position: relative;
  left: 40px;
  padding: 0 5px 5px;
  outline: none;
  border: none;
  border-radius: 2px;
  background: #fcb0b0;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    color: #9b0404;
  }

  @media screen and (max-width: 635px) {
    top: 2px;
    left: 25px;
  }

  @media screen and (max-width: 355px) {
    top: 2px;
    left: 15px;
    font-size: 9px;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0;
  padding-left: 0;
  list-style-type: none;

  > *:first-child {
    border-top: none;
  }
`;

export const MenuItem = styled.li`
  padding: 4px 40px;
  color: #000;
  cursor: pointer;
  border-top: 1px #000 solid;
  transition: background 0.3s ease;

  &:hover {
    color: #9b0404;
  }

  @media screen and (max-width: 925px) {
    padding: 4px 30px;
  }

  @media screen and (max-width: 635px) {
    padding: 4px 18px;
  }

  @media screen and (max-width: 525px) {
    padding: 6px 22px;
  }

  @media screen and (max-width: 355px) {
    padding: 2px 12px;
  }
`;
