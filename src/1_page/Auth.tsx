'use client';
import { useSearchParams } from 'next/navigation';
import { TYPE_AUTH_PARAM } from '../5_shared/types/constant';
import { useEffect, useState } from 'react';
import { EnumTypeAuth } from '../5_shared/types/enum';
import LoginForm from '../2_widgets/forms/LoginForm';

const Auth = () => {
  const [currentTypeAuth, setCurrentTypeAuth] = useState<EnumTypeAuth>(
    EnumTypeAuth.LOGIN
  );
  const router = useSearchParams();
  const typeAuth = router.get(TYPE_AUTH_PARAM) as EnumTypeAuth;

  useEffect(() => {
    typeAuth && setCurrentTypeAuth(typeAuth);
  }, [typeAuth]);

  return (
    <section className="container mx-auto">
      {currentTypeAuth === EnumTypeAuth.LOGIN ? (
        <LoginForm />
      ) : (
        <h1>Register</h1>
      )}
    </section>
  );
};

export default Auth;
