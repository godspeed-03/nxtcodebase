import React from 'react';

interface childprop {
  children: React.ReactNode;
}

export default function DocumnetContainer({ children }: childprop) {
  return (
    <main className="min-w-full min-h-screen flex flex-col items-center justify-center py-16 px-10">
      <section className="codeblock border-black border-2 shadow-md rounded-lg w-full min-h-screen p-5 md:p-10">
        {children}
      </section>
    </main>
  );
}
