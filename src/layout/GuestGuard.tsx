import { FC, ReactNode } from 'react';
// project imports
import Customization from './Customization';
import GuestGuard from 'utils/route-guard/GuestGuard';
import NavMotion from './NavMotion';
import { useDispatch, useSelector } from 'store';
// ==============================|| MINIMAL LAYOUT ||============================== //

interface MinimalLayoutProps {
  children: ReactNode;
}

const MinimalLayout: FC<MinimalLayoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  console.log(user, '::::user');
  return (
    <NavMotion>
      <GuestGuard>
        <>
          {children}
          <Customization />
        </>
      </GuestGuard>
    </NavMotion>
  );
};

export default MinimalLayout;
