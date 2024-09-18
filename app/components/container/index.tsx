import React from 'react';

type ContainerProps = {
    children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="flex flex-col w-full bg-blue-background">
            {children}
        </div>
    );
};

export default Container;