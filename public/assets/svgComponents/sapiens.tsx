import Logo from '../svgs/sapiens.svg';

export const Sapiens: React.FC<{ height?: string; width?: string }> = ({ height, width }) => {
    return (
        <div className={`h-${height} w-${width}`}>
            <img src={Logo} alt="Sapiens Logo" />
        </div>
    );
};