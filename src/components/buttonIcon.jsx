import { Button } from 'react-bootstrap';


function ButtonIcon(props) {
    const { Icon, text, variant } = props;
    return (
        <Button variant={variant}>
            <span className='flex flex-row gap-2 items-center'>
                {Icon} {text}
            </span>
        </Button>
    );
}
export default ButtonIcon;