import React from 'react';
import PropTypes from 'prop-types';

type HelloProps = {
  name: string;
  big?: boolean;
  onHello?: () => void;
  onBye?: () => void;
};

/**
 * 안녕하세요 라고 보여주고 싶을 땐 `Hello` 컴포넌트를 사용하세요.
 *
 */
const Hello = ({ name, big, onHello, onBye }: HelloProps) => {
  return (
    <div>
      {big ? <h1>안녕하세요, {name}!</h1> : <p>안녕하세요, {name}!</p>}
      <div>
        <button onClick={onHello}>Hello</button>
        <button onClick={onBye}>Bye</button>
      </div>
    </div>
  );
};

// Hello.propTypes = {
//   /** 보여주고 싶은 이름 */
//   name: PropTypes.string.isRequired,
//   big: PropTypes.bool,
//   onHello: PropTypes.func,
//   onBye: PropTypes.func,
// };

Hello.defaultProps = {
  big: false,
};

export default Hello;
