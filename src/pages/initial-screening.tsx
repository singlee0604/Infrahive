import EditProfile from 'components/users/account-profile/edit-profile/EditProfile';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const InitialScreenPage = () => {
  const userData = useSelector((state: RootState) => state.auth.user);
  const { push } = useRouter();
  useEffect(() => {
    if (userData?.initialScreening) push('/dashboard');
  }, []);
  return <EditProfile />;
};

InitialScreenPage.Layout = 'authGuard';

export default InitialScreenPage;
