import Logo from '../svgs/sapiens5.svg';

export const Sapiens5: React.FC<{ height?: string; width?: string }> = ({ height, width }) => {
    return (
        <div className={`h-${height} w-${width}`}>
            <img src={Logo} alt="Sapiens Logo" />
        </div>
    );
};