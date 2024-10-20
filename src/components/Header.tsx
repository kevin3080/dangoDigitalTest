import { Cart } from './Cart';

export const Header = () => {
  return (
    <header>
      <div className='title-container'>
        <h1>
          <span>Test Task</span> of Dango Digital
        </h1>
      </div>
      <Cart />
    </header>
  );
};
