import Logo from '../svgs/sapiens2.svg';

export const Sapiens2: React.FC<{ height?: string; width?: string }> = ({ height, width }) => {
    return (
        <div className={`h-${height} w-${width}`}>
            <img src={Logo} alt="Sapiens Logo" />
        </div>
    );
};