import Button from '@/src/5_shared/buttons/Button';
import { EnumTypeButton } from '@/src/5_shared/buttons/types/enums';

const Header = () => {
  return (
    <header className='px-20 py-5 flex justify-between items-center border-b border-b-light'>
      <div>Logo</div>
      <div className='[&>*:last-child]:ml-6'>
        <Button type={EnumTypeButton.TRANSPARENT}>Sign up</Button>
        <Button type={EnumTypeButton.PRIMARY}>Log in</Button>
      </div>
    </header>
  );
};

export default Header;
