'use client';
import { useActions } from '@/src/5_shared/hooks/useActions';
import { useAppSelector } from '@/src/5_shared/store/hooks/redux';
import classNames from 'classnames';

const BurgerButton = () => {
  const active = useAppSelector((state) => state.burger.active);
  const { toggle } = useActions();

  return (
    <div
      onClick={() => toggle()}
      className="relative md:hidden flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 focus:ring-4 ring-opacity-30 duration-200 shadow-md cursor-pointer"
    >
      <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
        <span
          className={classNames(
            'bg-white h-[2px] w-7 transform transition-all duration-300 origin-left',
            {
              'translate-x-10': active,
            }
          )}
        />
        <span
          className={classNames(
            'bg-white h-[2px] w-7 rounded transform transition-all duration-300  delay-75',
            { 'translate-x-10': active }
          )}
        />
        <span
          className={classNames(
            'bg-white h-[2px] w-7 transform transition-all duration-300 origin-left delay-150',
            { 'translate-x-10': active }
          )}
        />

        <div
          className={classNames(
            'absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0',
            { 'translate-x-0 w-12': active }
          )}
        >
          <span
            className={classNames(
              'absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300',
              { 'rotate-45': active }
            )}
          />
          <span
            className={classNames(
              'absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300',
              { '-rotate-45': active }
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default BurgerButton;
