import { ReactNode, FunctionComponent } from 'react';

type Props = {
  children?: ReactNode
};

const AuthLayout:FunctionComponent<Props> = ({ children } : Props) => (
  <>
    <main>
      <section className="relative w-full h-full py-40 min-h-screen">
        <div
          className="absolute top-0 w-full h-full bg-no-repeat bg-full"
          style={{
            backgroundImage: "url('/static/img/register_bg_2.png')",
          }}
        />
        {children}

      </section>
    </main>
  </>
);

AuthLayout.defaultProps = {
  children: '',
};
export default AuthLayout;
