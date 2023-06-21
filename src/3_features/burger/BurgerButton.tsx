'use client';
import { useOutside } from '@/src/5_shared/hooks/useOutside';
import classNames from 'classnames';

const BurgerButton = () => {
  const { ref, isShow, setIsShow } = useOutside(false);

  const onToggleBurger = () => {
    setIsShow((isShow) => !isShow);
  };

  return (
    <div
      ref={ref}
      onClick={onToggleBurger}
      className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 focus:ring-4 ring-opacity-30 duration-200 shadow-md cursor-pointer"
    >
      <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
        <span
          className={classNames(
            'bg-white h-[2px] w-7 transform transition-all duration-300 origin-left',
            {
              'translate-x-10': isShow,
            }
          )}
        />
        <span
          className={classNames(
            'bg-white h-[2px] w-7 rounded transform transition-all duration-300  delay-75',
            { 'translate-x-10': isShow }
          )}
        />
        <span
          className={classNames(
            'bg-white h-[2px] w-7 transform transition-all duration-300 origin-left delay-150',
            { 'translate-x-10': isShow }
          )}
        />

        <div
          className={classNames(
            'absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0',
            { 'translate-x-0 w-12': isShow }
          )}
        >
          <span
            className={classNames(
              'absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300',
              { 'rotate-45': isShow }
            )}
          />
          <span
            className={classNames(
              'absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300',
              { '-rotate-45': isShow }
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default BurgerButton;
