


function ButtonIcon(props) {
    const { Icon, text, variant } = props;
    return (
        <button variant={variant}>
            <span className='flex flex-row gap-2 items-center'>
                {Icon} {text}
            </span>
        </button>
    );
}
export default ButtonIcon;