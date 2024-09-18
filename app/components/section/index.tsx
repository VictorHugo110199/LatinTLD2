import React from 'react';

type SectionProps = {
    children: React.ReactNode;
    spaceBottom?: number;
};

const Section: React.FC<SectionProps> = ({ children, spaceBottom }) => {

    const headerHeight = 56; // Defina a altura do cabeçalho aqui
    const spaceBottomValue = spaceBottom || 0;

    const sectionStyle = {
        minHeight: `calc(100vh - ${headerHeight + spaceBottomValue}px)`,
    };

    return (
        <section className='w-full justify-center flex border-b-2 border-yellow bg-blue-background'>
            <div className="w-full max-w-screen-xl p-5 items-center justify-between" style={sectionStyle}>
                {children}
            </div>
        </section>
    );
};

export default Section;